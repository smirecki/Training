System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this.removed.emit(this.item);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n        </div>\n        <button class=\"danger\" (click)=\"onDelete()\">Delete Item</button>\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDN0IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO2dCQUszQyxDQUFDO2dCQUhHLDRDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSx3YkFVVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFFdkIsQ0FBQzs7NkNBQUE7Z0JBUUYsZ0NBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELGlFQU9DLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1hbXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGFuZ2VyXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGUgSXRlbTwvYnV0dG9uPlxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ2l0ZW0nXSwgXG4gICAgb3V0cHV0czogWydyZW1vdmVkJ11cbiAgICBcbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudCB7XG4gICAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcbiAgICByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcbiAgICBcbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVkLmVtaXQodGhpcy5pdGVtKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
