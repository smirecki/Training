System.register(["angular2/core", "./recipe.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, recipe_service_1, router_1;
    var RecipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RecipeListComponent = (function () {
                function RecipeListComponent(_recipeService, _router) {
                    this._recipeService = _recipeService;
                    this._router = _router;
                }
                RecipeListComponent.prototype.onSelect = function (item) {
                    this._router.navigate(['RecipeDetail', { recipeIndex: Number(this._recipeService.getRecipeIndex(item)) }]);
                };
                RecipeListComponent.prototype.onAddRecipe = function () {
                    this._router.navigate(['RecipeEdit', { editMode: 'create' }]);
                };
                RecipeListComponent.prototype.ngOnInit = function () {
                    this.recipes = this._recipeService.getAllRecipes();
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        template: "\n        <button class=\"btn\" (click)=\"onAddRecipe()\">Add Recipe</button>\n        <ul>\n            <li *ngFor=\"#item of recipes\" (click)=\"onSelect(item)\">\n                <div class=\"img\">\n                    <img [src]=\"item.imageUrl\" alt=\"Recipe\">\n                </div>\n                <div class=\"text\">{{item.name}}</div>\n            </li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFHSSw2QkFBb0IsY0FBNkIsRUFBVSxPQUFlO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFHLENBQUM7Z0JBRTlFLHNDQUFRLEdBQVIsVUFBUyxJQUFZO29CQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0csQ0FBQztnQkFFRCx5Q0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkQsQ0FBQztnQkE3Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsc1lBVVQ7cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBaUJGLDBCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCxxREFnQkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gXCIuL3JlY2lwZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXJlY2lwZS1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cIm9uQWRkUmVjaXBlKClcIj5BZGQgUmVjaXBlPC9idXR0b24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiByZWNpcGVzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiaXRlbS5pbWFnZVVybFwiIGFsdD1cIlJlY2lwZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+e3tpdGVtLm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHJlY2lwZXM6IFJlY2lwZVtdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuICAgIFxuICAgIG9uU2VsZWN0KGl0ZW06IFJlY2lwZSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnLCB7cmVjaXBlSW5kZXg6IE51bWJlcih0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldFJlY2lwZUluZGV4KGl0ZW0pKX1dKTtcbiAgICB9XG4gICAgXG4gICAgb25BZGRSZWNpcGUoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZUVkaXQnLCB7ZWRpdE1vZGU6ICdjcmVhdGUnfV0pO1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMucmVjaXBlcyA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0QWxsUmVjaXBlcygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
