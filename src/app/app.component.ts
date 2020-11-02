import { Component } from '@angular/core';
import { RecipeDataAccess } from './Data/RecipeDataAccess';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent
{
  public Recipes: any[] = [];

  public constructor(private recipeDataAccess: RecipeDataAccess)
  {
    this.GetRecipes();
  }

  /**
   * Summary: Go and get our recipes to show on the page.
   */
  public GetRecipes()
  {
    this.recipeDataAccess.GetRecipes()
    .subscribe((data: any) =>
    {
      for (let i = 0; i < data.length; i++)
      {
        this.Recipes.push(data[i]);
      }
    });
  }
}
