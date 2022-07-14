import { RecipeService } from './../recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {


  recipeList: Recipe[] = [];

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeList = this.recipeService.recipeList;
  }

}
