import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute,
     private serviceRe: RecipeService,
     private router: Router,

     ){

  }



  onAddShoppingList(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onEditShoppingList(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onDeleteShoppingList(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }


}
