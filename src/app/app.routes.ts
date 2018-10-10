import { Routes } from "@angular/router";
import { FreshPageTextBoxComponent } from "./pages/editors/page-text-box/fresh.page-text-box.component";
import { FreshPageNumberBoxComponent } from "./pages/editors/page-number-box/fresh.page-number-box.component";

export const ROUTES: Routes = [
  { path: 'page-text-box', component: FreshPageTextBoxComponent},
  { path: 'page-number-box', component: FreshPageNumberBoxComponent},
];
