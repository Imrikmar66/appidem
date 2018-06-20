import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/controllers/app.component';
import { MainTranslateService } from './services/main.translate.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MainTranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
