import {Component, OnInit, Input, Renderer2} from '@angular/core';

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
  @Input() value = ""
  @Input() min = undefined
  @Input() max = undefined
  @Input() format = ""
  @Input() reverse = false;

  /** Attributes */
  showError = false
  showAdd = false
  showCalendar = false
  showHelp = false
  showSearch = false
  showRefresh = false

  constructor(public render: Renderer2){}
  ngOnInit(){}

  onHighlightOff(){
    this.value = ""
    setTimeout(() => this.render.selectRootElement(".fresh-number-box").focus(), 0)
  }
}
