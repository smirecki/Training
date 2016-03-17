System.register(['angular2/core', "./shopping-list-new-item.component", "./shopping-list-item.component", "./shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.listItems = Array();
                }
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent.prototype.onRemove = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <shopping-list-new-item></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} {{listItem.amount}}</li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem !=null\">\n            <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove()\"></shopping-list-item>\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBSUksK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFIN0QsY0FBUyxHQUFHLEtBQUssRUFBWSxDQUFDO2dCQUdrQyxDQUFDO2dCQUVqRSx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDMUQsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQXJDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsd2tCQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLCtEQUE0QixFQUFFLHdEQUF5QixDQUFFO3dCQUN0RSxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztxQkFDbkMsQ0FBQzs7eUNBQUE7Z0JBa0JGLDRCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx5REFpQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LW5ldy1pdGVtPjwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMz5NeSBMaXN0PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9XCJvblNlbGVjdChsaXN0SXRlbSlcIj57e2xpc3RJdGVtLm5hbWV9fSB7e2xpc3RJdGVtLmFtb3VudH19PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gKm5nSWY9XCJzZWxlY3RlZEl0ZW0gIT1udWxsXCI+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1pdGVtIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKClcIj48L3Nob3BwaW5nLWxpc3QtaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQsIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnQgXSxcbiAgICBwcm92aWRlcnM6IFtTaG9wcGluZ0xpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGxpc3RJdGVtcyA9IEFycmF5PExpc3RJdGVtPigpO1xuICAgIHNlbGVjdGVkSXRlbTogTGlzdEl0ZW07XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkge31cbiAgICBcbiAgICBvblNlbGVjdChpdGVtOiBMaXN0SXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfSAgIFxuICAgIFxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIFxuICAgIG9uUmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
