import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Store Your Recipes'
  recipes: Recipe[] = [
    new Recipe('Macaroni and Cheese', ['Macaroni', 'Cheddar Cheese', 'Milk', 'Flour', 'Butter', 'Salt'], 'First, start boiling some water on the stove.', 2),
    new Recipe('Cookie', ['Cookie dough'], 'Throw it in the oven', 1)
  ]
  selectedRecipe: Recipe = this.recipes[0];
  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
  difficultyColor(currentRecipe) {
    if (currentRecipe.difficulty === 1) {
      return "bg-danger";
    } else if (currentRecipe.difficulty === 2) {
      return "bg-info";
    }
  }
}
