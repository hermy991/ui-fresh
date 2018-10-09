import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FreshPageTextBoxComponent } from './pages/editors/page-text-box/fresh.page-text-box.component';
import { FreshTextBoxComponent } from './components/editors/text-box/fresh.text-box.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    /** Components */
    FreshTextBoxComponent,
    /** Pages */
    FreshPageTextBoxComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
