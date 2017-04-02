import {Component, Input} from '@angular/core';
import {trigger, state, animate, style, transition, group} from '@angular/core';

@Component({
  selector: 'hero-list-basic',
  template:require("./home.component.html")
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
