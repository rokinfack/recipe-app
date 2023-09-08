import { Component } from '@angular/core';
import { Recipe } from '../models/recipres.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipeSelect!:Recipe;

  onSelecteRecipe(fe:Recipe){
    this.recipeSelect = fe;
  }





}
