import {Component} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {OnInit} from "angular2/core";
import {RecipeService} from "./recipe.service";

@Component({
    selector: 'my-recipe-list',
    template: `
        <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
        <ul>
            <li *ngFor="#item of recipes">
                <div class="img">
                    <img [src]="item.imageUrl" alt="Recipe">
                </div>
                <div class="text">{{item.name}}</div>
            </li>
        </ul>
    `
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];
    
    constructor(private _recipeService: RecipeService) {}
    
    ngOnInit():any {
        this.recipes = this._recipeService.getAllRecipes();
    }
}