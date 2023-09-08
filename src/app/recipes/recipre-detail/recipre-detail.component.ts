import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipres.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipre-detail',
  templateUrl: './recipre-detail.component.html',
  styleUrls: ['./recipre-detail.component.css']
})
export class RecipreDetailComponent implements OnInit {

  recipe!: Recipe;

  id!: number;


constructor(
  private route: ActivatedRoute,
   private serviceRe: RecipeService,
   private router: Router,

   ){

}

ngOnInit(): void {
  this.route.params.subscribe(
    (param:Params) => {
      this.id = + param['id'];
 this.recipe = this.serviceRe.getRecipeById(this.id);


    }
  )
}

onAddShoppingList(){
  this.serviceRe.addIngredientToShoppingList(this.recipe.ingredients);
  this.router.navigate(['shopping-list'])
}
onEditShoppingList(){
  this.router.navigate(['edit'], {relativeTo: this.route})
}
onDeleteShoppingList(){
  this.router.navigate(['edit'], {relativeTo: this.route})
}


}
