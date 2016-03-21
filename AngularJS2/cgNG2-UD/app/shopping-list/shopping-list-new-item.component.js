System.register(['angular2/core', "./shopping-list.service", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1, common_1, common_2;
    var ShoppingListNewItemComponent;
    function greaterZero(control) {
        if (control.value <= 0) {
            return { notEnough: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
                    this._shoppingListService = _shoppingListService;
                    this._formBuilder = _formBuilder;
                    this.item = { name: '', amount: 0 };
                }
                ShoppingListNewItemComponent.prototype.onSubmit = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'itemName': ['', common_2.Validators.required],
                        'itemAmount': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                greaterZero
                            ])],
                    });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"input\">\n                <label for=\"item-name\">Name</label>\n                <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"myForm.controls['itemName']\">\n            </div>\n            <div class=\"input\">\n                <label for=\"item-amt\">Amount</label>\n                <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"myForm.controls['itemAmount']\">\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Item</button>\n        </form>\n    ",
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUErQ0EscUJBQXFCLE9BQWdCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lBMUJEO2dCQUlJLHNDQUFvQixvQkFBeUMsRUFBVSxZQUF5QjtvQkFBNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIaEcsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBR3NFLENBQUM7Z0JBRXBHLCtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQUVELCtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ2xDLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsV0FBVzs2QkFDZCxDQUFDLENBQUM7cUJBQ04sQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLG9wQkFZVDtxQkFDSixDQUFDOztnREFBQTtnQkFxQkYsbUNBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVFQW9CQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2l0ZW1OYW1lJ11cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW10XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snaXRlbUFtb3VudCddXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW0gPSB7bmFtZTogJycsIGFtb3VudDogMH07XG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG4gICAgICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cbiAgICBcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJdGVtKHtuYW1lOiB0aGlzLml0ZW0ubmFtZSwgYW1vdW50OiB0aGlzLml0ZW0uYW1vdW50fSk7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnaXRlbU5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ2l0ZW1BbW91bnQnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBncmVhdGVyWmVyb1xuICAgICAgICAgICAgXSldLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIGdyZWF0ZXJaZXJvKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoY29udHJvbC52YWx1ZSA8PSAwKSB7XG4gICAgICAgIHJldHVybiB7bm90RW5vdWdoOiB0cnVlfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
