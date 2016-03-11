System.register(['angular2/core', "./test.component"], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Max";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n    Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : ''\">{{name}}</span> and this is my very first ng2 component! \n    <span [class.is-awesome]=\"inputElement.value === 'yes'\">It's so AWESOME!!!!!!!!!!</span>\n    <br>\n    Is it awesome?\n    <input type=\"text\" #inputElement (keyup)=\"0\">  \n    <br><br>\n    <button [disabled]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' was entered</button>\n    <test></test>\n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFISSx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQXJCTjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsNmNBU1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzlCLENBQUM7O3dDQUFBO2dCQVFGLDJCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1REFNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gXCIuL3Rlc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgSGksIEknbSA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnIDogJydcIj57e25hbWV9fTwvc3Bhbj4gYW5kIHRoaXMgaXMgbXkgdmVyeSBmaXJzdCBuZzIgY29tcG9uZW50ISBcbiAgICA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnXCI+SXQncyBzbyBBV0VTT01FISEhISEhISEhITwvc3Bhbj5cbiAgICA8YnI+XG4gICAgSXMgaXQgYXdlc29tZT9cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+ICBcbiAgICA8YnI+PGJyPlxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0gJ3llcydcIj5Pbmx5IGVuYWJsZWQgaWYgJ3llcycgd2FzIGVudGVyZWQ8L2J1dHRvbj5cbiAgICA8dGVzdD48L3Rlc3Q+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbVGVzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIFxuICAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgICB0aGlzLm5hbWUgPSBcIk1heFwiO1xuICAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
