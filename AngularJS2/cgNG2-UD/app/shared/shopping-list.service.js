System.register(['angular2/core', "../mock/shopping-list"], function(exports_1, context_1) {
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
    var core_1, shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_1_1) {
                shopping_list_1 = shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getAllItems = function () {
                    return shopping_list_1.SHOPPING_LIST;
                };
                ShoppingListService.prototype.getItem = function (index) {
                    return shopping_list_1.SHOPPING_LIST[index];
                };
                ShoppingListService.prototype.getIndexOfItem = function (item) {
                    return shopping_list_1.SHOPPING_LIST.indexOf(item);
                };
                ShoppingListService.prototype.insertItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.push(item);
                };
                ShoppingListService.prototype.insertItems = function (items) {
                    Array.prototype.push.apply(shopping_list_1.SHOPPING_LIST, items);
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.splice(shopping_list_1.SHOPPING_LIST.indexOf(item), 1);
                };
                ShoppingListService.prototype.updateItem = function (index, item) {
                    shopping_list_1.SHOPPING_LIST[index] = item;
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkE0QkEsQ0FBQztnQkEzQkcseUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsNkJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBYTtvQkFDakIsTUFBTSxDQUFDLDZCQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsNENBQWMsR0FBZCxVQUFlLElBQWdCO29CQUMzQixNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQWdCO29CQUN2Qiw2QkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBbUI7b0JBQzNCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxJQUFnQjtvQkFDdkIsNkJBQWEsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLEtBQWEsRUFBRSxJQUFnQjtvQkFDdEMsNkJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLENBQUM7Z0JBNUJMO29CQUFDLGlCQUFVLEVBQUU7O3VDQUFBO2dCQTZCYiwwQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQscURBNEJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuL2luZ3JlZGllbnRcIjtcbmltcG9ydCB7U0hPUFBJTkdfTElTVH0gZnJvbSBcIi4uL21vY2svc2hvcHBpbmctbGlzdFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0U2VydmljZSB7XG4gICAgZ2V0QWxsSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBTSE9QUElOR19MSVNUOyAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGdldEl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gU0hPUFBJTkdfTElTVFtpbmRleF07XG4gICAgfVxuICAgIFxuICAgIGdldEluZGV4T2ZJdGVtKGl0ZW06IEluZ3JlZGllbnQpIHtcbiAgICAgICAgcmV0dXJuIFNIT1BQSU5HX0xJU1QuaW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgXG4gICAgaW5zZXJ0SXRlbShpdGVtOiBJbmdyZWRpZW50KSB7XG4gICAgICAgIFNIT1BQSU5HX0xJU1QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgXG4gICAgaW5zZXJ0SXRlbXMoaXRlbXM6IEluZ3JlZGllbnRbXSkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShTSE9QUElOR19MSVNULCBpdGVtcyk7ICAgXG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZUl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xuICAgICAgICBTSE9QUElOR19MSVNULnNwbGljZShTSE9QUElOR19MSVNULmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVJdGVtKGluZGV4OiBudW1iZXIsIGl0ZW06IEluZ3JlZGllbnQpIHtcbiAgICAgICAgU0hPUFBJTkdfTElTVFtpbmRleF0gPSBpdGVtO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
