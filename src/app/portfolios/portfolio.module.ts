import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PortfolioRoutingComponent} from './portfolio.routing.module';
import {PortfolioComponent} from './portfolio.component';


@NgModule({
  imports: [CommonModule, FormsModule, PortfolioRoutingComponent],
  declarations:[PortfolioComponent]
})

export class PortfolioModule{}
