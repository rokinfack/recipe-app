import { Injectable } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FireBaseService {

constructor(private recipesService:RecipeService, private http: HttpClient){

}

storeRecipe(){
  const recipes = this.recipesService.getRecipes();

  this.http.put('https://shopping-cart-33dc6-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe((response) =>{
    console.log(response);
  })
}
fetchRecipes(){
  this.http.get('https://shopping-cart-33dc6-default-rtdb.firebaseio.com/recipes.json').subscribe((response) =>{
    console.log(response);
  })

}
}
