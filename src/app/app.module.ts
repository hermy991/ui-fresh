import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FreshPageTextBoxComponent } from './pages/editors/page-text-box/fresh.page-text-box.component';
import { FreshTextBoxComponent } from './components/editors/text-box/fresh.text-box.component';
import { ROUTES } from './app.routes';
import {FreshNumberBoxComponent} from './components/editors/number-box/fresh.number-box.component';
import {FreshPageNumberBoxComponent} from './pages/editors/page-number-box/fresh.page-number-box.component';

@NgModule({
  declarations: [
    AppComponent,
    /** Components */
    FreshTextBoxComponent,
    FreshNumberBoxComponent,
    /** Pages */
    FreshPageTextBoxComponent,
    FreshPageNumberBoxComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
