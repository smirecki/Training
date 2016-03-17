System.register(['angular2/core', "./shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.item = { name: '', amount: 0 };
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n        </div>\n        <button (click)=\"onClick()\">Add Item</button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0ksc0NBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFGN0QsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBRW1DLENBQUM7Z0JBRWpFLDhDQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSxtYUFVVDtxQkFFSixDQUFDOztnREFBQTtnQkFTRixtQ0FBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsdUVBUUMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1uZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW10XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICBgLFxuXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnR7XG4gICAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcbiAgICAgICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkge31cbiAgICBcbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEl0ZW0oe25hbWU6IHRoaXMuaXRlbS5uYW1lLCBhbW91bnQ6IHRoaXMuaXRlbS5hbW91bnR9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
