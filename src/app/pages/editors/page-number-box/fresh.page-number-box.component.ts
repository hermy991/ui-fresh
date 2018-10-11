import { Component } from "@angular/core";

@Component({
  selector: "fresh-page-number-box",
  templateUrl: "./fresh.page-number-box.component.html"
})
export class FreshPageNumberBoxComponent {
  value = undefined;
  placeholder = ""
  allowClearButton = true
  constructor(){}
}
