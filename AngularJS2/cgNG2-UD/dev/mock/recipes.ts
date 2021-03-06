import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";


export let RECIPES: Recipe[] = [
    new Recipe('Wiener Schnitzel', 'A tasty Schnitzel', '../assets/images/schnitzel.jpg', 
        [
            new Ingredient('Pork Meat', 1),
            new Ingredient('French Fries', 1),
            new Ingredient('Salad', 2),
        ]
    ),
    new Recipe('Super Mega Burger', 'Tastes so delicious!', '../assets/images/burger.jpg', 
        [
            new Ingredient('Buns', 2),
            new Ingredient('Salad', 1),
            new Ingredient('Paddies', 4),
            new Ingredient('Vegetables', 2)
        ]
    )
];