import {Component, OnInit, Input, Renderer2} from '@angular/core';
import { FreshNumberBoxUtility } from './fresh.number-box.utility';

@Component({
  selector: "fresh-number-box",
  templateUrl: "./fresh.number-box.component.html",
  styleUrls: ["./fresh.number-box.component.css"]
})
export class FreshNumberBoxComponent implements OnInit {
  /** Inputs & Outputs */
  @Input() type = "text" // password, email, number
  @Input() placeholder = ""
  @Input() allowClearButton = false
  @Input() allowSpinButtons = false
  @Input() value = undefined
  @Input() min = undefined
  @Input() max = undefined
  @Input() format = "" //
  @Input() reverse = false;

  /** Attributes */
  showError = false
  showAdd = false
  showCalendar = false
  showHelp = false
  showSearch = false
  showRefresh = false
  get numberBoxInput(){ return this.render.selectRootElement(".fresh-number-box") }
  get formatNumber() {return FreshNumberBoxUtility.formattingNumber(123456.789, this.format)}


  constructor(public render: Renderer2){}
  ngOnInit(){}

  onHighlightOff(){
    this.value = ""
    setTimeout(() => this.numberBoxInput.focus(), 0)
  }
  onKeydown(event){
    let currentKey = event.key
    
    console.log({currentKey})
  }
}
