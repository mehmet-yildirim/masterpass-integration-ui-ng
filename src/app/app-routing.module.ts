import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found.component";

import {CardDemo} from "./demo/card.component";
import {ButtonDemo} from "./demo/button.component";
import {StepCheckMsisdnComponent} from "./step-check-msisdn/step-check-msisdn.component";

const appRoutes : Routes = [
  {path: '', redirectTo: 'check-msisdn', pathMatch: 'full'},
  {path: 'check-msisdn', component: StepCheckMsisdnComponent},
  {path: 'demo-card', component: CardDemo},
  {path: 'demo-button', component: ButtonDemo}
  //{path: '**', component: NotFoundComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
