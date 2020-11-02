import { Component, OnInit } from '@angular/core';
import { RecipeDataAccess } from 'src/Data/RecipeDataAccess';
import { Recipe } from 'src/Entities/Recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  public Recipes: Recipe[] = [];

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
