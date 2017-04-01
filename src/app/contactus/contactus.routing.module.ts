import {NgModule} from '@angular/core';
import {ContactUsComponent} from './contactus.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path:'contactus', component: ContactUsComponent}
];


@NgModule({
  imports:[ RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactUsRoutingModule{
}
