import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ApiModule } from './api/api.module';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeComponent } from './recipe/recipe.component';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { RecipeAddIngredientComponent } from './recipe-add-ingredient/recipe-add-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    IngredientPageComponent,
    HomeComponent,
    RecipePageComponent,
    RecipeComponent,
    EnumToArrayPipe,
    RecipeAddIngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:44378' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
