import {Component, Input} from '@angular/core';
import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
  selector: 'hero-list-basic',
  template:require("./home.component.html"),
  animations: [
     trigger('heroState', [
       state('inactive', style({transform: 'translateX(0) scale(1)'})),
       state('active',   style({transform: 'translateX(0) scale(1.1)'})),
       transition('inactive => active', animate('100ms ease-in')),
       transition('active => inactive', animate('100ms ease-out')),
       transition('void => inactive', [
         style({transform: 'translateX(-100%) scale(1)'}),
         animate(100)
       ]),
       transition('inactive => void', [
         animate(100, style({transform: 'translateX(100%) scale(1)'}))
       ]),
       transition('void => active', [
         style({transform: 'translateX(0) scale(0)'}),
         animate(200)
       ]),
       transition('active => void', [
         animate(200, style({transform: 'translateX(0) scale(0)'}))
       ])
     ])
   ]
})

export class HomeComponent{

  constructor(){}

  title:string = "Home Component is Loaded";
  @Input()  home:Home = new Home();


}

export class Home{

  constructor(  public state:string = 'inactive'){}

  togglestate():boolean{
    this.state = this.state == 'active' ? 'inactive' :'active';
    return false;
  }
}
