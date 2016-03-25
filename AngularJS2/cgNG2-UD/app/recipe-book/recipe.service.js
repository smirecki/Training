System.register(["angular2/core", "../mock/recipes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, recipes_1;
    var RecipeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipes_1_1) {
                recipes_1 = recipes_1_1;
            }],
        execute: function() {
            RecipeService = (function () {
                function RecipeService() {
                }
                RecipeService.prototype.getAllRecipes = function () {
                    return recipes_1.RECIPES;
                };
                RecipeService.prototype.getRecipes = function (index) {
                    return recipes_1.RECIPES[index];
                };
                RecipeService.prototype.getRecipeIndex = function (item) {
                    return recipes_1.RECIPES.indexOf(item);
                };
                RecipeService.prototype.insertRecipe = function (item) {
                    recipes_1.RECIPES.push(item);
                };
                RecipeService.prototype.deleteRecipe = function (index) {
                    recipes_1.RECIPES.splice(index, 1);
                };
                RecipeService.prototype.updateRecipe = function (index, item) {
                    recipes_1.RECIPES[index] = item;
                };
                RecipeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RecipeService);
                return RecipeService;
            }());
            exports_1("RecipeService", RecipeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBd0JBLENBQUM7Z0JBdkJHLHFDQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLGlCQUFPLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsa0NBQVUsR0FBVixVQUFXLEtBQWE7b0JBQ3BCLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFZO29CQUN2QixNQUFNLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsb0NBQVksR0FBWixVQUFhLElBQVk7b0JBQ3JCLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUVELG9DQUFZLEdBQVosVUFBYSxLQUFhO29CQUN0QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsb0NBQVksR0FBWixVQUFhLEtBQWEsRUFBRSxJQUFZO29CQUNwQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztnQkF4Qkw7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBeUJiLG9CQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCx5Q0F3QkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xuaW1wb3J0IHtSRUNJUEVTfSBmcm9tIFwiLi4vbW9jay9yZWNpcGVzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNpcGVTZXJ2aWNlIHtcbiAgICBnZXRBbGxSZWNpcGVzKCkge1xuICAgICAgICByZXR1cm4gUkVDSVBFUztcbiAgICB9XG4gICAgXG4gICAgZ2V0UmVjaXBlcyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBSRUNJUEVTW2luZGV4XTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UmVjaXBlSW5kZXgoaXRlbTogUmVjaXBlKSB7XG4gICAgICAgIHJldHVybiBSRUNJUEVTLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIFxuICAgIGluc2VydFJlY2lwZShpdGVtOiBSZWNpcGUpIHtcbiAgICAgICAgUkVDSVBFUy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVSZWNpcGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBSRUNJUEVTLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVJlY2lwZShpbmRleDogbnVtYmVyLCBpdGVtOiBSZWNpcGUpIHtcbiAgICAgICAgUkVDSVBFU1tpbmRleF0gPSBpdGVtO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
