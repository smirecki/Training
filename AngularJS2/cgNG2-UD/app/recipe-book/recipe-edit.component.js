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
    var core_1, common_1, router_1, common_2, recipe_service_1, common_3, common_4, common_5;
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
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeEditComponent = (function () {
                function RecipeEditComponent(_routeParams, _recipeService, _formBuilder) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._formBuilder = _formBuilder;
                    this._editMode = 'create';
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
                RecipeEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'template/recipes/recipe-edit.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, common_5.FormBuilder])
                ], RecipeEditComponent);
                return RecipeEditComponent;
            }());
            exports_1("RecipeEditComponent", RecipeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQTBGQSxvQkFBb0IsT0FBZ0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUIsT0FBZ0I7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF0RkQ7Z0JBTUksNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBVSxZQUF5QjtvQkFBbkcsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBSC9HLGNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBRzZGLENBQUM7Z0JBRzNILHVDQUFTLEdBQVQsVUFBVSxRQUFnQixFQUFFLFVBQWtCO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxJQUFJLENBQ3BELElBQUkscUJBQVksQ0FDaEI7d0JBQ0ksSUFBSSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2hELE1BQU0sRUFBRSxJQUFJLGdCQUFPLENBQUMsVUFBVSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDOzRCQUMvQyxtQkFBVSxDQUFD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QUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7cUJBRS9ELENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQTVFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSx1Q0FBdUM7cUJBQ3ZELENBQUM7O3VDQUFBO2dCQTJFRiwwQkFBQztZQUFELENBMUVBLEFBMEVDLElBQUE7WUExRUQscURBMEVDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0NvbnRyb2xBcnJheX0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gXCIuL3JlY2lwZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3JlY2lwZXMvcmVjaXBlLWVkaXQudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuICAgIHJlY2lwZTogUmVjaXBlO1xuICAgIHByaXZhdGUgX2VkaXRNb2RlID0gJ2NyZWF0ZSc7XG4gICAgcHJpdmF0ZSBfcmVjaXBlSW5kZXg6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cbiAgICBcbiAgICBcbiAgICBvbkFkZEl0ZW0oaXRlbU5hbWU6IHN0cmluZywgaXRlbUFtb3VudDogc3RyaW5nKSB7XG4gICAgICAgICg8Q29udHJvbEFycmF5PnRoaXMubXlGb3JtLmNvbnRyb2xzWydpbmdyZWRpZW50cyddKS5wdXNoKFxuICAgICAgICAgICAgbmV3IENvbnRyb2xHcm91cChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXcgQ29udHJvbChpdGVtTmFtZSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAgICAgICAgICAgYW1vdW50OiBuZXcgQ29udHJvbChpdGVtQW1vdW50LCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICBoYXNOdW1iZXJzLFxuICAgICAgICAgICAgICAgICAgICBncmVhdGVyWmVyb1xuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIG9uUmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgICg8Q29udHJvbEFycmF5PnRoaXMubXlGb3JtLmNvbnRyb2xzWydpbmdyZWRpZW50cyddKS5yZW1vdmVBdChpbmRleCk7XG4gICAgfVxuICAgIFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICB0aGlzLnJlY2lwZSA9IHRoaXMubXlGb3JtLnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgdGhpcy5fcmVjaXBlU2VydmljZS51cGRhdGVSZWNpcGUodGhpcy5fcmVjaXBlSW5kZXgsIHRoaXMucmVjaXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2lwZVNlcnZpY2UuaW5zZXJ0UmVjaXBlKHRoaXMucmVjaXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5fZWRpdE1vZGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2VkaXRNb2RlJyk7XG4gICAgICAgIGxldCBmYlJlY2lwZU5hbWUgPSAnJztcbiAgICAgICAgbGV0IGZiUmVjaXBlSW1hZ2VVcmwgPSAnJztcbiAgICAgICAgbGV0IGZiUmVjaXBlQ29udGVudCA9ICcnO1xuICAgICAgICBsZXQgZmJJbmdyZWRpZW50czogQ29udHJvbEFycmF5ID0gbmV3IENvbnRyb2xBcnJheShbXSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgdGhpcy5fcmVjaXBlSW5kZXggPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpdGVtSW5kZXgnKTtcbiAgICAgICAgICAgIHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUodGhpcy5fcmVjaXBlSW5kZXgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZiSW5ncmVkaWVudHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRyb2xHcm91cChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuZXcgQ29udHJvbCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5uYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG5ldyBDb250cm9sKHRoaXMucmVjaXBlLmluZ3JlZGllbnRzW2ldLmFtb3VudCwgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTnVtYmVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JlYXRlclplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKSAgIFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZmJSZWNpcGVOYW1lID0gdGhpcy5yZWNpcGUubmFtZTtcbiAgICAgICAgICAgICAgICBmYlJlY2lwZUltYWdlVXJsID0gdGhpcy5yZWNpcGUuaW1hZ2VVcmw7XG4gICAgICAgICAgICAgICAgZmJSZWNpcGVDb250ZW50ID0gdGhpcy5yZWNpcGUuY29udGVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFtmYlJlY2lwZU5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFtmYlJlY2lwZUltYWdlVXJsXSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtmYlJlY2lwZUNvbnRlbnRdLFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IHRoaXMuX2Zvcm1CdWlsZGVyLmFycmF5KGZiSW5ncmVkaWVudHMuY29udHJvbHMpXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNOdW1iZXJzKGNvbnRyb2w6IENvbnRyb2wpOntbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGlmICghKCcnICsgY29udHJvbC52YWx1ZSkubWF0Y2goJ1xcXFxkKycpKSB7XG4gICAgICAgIHJldHVybiB7bm9OdW1iZXJzOiB0cnVlfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdyZWF0ZXJaZXJvKGNvbnRyb2w6IENvbnRyb2wpOntbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGlmICgoK2NvbnRyb2wudmFsdWUpIDwgMCkge1xuICAgICAgICByZXR1cm4ge3Rvb1NtYWxsOiB0cnVlfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
