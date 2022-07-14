import { Recipe } from './../recipe.model';
import { RecipeService } from './../../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(public recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        //details here!!!
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipeDetails(recipeId);
    });
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.loadedRecipe.id);
  }

}
