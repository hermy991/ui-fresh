import { Routes } from "@angular/router";
import { FreshPageTextBoxComponent } from "./pages/editors/page-text-box/fresh.page-text-box.component";
import { AppComponent } from "./app.component";

export const ROUTES: Routes = [
  { path: '', component: AppComponent},
  { path: 'page-text-box', component: FreshPageTextBoxComponent}
];