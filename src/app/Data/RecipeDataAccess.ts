import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../Entities/Recipe';
import { Injectable } from '@angular/core';

// Need to state injectable to be used in another file.
@Injectable()
  
export class RecipeDataAccess
{
    public constructor(private http: HttpClient) {}

    /**
     * Summary: Get the recipes from a downloadable JS file.
     */
    public GetRecipes(): Observable<Recipe>
    {
      return this.http.get<Recipe>('../assets/recipes.json');
    }
}