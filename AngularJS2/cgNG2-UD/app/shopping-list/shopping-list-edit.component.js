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
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent() {
                }
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        template: "\n        <h1>{{ingredient === null ? 'Add' : 'Edit'}} Item</h1>\n        <form id=\"shopping-list-add\" (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" required value=\"{{ingredient?.name}}\" ngControl=\"name\">\n            <label for=\"item-amount\">Name</label>\n            <input type=\"text\" id=\"item-amount\" required value=\"{{ingredient?.amount}}\" ngControl=\"amount\">\n            <button class=\"btn\" type=\"submit\">{{ingredient === null ? 'Add' : 'Edit'}}</button>\n            <button class=\"btn danger\" *ngIf=\"ingredient !== null\" (click)=\"onDelete()\">Delete Item</button>\n        </form>\n    ",
                        inputs: ['ingredient'],
                        styleUrls: ['src/css/shopping-list.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSxzdEJBVVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUN0QixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztxQkFDM0MsQ0FBQzs7NkNBQUE7Z0JBR0YsZ0NBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELGlFQUVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zaG9wcGluZy1saXN0LWVkaXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT57e2luZ3JlZGllbnQgPT09IG51bGwgPyAnQWRkJyA6ICdFZGl0J319IEl0ZW08L2gxPlxuICAgICAgICA8Zm9ybSBpZD1cInNob3BwaW5nLWxpc3QtYWRkXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgcmVxdWlyZWQgdmFsdWU9XCJ7e2luZ3JlZGllbnQ/Lm5hbWV9fVwiIG5nQ29udHJvbD1cIm5hbWVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtb3VudFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtb3VudFwiIHJlcXVpcmVkIHZhbHVlPVwie3tpbmdyZWRpZW50Py5hbW91bnR9fVwiIG5nQ29udHJvbD1cImFtb3VudFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj57e2luZ3JlZGllbnQgPT09IG51bGwgPyAnQWRkJyA6ICdFZGl0J319PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGRhbmdlclwiICpuZ0lmPVwiaW5ncmVkaWVudCAhPT0gbnVsbFwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ2luZ3JlZGllbnQnXSxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zaG9wcGluZy1saXN0LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEVkaXRDb21wb25lbnQge1xuICAgIGluZ3JlZGllbnQ6IEluZ3JlZGllbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
