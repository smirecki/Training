System.register(["angular2/core", "angular2/router", "./recipe.service", "../shared/shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1, router_2, shopping_list_service_1;
    var RecipeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent(_routeParams, _recipeService, _router, _shoppingListService) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._router = _router;
                    this._shoppingListService = _shoppingListService;
                }
                RecipeDetailComponent.prototype.onEdit = function () {
                    this._router.navigate(['RecipeEdit', { editMode: 'edit', itemIndex: this._recipeIndex }]);
                };
                RecipeDetailComponent.prototype.onDelete = function () {
                    this._recipeService.deleteRecipe(+this._recipeIndex);
                    this._router.navigate(['RecipeDetail']);
                };
                RecipeDetailComponent.prototype.onAddToShoppingList = function () {
                    this._shoppingListService.insertItems(this.recipe.ingredients);
                };
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var itemIndex = this._routeParams.get('recipeIndex');
                    this._recipeIndex = itemIndex;
                    this.recipe = this._recipeService.getRecipe(+itemIndex !== null ? +itemIndex : null) || null;
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'template/recipes/recipe-detail.tpl.html',
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, router_2.Router, shopping_list_service_1.ShoppingListService])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUlJLCtCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQVUsT0FBZSxFQUFVLG9CQUF5QztvQkFBNUksaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO2dCQUFHLENBQUM7Z0JBRXBLLHNDQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFHRCxtREFBbUIsR0FBbkI7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ2pHLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLHlDQUF5Qzt3QkFDdEQsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ25DLENBQUM7O3lDQUFBO2dCQTBCRiw0QkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQseURBeUJDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gXCIuL3JlY2lwZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3JlY2lwZXMvcmVjaXBlLWRldGFpbC50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByZWNpcGU6IFJlY2lwZTtcbiAgICBwcml2YXRlIF9yZWNpcGVJbmRleDogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHt9XG4gICAgXG4gICAgb25FZGl0KCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVFZGl0Jywge2VkaXRNb2RlOiAnZWRpdCcsIGl0ZW1JbmRleDogdGhpcy5fcmVjaXBlSW5kZXh9XSk7XG4gICAgfVxuICAgIFxuICAgIG9uRGVsZXRlKCkge1xuICAgICAgICB0aGlzLl9yZWNpcGVTZXJ2aWNlLmRlbGV0ZVJlY2lwZSgrdGhpcy5fcmVjaXBlSW5kZXgpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnXSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIG9uQWRkVG9TaG9wcGluZ0xpc3QoKSB7XG4gICAgICAgIHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXModGhpcy5yZWNpcGUuaW5ncmVkaWVudHMpO1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIGxldCBpdGVtSW5kZXggPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlY2lwZUluZGV4Jyk7XG4gICAgICAgIHRoaXMuX3JlY2lwZUluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgICB0aGlzLnJlY2lwZSA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlKCtpdGVtSW5kZXggIT09IG51bGwgPyAraXRlbUluZGV4IDogbnVsbCkgfHwgbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
