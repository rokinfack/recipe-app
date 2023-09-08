import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

import { RecipreDetailComponent } from './recipes/recipre-detail/recipre-detail.component';

import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingAddComponent } from './shopping/shopping-add/shopping-add.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http'; // Import du HttpClientModule
import { FireBaseService } from './firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipreDetailComponent,

    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingAddComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [FireBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
