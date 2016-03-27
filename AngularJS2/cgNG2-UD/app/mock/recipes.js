System.register(["../shared/recipe", "../shared/ingredient"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var recipe_1, ingredient_1;
    var RECIPES;
    return {
        setters:[
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (ingredient_1_1) {
                ingredient_1 = ingredient_1_1;
            }],
        execute: function() {
            exports_1("RECIPES", RECIPES = [
                new recipe_1.Recipe('Wiener Schnitzel', 'A tasty Schnitzel', '../assets/images/schnitzel.jpg', [
                    new ingredient_1.Ingredient('Pork Meat', 1),
                    new ingredient_1.Ingredient('French Fries', 1),
                    new ingredient_1.Ingredient('Salad', 2),
                ]),
                new recipe_1.Recipe('Super Mega Burger', 'Tastes so delicious!', '../assets/images/burger.jpg', [
                    new ingredient_1.Ingredient('Buns', 2),
                    new ingredient_1.Ingredient('Salad', 1),
                    new ingredient_1.Ingredient('Paddies', 4),
                    new ingredient_1.Ingredient('Vegetables', 2)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBSVcsT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDM0IsSUFBSSxlQUFNLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsZ0NBQWdDLEVBQ2hGO29CQUNJLElBQUksdUJBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixJQUFJLHVCQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDakMsSUFBSSx1QkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7aUJBQzdCLENBQ0o7Z0JBQ0QsSUFBSSxlQUFNLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsNkJBQTZCLEVBQ2pGO29CQUNJLElBQUksdUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUN6QixJQUFJLHVCQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDMUIsSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLElBQUksdUJBQVUsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO2lCQUNqQyxDQUNKO2FBQ0osQ0FBQSxDQUFDIiwiZmlsZSI6Im1vY2svcmVjaXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcblxuXG5leHBvcnQgbGV0IFJFQ0lQRVM6IFJlY2lwZVtdID0gW1xuICAgIG5ldyBSZWNpcGUoJ1dpZW5lciBTY2huaXR6ZWwnLCAnQSB0YXN0eSBTY2huaXR6ZWwnLCAnLi4vYXNzZXRzL2ltYWdlcy9zY2huaXR6ZWwuanBnJywgXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdQb3JrIE1lYXQnLCAxKSxcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdGcmVuY2ggRnJpZXMnLCAxKSxcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdTYWxhZCcsIDIpLFxuICAgICAgICBdXG4gICAgKSxcbiAgICBuZXcgUmVjaXBlKCdTdXBlciBNZWdhIEJ1cmdlcicsICdUYXN0ZXMgc28gZGVsaWNpb3VzIScsICcuLi9hc3NldHMvaW1hZ2VzL2J1cmdlci5qcGcnLCBcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ0J1bnMnLCAyKSxcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdTYWxhZCcsIDEpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ1BhZGRpZXMnLCA0KSxcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdWZWdldGFibGVzJyAyKVxuICAgICAgICBdXG4gICAgKVxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
