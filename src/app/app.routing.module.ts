import { NgModule } from "@angular/core";

import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { Router, RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipreDetailComponent } from "./recipes/recipre-detail/recipre-detail.component";
import { EditComponent } from "./recipes/edit/edit.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    { path:'', component: RecipeStartComponent},
    { path:'new', component: EditComponent},
    { path:':id', component: RecipreDetailComponent},
    { path:':id/edit', component: EditComponent},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes, {useHash:true})],
  exports:[RouterModule]
})

export class AppRoutingModule{


}
