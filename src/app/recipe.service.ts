import { Injectable } from '@angular/core';
import { Recipe } from './models/recipres.model';
import { Ingredient } from './models/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shippingService: ShoppingService) { }



   recipes : Recipe[] = [
      new Recipe('a test recipe',
      '04102023-ratatouille-lede',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg',
      [
        new Ingredient('Tomatos',10),
        new Ingredient('beans',12),
        new Ingredient('graunut',10),

      ]),
      new Recipe('the best recipe',
      'tMary-Berry-Tuscan-Chicken-Recipe-Cook-and-Share-BBC2',
      'https://thehappyfoodie.co.uk/wp-content/uploads/2022/08/Mary-Berry-Tuscan-Chicken-Recipe-Cook-and-Share-BBC2.jpg',
      [
        new Ingredient('Meate',10),
        new Ingredient('Fromage',12),
        new Ingredient('Chevre',10),

      ]),
      new Recipe('easy-dinner-ideas-1',
      'this is a test','https://cdn.loveandlemons.com/wp-content/uploads/2019/09/easy-dinner-ideas-1.jpg',
      [
        new Ingredient('Pepperoni',10),
        new Ingredient('Jambon',12),
        new Ingredient('Emantal',10),

      ]),
    ];



  getRecipeById(index:number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient:Ingredient[]){

    this.shippingService.addIngredientToShopping(ingredient);

  }
}
