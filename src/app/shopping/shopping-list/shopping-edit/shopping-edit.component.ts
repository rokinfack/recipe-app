import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('inputName', {static:false})
  nameInputRef!: ElementRef;

  @ViewChild('inputAmount', { static: false })
  amountInputRef!: ElementRef;

  @Output() ingredients = new EventEmitter<Ingredient>

  onAddIngredien(){

    const name = this.nameInputRef.nativeElement.value;
    const amout = this.amountInputRef.nativeElement.value;

    const  newIngredient = new Ingredient(name,amout);

      this.ingredients.emit(newIngredient);
  }
  onDeleteIngredient(){

    const name = this.nameInputRef.nativeElement.value;
    const amout = this.amountInputRef.nativeElement.value;

    const  newIngredient = new Ingredient(name,amout);

      this.ingredients.emit(newIngredient);
  }
  onEditIngredient(){

    const name = this.nameInputRef.nativeElement.value;
    const amout = this.amountInputRef.nativeElement.value;

    const  newIngredient = new Ingredient(name,amout);

      this.ingredients.emit(newIngredient);
  }


}
