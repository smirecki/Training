System.register(['angular2/core', "./shopping-list-new-item.component", "./shopping-list-item.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1;
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
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} {{listItem.amount}}</li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem !=null\">\n            <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBQ0ksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBZXRDLENBQUM7Z0JBWkcsMkNBQVcsR0FBWCxVQUFZLElBQW9DO29CQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUixVQUFTLElBQWM7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFuQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLGtuQkFlVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsRUFBRSx3REFBeUIsQ0FBRTtxQkFDekUsQ0FBQzs7eUNBQUE7Z0JBaUJGLDRCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCx5REFnQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1uZXctaXRlbSAoaXRlbUFkZGVkKT1cIm9uSXRlbUFkZGVkKCRldmVudClcIj48L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDM+TXkgTGlzdDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNsaXN0SXRlbSBvZiBsaXN0SXRlbXNcIiAoY2xpY2spPVwib25TZWxlY3QobGlzdEl0ZW0pXCI+e3tsaXN0SXRlbS5uYW1lfX0ge3tsaXN0SXRlbS5hbW91bnR9fTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9bnVsbFwiPlxuICAgICAgICAgICAgPHNob3BwaW5nLWxpc3QtaXRlbSBbaXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LWl0ZW0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50LCBTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IHtcbiAgICBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTtcbiAgICBcbiAgICBvbkl0ZW1BZGRlZChpdGVtOiB7bmFtZTogc3RyaW5nLCBhbW91bnQ6IG51bWJlcn0pIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaCh7bmFtZTogaXRlbS5uYW1lLCBhbW91bnQ6IGl0ZW0uYW1vdW50fSk7XG4gICAgfVxuICAgIFxuICAgIG9uU2VsZWN0KGl0ZW06IExpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9ICAgXG4gICAgXG4gICAgb25SZW1vdmUoaXRlbTogTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMuc3BsaWNlKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
