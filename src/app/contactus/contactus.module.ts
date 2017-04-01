import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {ContactUsRoutingModule} from './contactus.routing.module';
import {ContactUsComponent} from './contactus.component';


@NgModule({
  imports:[CommonModule, FormsModule, ContactUsRoutingModule],
  declarations:[ContactUsComponent]

})

export class ContactUsModule{}
