import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [];

  constructor(private shoppingService:ShoppingService){}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredient();

    this.shoppingService.ingredientChange.subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredients = ingredient;

    })
  }

  onIngredientAdd(ingredient:Ingredient){

    this.shoppingService.addIngredients(ingredient);
  }


}
