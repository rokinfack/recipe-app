import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FireBaseService } from '../firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute,
     private serviceRe: RecipeService,
     private firebseServ: FireBaseService,
     private router: Router,

     ){

  }



  onAddShoppingList(){
    this.firebseServ.storeRecipe();
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onEditShoppingList(){
    this.firebseServ.fetchRecipes();
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onDeleteShoppingList(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }


}
