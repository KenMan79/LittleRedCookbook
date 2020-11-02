import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent
{
  public Recipes: any[];

  public constructor()
  {
    this.Recipes =
    [
      {
          recipe_name: "Some name"
      },
      {
          recipe_name: "Some other name"
      }
    ];
  }
}
