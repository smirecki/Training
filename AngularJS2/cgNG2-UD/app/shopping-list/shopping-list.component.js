System.register(['angular2/core', "./shopping-list-edit.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_edit_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_edit_component_1_1) {
                shopping_list_edit_component_1 = shopping_list_edit_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                }
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Shopping List</h1>\n        <my-shopping-list-edit></my-shopping-list-edit>\n        <div class=\"list\">\n            <button class=\"btn\">Add new Item</button>\n            <ul>\n                <li *ngFor=\"#item of shoppingList\">{{item.name}} ({{item.amount}})</li>\n            </ul>\n        </div>\n    ",
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3VUFTVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQztxQkFDMUMsQ0FBQzs7eUNBQUE7Z0JBR0YsNEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHlEQUVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPlNob3BwaW5nIExpc3Q8L2gxPlxuICAgICAgICA8bXktc2hvcHBpbmctbGlzdC1lZGl0PjwvbXktc2hvcHBpbmctbGlzdC1lZGl0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPkFkZCBuZXcgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBzaG9wcGluZ0xpc3RcIj57e2l0ZW0ubmFtZX19ICh7e2l0ZW0uYW1vdW50fX0pPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCB7XG4gICAgc2hvcHBpbmdMaXN0OiBJbmdyZWRpZW50W107XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
