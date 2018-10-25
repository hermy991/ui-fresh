import {Component, OnInit, Input, ElementRef, EventEmitter, Output, SimpleChanges, OnChanges} from '@angular/core';
import * as numeral from "numeral"

@Component({
  selector: "fresh-number-box",
  templateUrl: "./fresh.number-box.component.html",
  styleUrls: ["./fresh.number-box.component.css"]
})
export class FreshNumberBoxComponent implements OnChanges {
  /** Inputs & Outputs */
  @Input() placeholder = ""
  @Input() showClearButton:boolean|string = false
  @Input() selectInFocus:boolean|string = false
  @Input() addingUpDown:boolean|string = false
  @Input() textAlign = "right";
  @Input() value = undefined
  // @Input() min = undefined
  // @Input() max = undefined
  @Input() format = "" 
  @Input() disabled:boolean|string = false 
  @Input() readOnly:boolean|string = false 
  @Output() valueChange = new EventEmitter<number>()
  @Output() isFocusChange = new EventEmitter<boolean>()


  /** Attributes */
  showError = false
  showAdd = false
  showCalendar = false
  showHelp = true
  showSearch = false
  isFocus = false;
  get gnumberBoxInput(){ return this.el.nativeElement.querySelector(".fresh-number-box")}
  get gshowClearButton() { return this.showClearButton === true || this.showClearButton === ""}
  get giconClass() { if(this.textAlign == "right") return "left"; else return "right" }
  get gdisabled() { return this.disabled === true || this.disabled === ""}
  get greadOnly() { return this.readOnly === true || this.readOnly === ""}
  get gaddingUpDown() { return this.addingUpDown === true || this.addingUpDown === ""}

  constructor(private el: ElementRef){}

  

  ngOnChanges(changes: SimpleChanges){
    if(changes["value"]) {
      if(changes["value"].currentValue === undefined || changes["value"].currentValue === "")
        this.gnumberBoxInput.value = ""
      else if(!isNaN(changes["value"].currentValue)){
        if(this.isFocus || (this.format || "") == "")
          this.gnumberBoxInput.value = numeral(changes["value"].currentValue).value()
        // else if (this.isFocus || (this.format || "") != "")
        //   this.gnumberBoxInput.value = numeral(this.gnumberBoxInput.value).value()
        else
          this.gnumberBoxInput.value = numeral(changes["value"].currentValue).format(this.format)
        
      }
    }
  }

  sendFocus(focus){
    this.isFocus = focus
    this.isFocusChange.emit(focus)
  }

  onHighlightOff(){
    this.value = ""
    setTimeout(() => {this.gnumberBoxInput.value = ""; this.gnumberBoxInput.focus()}, 0)
  }

  onKeydown(event){
    let currentKey = event.key.toLowerCase()
    let el = this.gnumberBoxInput;
    if("." == currentKey && el.value.includes(currentKey)){
      event.preventDefault()
    }
    else if("-" == currentKey && el.selectionStart > 0){
      event.preventDefault()
    }
    else if(["arrowup", "arrowdown"].some(x=> x.toLowerCase() == currentKey) && el.selectionStart > 0){
      let strPart = el.value.substring(0, el.selectionStart)
      let decimalPart = strPart.substring(strPart.indexOf(".") < 0 ? strPart.length : strPart.indexOf("."))
      
      if(!isNaN(strPart)){
        let numeralNumber = numeral(strPart)
        debugger
        if(currentKey == "arrowup")
          strPart = numeralNumber.add((numeralNumber.value() >= 0 ? 1 : -1)).value() + "";
        else if(currentKey == "arrowdown")
          strPart = numeralNumber.add((numeralNumber.value() >= 0 ? -1 : 1)).value() + "";
        el.value = strPart + decimalPart + el.value.substring(el.selectionStart)
        el.selectionStart = el.selectionEnd = (strPart + decimalPart).length
        event.preventDefault()
      }
    }
    else if(!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-",
      "backspace", "delete", "arrowleft", "arrowright", "arrowright", "tab", "enter", "home", "end"].some(x=> (x + "").toLowerCase() == currentKey)){
      event.preventDefault()
    }
  }

  onFocus(){
    let el = this.gnumberBoxInput;
    if(el.value == "")
      return
    el.value = numeral(el.value).value()
    if(this.selectInFocus === true || this.selectInFocus === "")
      el.select()
      this.sendFocus(true)
  }

  onBlur(){
    let el = this.gnumberBoxInput;
    if(el.value == "")
      return
    if((this.format || "").trim() === "")
      return
    el.value = numeral(el.value).format(this.format)
    this.sendFocus(false)
  }

  onKeyup(){
    var el = this.gnumberBoxInput
    let tempValue:number = undefined
    if(el.value == "")
      tempValue = undefined
    else
      tempValue = Number(numeral(el.value).value())
    this.value = tempValue
    this.valueChange.emit(this.value)
  }

  // onSelect(event){
  //   console.log(event)
  //   let el = this.gnumberBoxInput;
  //   el.selectionStart = el.selectionEnd;
  // }
}
