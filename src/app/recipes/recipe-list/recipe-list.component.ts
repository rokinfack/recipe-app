import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipres.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [];

constructor(private recipeService: RecipeService,
  private router : Router,
   private route: ActivatedRoute){

}
ngOnInit(): void {

  this.recipes= this.recipeService.getRecipes();

}



onAddRecipe()
  {
    this.router.navigate(['new'], {relativeTo: this.route})

  }


}
