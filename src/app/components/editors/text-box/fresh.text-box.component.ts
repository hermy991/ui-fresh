import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "fresh-text-box",
  templateUrl: "./fresh.text-box.component.html",
  styleUrls: ["./fresh.text-box.component.css"]
})
export class FreshTextBoxComponent implements OnInit {
  /** Inputs & Outputs */
  @Input() type = "text" //password, email, number
  @Input() placeholder = ""
  @Input() showClearButton = false;

  /** Attributes */
  showError = true;

  constructor(){}
  ngOnInit(){}
}