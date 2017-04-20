import {BrowserModule} from "@angular/platform-browser";
import {ApplicationRef, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {MaterialModule} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {NotFoundComponent} from "./not-found.component";
import {Router} from "@angular/router";

import {CardDemo} from "./demo/card.component";
import {ButtonDemo} from "./demo/button.component";
import {StepCheckMsisdnComponent} from "./step-check-msisdn/step-check-msisdn.component";
import {InputDemo} from "./demo/input.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppGlobals} from "./app.globals";


@NgModule({
  declarations: [
    AppComponent,
    StepCheckMsisdnComponent,
    NotFoundComponent,
    CardDemo,
    ButtonDemo,
    InputDemo
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    //MasterpassMaterialModule,
    MaterialModule
  ],
  providers: [AppGlobals],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
