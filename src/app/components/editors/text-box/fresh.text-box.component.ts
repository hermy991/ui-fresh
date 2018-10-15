import {Component, OnInit, Input, Renderer2, ElementRef} from '@angular/core';
import { FreshGlobal } from 'src/app/core/fresh.global.untility';

@Component({
  selector: "fresh-text-box",
  templateUrl: "./fresh.text-box.component.html",
  styleUrls: ["./fresh.text-box.component.css"]
})
export class FreshTextBoxComponent implements OnInit {
  /** Inputs & Outputs */
  @Input() type = "text" // password, email, number
  @Input() placeholder = ""
  @Input() allowClearButton = false
  @Input() value = ""
  @Input() mask = undefined

  /** Attributes */
  showError = false
  showAdd = false
  showCalendar = false
  showHelp = false
  showSearch = false
  showRefresh = false

  get gmask() { 
    if((this.mask || "") == "")
      return undefined;
    if(FreshGlobal.isJsonString(this.mask))
      return JSON.parse(this.mask)
    if(this.mask.constructor == String)
      return {
        pattern: this.mask
      }
  }
  get gtextBoxInput(){ return this.el.nativeElement.querySelector(".fresh-text-box")}
  get gpattern() {return this.gmask ? this.gmask.pattern : undefined}
  get gplaceholder() {return this.gmask ? this.gmask.placeholder : ""}

  constructor(private el: ElementRef){}
  ngOnInit(){}

  
  onKeydown(event){
    let currentKey = event.key.toLowerCase()
    let el = this.gtextBoxInput;
    if("." == currentKey && el.value.includes(currentKey)){
      event.preventDefault()
    }
    else if("-" == currentKey && el.selectionStart > 0){
      event.preventDefault()
    }
    else if(!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-",
      "backspace", "delete", "arrowleft", "arrowright", "arrowright", "tab", "enter", "home", "end"].some(x=> (x + "").toLowerCase() == currentKey)){
      event.preventDefault()
    }
    console.log({currentKey})
  }

  onHighlightOff(){
    this.value = ""
    setTimeout(() => {this.gtextBoxInput.value = ""; this.gtextBoxInput.focus()}, 0)
  }
}
