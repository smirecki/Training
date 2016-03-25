System.register(['angular2/core', "./recipe-book/recipes.component", "angular2/router", "./shopping-list/shopping-list.component"], function(exports_1, context_1) {
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
    var core_1, recipes_component_1, router_1, shopping_list_component_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipes_component_1_1) {
                recipes_component_1 = recipes_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (shopping_list_component_1_1) {
                shopping_list_component_1 = shopping_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n            <nav>\n                <ul>\n                    <li><a [routerLink]=\"['Recipes']\">Recipes</a></li>\n                    <li><a [routerLink]=\"['ShoppingList']\">Shopping List</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"main\">\n            <router-outlet></router-outlet>\n        </div>\n     ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/recipes', name: 'Recipes', component: recipes_component_1.RecipesComponent, useAsDefault: true },
                        { path: '/shopping-list', name: 'ShoppingList', component: shopping_list_component_1.ShoppingListComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0WEFZUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbkMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNwRixFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQztxQkFDbkYsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UmVjaXBlc0NvbXBvbmVudH0gZnJvbSBcIi4vcmVjaXBlLWJvb2svcmVjaXBlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIlxuaW1wb3J0IHtTaG9wcGluZ0xpc3RDb21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUmVjaXBlcyddXCI+UmVjaXBlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaG9wcGluZ0xpc3QnXVwiPlNob3BwaW5nIExpc3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgYCxcbiAgICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvcmVjaXBlcycsIG5hbWU6ICdSZWNpcGVzJywgY29tcG9uZW50OiBSZWNpcGVzQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHtwYXRoOiAnL3Nob3BwaW5nLWxpc3QnLCBuYW1lOiAnU2hvcHBpbmdMaXN0JywgY29tcG9uZW50OiBTaG9wcGluZ0xpc3RDb21wb25lbnR9LFxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIFxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
