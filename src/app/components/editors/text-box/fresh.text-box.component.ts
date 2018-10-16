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
  @Input() maskOptions = { 
    mask: ["1+ (", /[\d]/, /[\d]/, /[\d]/, ") ", /[\d]/, /[\d]/, /[\d]/, " - ", /[\d]/, /[\d]/, /[\d]/, /[\d]/ ],
    placeholder: "_",
    hideBlur: false,
  }

  /** Attributes */
  showError = false
  showAdd = false
  showCalendar = false
  showHelp = false
  showSearch = false
  showRefresh = false

  get gtextBoxInput() { return this.el.nativeElement.querySelector(".fresh-text-box")}
  get gmask() { return FreshGlobal.getMaskFilter(this.maskOptions.mask); }
  get gplaceholder() { return this.maskOptions && this.maskOptions.placeholder ? this.maskOptions.placeholder : "_"}
  get ghideBlur() { return this.maskOptions && this.maskOptions.hideBlur ? this.maskOptions.hideBlur : false}

  constructor(private el: ElementRef){}

  ngOnInit(){
    let mask = this.gmask
    let maskDisplay = "";
    for(let maskTemp of mask){
      if(maskTemp.constructor == String)
        maskDisplay += maskTemp
      else
        maskDisplay += this.gplaceholder
    }
    this.gtextBoxInput.value = maskDisplay
  }
 
  onKeydown(event){
    // let currentKey = event.key.toLowerCase()
    // let el = this.gtextBoxInput;
    // if("." == currentKey && el.value.includes(currentKey)){
    //   event.preventDefault()
    // }
    // else if("-" == currentKey && el.selectionStart > 0){
    //   event.preventDefault()
    // }
    // else if(!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-",
    //   "backspace", "delete", "arrowleft", "arrowright", "arrowright", "tab", "enter", "home", "end"].some(x=> (x + "").toLowerCase() == currentKey)){
    //   event.preventDefault()
    // }
    // console.log({currentKey})
  }

  onHighlightOff(){
     this.value = ""
     setTimeout(() => {this.gtextBoxInput.value = ""; this.gtextBoxInput.focus()}, 0)
  }
}
