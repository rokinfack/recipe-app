import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientChange = new EventEmitter<Ingredient[]>();

  constructor() { }

private ingredients: Ingredient[] = [
    new Ingredient('Tomatos' ,5),
    new Ingredient('Tomatos' ,5),
    new Ingredient('Tomatos' ,5)
  ];

  getIngredient(){
    return this.ingredients.slice();

  }

  addIngredients(ingredients: Ingredient){
    this.ingredients.push(ingredients);

    this.ingredientChange.emit(this.ingredients.slice());
  }

  addIngredientToShopping(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientChange.emit(this.ingredients.slice());

  }




}
