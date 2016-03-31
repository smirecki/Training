System.register(["angular2/core", "angular2/router", "./recipe.service"], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1, router_2;
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
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent(_routeParams, _recipeService, _router) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._router = _router;
                }
                RecipeDetailComponent.prototype.onEdit = function () {
                    this._router.navigate(['RecipeEdit', { editMode: 'edit', itemIndex: this._recipeIndex }]);
                };
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var itemIndex = this._routeParams.get('recipeIndex');
                    this._recipeIndex = itemIndex;
                    this.recipe = this._recipeService.getRecipe(+itemIndex !== null ? +itemIndex : null) || null;
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'template/recipes/recipe-detail.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, router_2.Router])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlJLCtCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQVUsT0FBZTtvQkFBekYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUVqSCxzQ0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUNqRyxDQUFDO2dCQWpCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSx5Q0FBeUM7cUJBQ3pELENBQUM7O3lDQUFBO2dCQWdCRiw0QkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQseURBZUMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JlY2lwZX0gZnJvbSBcIi4uL3NoYXJlZC9yZWNpcGVcIjtcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSBcIi4vcmVjaXBlLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvcmVjaXBlcy9yZWNpcGUtZGV0YWlsLnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHJlY2lwZTogUmVjaXBlO1xuICAgIHByaXZhdGUgX3JlY2lwZUluZGV4OiBzdHJpbmc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLCBwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cbiAgICBcbiAgICBvbkVkaXQoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZUVkaXQnLCB7ZWRpdE1vZGU6ICdlZGl0JywgaXRlbUluZGV4OiB0aGlzLl9yZWNpcGVJbmRleH1dKTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICBsZXQgaXRlbUluZGV4ID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZWNpcGVJbmRleCcpO1xuICAgICAgICB0aGlzLl9yZWNpcGVJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgdGhpcy5yZWNpcGUgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldFJlY2lwZSgraXRlbUluZGV4ICE9PSBudWxsID8gK2l0ZW1JbmRleCA6IG51bGwpIHx8IG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
