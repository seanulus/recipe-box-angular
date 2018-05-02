import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  selectedTitle = null;
  difficultyColor(currentRecipe) {
    if (currentRecipe.difficulty === 1) {
      return "bg-danger";
    } else if (currentRecipe.difficulty === 2) {
      return "bg-info";
    }
  }
  viewRecipe(clickedTitle) {
    if(this.selectedTitle === null) {
      this.selectedTitle = clickedTitle;
    } else {
      this.selectedTitle = null;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
