System.register(["angular2/core", "angular2/common", "angular2/router", "./recipe.service"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, common_2, recipe_service_1, common_3, common_4, common_5, router_2;
    var RecipeEditComponent;
    function hasNumbers(control) {
        if (!('' + control.value).match('\\d+')) {
            return { noNumbers: true };
        }
    }
    function greaterZero(control) {
        if ((+control.value) < 0) {
            return { tooSmall: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
                common_3 = common_1_1;
                common_4 = common_1_1;
                common_5 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeEditComponent = (function () {
                function RecipeEditComponent(_routeParams, _recipeService, _formBuilder, _router) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._editMode = 'create';
                    this._submitted = false;
                }
                RecipeEditComponent.prototype.onAddItem = function (itemName, itemAmount) {
                    this.myForm.controls['ingredients'].push(new common_1.ControlGroup({
                        name: new common_3.Control(itemName, common_4.Validators.required),
                        amount: new common_3.Control(itemAmount, common_4.Validators.compose([
                            common_4.Validators.required,
                            hasNumbers,
                            greaterZero
                        ]))
                    }));
                };
                RecipeEditComponent.prototype.onRemoveItem = function (index) {
                    this.myForm.controls['ingredients'].removeAt(index);
                };
                RecipeEditComponent.prototype.onSubmit = function () {
                    this.recipe = this.myForm.value;
                    if (this._editMode === 'edit') {
                        this._recipeService.updateRecipe(this._recipeIndex, this.recipe);
                    }
                    else {
                        this._recipeService.insertRecipe(this.recipe);
                    }
                    this._submitted = true;
                    this.navigateBack();
                };
                RecipeEditComponent.prototype.onCancel = function () {
                    this.navigateBack();
                };
                RecipeEditComponent.prototype.navigateBack = function () {
                    this._router.navigate(['RecipeDetail', { recipeIndex: this._recipeIndex }]);
                };
                RecipeEditComponent.prototype.ngOnInit = function () {
                    this._editMode = this._routeParams.get('editMode');
                    var fbRecipeName = '';
                    var fbRecipeImageUrl = '';
                    var fbRecipeContent = '';
                    var fbIngredients = new common_2.ControlArray([]);
                    if (this._editMode === 'edit') {
                        this._recipeIndex = +this._routeParams.get('itemIndex');
                        this.recipe = this._recipeService.getRecipe(this._recipeIndex);
                        for (var i = 0; i < this.recipe.ingredients.length; i++) {
                            fbIngredients.push(new common_1.ControlGroup({
                                name: new common_3.Control(this.recipe.ingredients[i].name, common_4.Validators.required),
                                amount: new common_3.Control(this.recipe.ingredients[i].amount, common_4.Validators.compose([
                                    common_4.Validators.required,
                                    hasNumbers,
                                    greaterZero
                                ]))
                            }));
                            fbRecipeName = this.recipe.name;
                            fbRecipeImageUrl = this.recipe.imageUrl;
                            fbRecipeContent = this.recipe.content;
                        }
                    }
                    this.myForm = this._formBuilder.group({
                        name: [fbRecipeName, common_4.Validators.required],
                        imageUrl: [fbRecipeImageUrl],
                        content: [fbRecipeContent],
                        ingredients: this._formBuilder.array(fbIngredients.controls)
                    });
                };
                RecipeEditComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    if (this._submitted || this.myForm.pristine) {
                        return true;
                    }
                    return confirm("Sure?");
                };
                RecipeEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'template/recipes/recipe-edit.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, common_5.FormBuilder, router_2.Router])
                ], RecipeEditComponent);
                return RecipeEditComponent;
            }());
            exports_1("RecipeEditComponent", RecipeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQStHQSxvQkFBb0IsT0FBZ0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUIsT0FBZ0I7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeEdEO2dCQU9JLDZCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQVUsWUFBeUIsRUFBVSxPQUFlO29CQUE1SCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUp4SSxjQUFTLEdBQUcsUUFBUSxDQUFDO29CQUVyQixlQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUV3SCxDQUFDO2dCQUdwSix1Q0FBUyxHQUFULFVBQVUsUUFBZ0IsRUFBRSxVQUFrQjtvQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFFLENBQUMsSUFBSSxDQUNwRCxJQUFJLHFCQUFZLENBQ2hCO3dCQUNJLElBQUksRUFBRSxJQUFJLGdCQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNoRCxNQUFNLEVBQUUs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TSxDQUFDLElBQUksQ0FBQzs0QkFDaEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7NEJBQ3hDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzt3QkFFMUMsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDekMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7cUJBRS9ELENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGlEQUFtQixHQUFuQixVQUFvQixlQUFxQyxFQUFFLGVBQXFDO29CQUM1RixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQTlGTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSx1Q0FBdUM7cUJBQ3ZELENBQUM7O3VDQUFBO2dCQTZGRiwwQkFBQztZQUFELENBNUZBLEFBNEZDLElBQUE7WUE1RkQscURBNEZDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0NvbnRyb2xBcnJheX0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gXCIuL3JlY2lwZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Q2FuRGVhY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3JlY2lwZXMvcmVjaXBlLWVkaXQudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENhbkRlYWN0aXZhdGUge1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuICAgIHJlY2lwZTogUmVjaXBlO1xuICAgIHByaXZhdGUgX2VkaXRNb2RlID0gJ2NyZWF0ZSc7XG4gICAgcHJpdmF0ZSBfcmVjaXBlSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG4gICAgXG4gICAgXG4gICAgb25BZGRJdGVtKGl0ZW1OYW1lOiBzdHJpbmcsIGl0ZW1BbW91bnQ6IHN0cmluZykge1xuICAgICAgICAoPENvbnRyb2xBcnJheT50aGlzLm15Rm9ybS5jb250cm9sc1snaW5ncmVkaWVudHMnXSkucHVzaChcbiAgICAgICAgICAgIG5ldyBDb250cm9sR3JvdXAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV3IENvbnRyb2woaXRlbU5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogbmV3IENvbnRyb2woaXRlbUFtb3VudCwgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgaGFzTnVtYmVycyxcbiAgICAgICAgICAgICAgICAgICAgZ3JlYXRlclplcm9cbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBvblJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgICAgICAoPENvbnRyb2xBcnJheT50aGlzLm15Rm9ybS5jb250cm9sc1snaW5ncmVkaWVudHMnXSkucmVtb3ZlQXQoaW5kZXgpO1xuICAgIH1cbiAgICBcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5yZWNpcGUgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2lwZVNlcnZpY2UudXBkYXRlUmVjaXBlKHRoaXMuX3JlY2lwZUluZGV4LCB0aGlzLnJlY2lwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZWNpcGVTZXJ2aWNlLmluc2VydFJlY2lwZSh0aGlzLnJlY2lwZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9XG4gICAgXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVCYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnLCB7cmVjaXBlSW5kZXg6IHRoaXMuX3JlY2lwZUluZGV4fV0pOyAgICAgICBcbiAgICB9ICAgXG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMuX2VkaXRNb2RlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdlZGl0TW9kZScpO1xuICAgICAgICBsZXQgZmJSZWNpcGVOYW1lID0gJyc7XG4gICAgICAgIGxldCBmYlJlY2lwZUltYWdlVXJsID0gJyc7XG4gICAgICAgIGxldCBmYlJlY2lwZUNvbnRlbnQgPSAnJztcbiAgICAgICAgbGV0IGZiSW5ncmVkaWVudHM6IENvbnRyb2xBcnJheSA9IG5ldyBDb250cm9sQXJyYXkoW10pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2lwZUluZGV4ID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaXRlbUluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLnJlY2lwZSA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlKHRoaXMuX3JlY2lwZUluZGV4KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmYkluZ3JlZGllbnRzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb250cm9sR3JvdXAoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmV3IENvbnRyb2wodGhpcy5yZWNpcGUuaW5ncmVkaWVudHNbaV0ubmFtZSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBuZXcgQ29udHJvbCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5hbW91bnQsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc051bWJlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyZWF0ZXJaZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICkgICBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGZiUmVjaXBlTmFtZSA9IHRoaXMucmVjaXBlLm5hbWU7XG4gICAgICAgICAgICAgICAgZmJSZWNpcGVJbWFnZVVybCA9IHRoaXMucmVjaXBlLmltYWdlVXJsO1xuICAgICAgICAgICAgICAgIGZiUmVjaXBlQ29udGVudCA9IHRoaXMucmVjaXBlLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbZmJSZWNpcGVOYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGltYWdlVXJsOiBbZmJSZWNpcGVJbWFnZVVybF0sXG4gICAgICAgICAgICBjb250ZW50OiBbZmJSZWNpcGVDb250ZW50XSxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiB0aGlzLl9mb3JtQnVpbGRlci5hcnJheShmYkluZ3JlZGllbnRzLmNvbnRyb2xzKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByb3V0ZXJDYW5EZWFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXZJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdHRlZCB8fCB0aGlzLm15Rm9ybS5wcmlzdGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpcm0oXCJTdXJlP1wiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc051bWJlcnMoY29udHJvbDogQ29udHJvbCk6e1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCEoJycgKyBjb250cm9sLnZhbHVlKS5tYXRjaCgnXFxcXGQrJykpIHtcbiAgICAgICAgcmV0dXJuIHtub051bWJlcnM6IHRydWV9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ3JlYXRlclplcm8oY29udHJvbDogQ29udHJvbCk6e1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCgrY29udHJvbC52YWx1ZSkgPCAwKSB7XG4gICAgICAgIHJldHVybiB7dG9vU21hbGw6IHRydWV9O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
