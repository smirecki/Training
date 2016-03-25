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
                new recipe_1.Recipe('Wiener Schnitzel', 'A tasty Schnitzel', 'url', [
                    new ingredient_1.Ingredient('Pork Meat', 1),
                    new ingredient_1.Ingredient('French Fries', 1),
                    new ingredient_1.Ingredient('Salad', 2),
                ]),
                new recipe_1.Recipe('Super Mega Burger', 'Tastes so delicious!', 'url', [
                    new ingredient_1.Ingredient('Buns', 2),
                    new ingredient_1.Ingredient('Salad', 1),
                    new ingredient_1.Ingredient('Paddies', 4),
                    new ingredient_1.Ingredient('Vegetables', 2)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBSVcsT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDM0IsSUFBSSxlQUFNLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUNyRDtvQkFDSSxJQUFJLHVCQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDOUIsSUFBSSx1QkFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLElBQUksdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QixDQUNKO2dCQUNELElBQUksZUFBTSxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLEtBQUssRUFDekQ7b0JBQ0ksSUFBSSx1QkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ3pCLElBQUksdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUMxQixJQUFJLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsSUFBSSx1QkFBVSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7aUJBQ2pDLENBQ0o7YUFDSixDQUFBLENBQUMiLCJmaWxlIjoibW9jay9yZWNpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xuXG5cbmV4cG9ydCBsZXQgUkVDSVBFUzogUmVjaXBlW10gPSBbXG4gICAgbmV3IFJlY2lwZSgnV2llbmVyIFNjaG5pdHplbCcsICdBIHRhc3R5IFNjaG5pdHplbCcsICd1cmwnLCBcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ1BvcmsgTWVhdCcsIDEpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ0ZyZW5jaCBGcmllcycsIDEpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ1NhbGFkJywgMiksXG4gICAgICAgIF1cbiAgICApLFxuICAgIG5ldyBSZWNpcGUoJ1N1cGVyIE1lZ2EgQnVyZ2VyJywgJ1Rhc3RlcyBzbyBkZWxpY2lvdXMhJywgJ3VybCcsIFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnQnVucycsIDIpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ1NhbGFkJywgMSksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnUGFkZGllcycsIDQpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ1ZlZ2V0YWJsZXMnIDIpXG4gICAgICAgIF1cbiAgICApXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
