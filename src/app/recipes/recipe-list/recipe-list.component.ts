import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipres.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('a test recipe','this is a test','https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg'),
    new Recipe('a test recipe','this is a test','https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg'),
    new Recipe('a test recipe','this is a test','https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg')
  ];

}
