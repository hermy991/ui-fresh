import {Component, OnInit, Input, Renderer2} from '@angular/core';

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

  constructor(public render: Renderer2){}
  ngOnInit(){}

  onHighlightOff(){
    this.value = ""
    setTimeout(() => this.render.selectRootElement(".fresh-text-box").focus(), 0)
  }
}
