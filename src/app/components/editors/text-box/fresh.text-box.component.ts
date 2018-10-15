import {Component, OnInit, Input, Renderer2} from '@angular/core';
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
  get gpattern() {return this.gmask ? this.gmask.pattern : undefined}
  get gplaceholder() {return this.gmask ? this.gmask.placeholder : ""}

  constructor(public render: Renderer2){}
  ngOnInit(){}

  onHighlightOff(){
    this.value = ""
    setTimeout(() => this.render.selectRootElement(".fresh-text-box").focus(), 0)
  }
}
