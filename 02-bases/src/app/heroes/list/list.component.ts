import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Spiderman','Thor','Hulk','Ironman','She Hulk'];
  public deleteHero?: string;

  removeLastHero():void{
   this.deleteHero = this.heroName.pop();
   console.log(this.deleteHero)
  }
}
