import { NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {HomeComponent} from "./home/home.component";


const routes:Routes = [
  {path:'home', component: HomeComponent},
  {path: 'portfolio', loadChildren: 'app/portfolios/portfolio.module#PortfolioModule'},
  {path:"", redirectTo: '/home', pathMatch:'full'}
  ];

@NgModule({
  imports:[RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports:[RouterModule]
})

export class AppRoutingModule{}
