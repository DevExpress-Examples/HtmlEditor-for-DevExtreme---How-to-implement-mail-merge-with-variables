import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxTextBoxModule } from "devextreme-angular/ui/text-box";
import { DxHtmlEditorModule } from "devextreme-angular/ui/html-editor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTextBoxModule,
    DxHtmlEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
