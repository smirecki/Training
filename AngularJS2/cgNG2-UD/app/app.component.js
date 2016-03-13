System.register(['angular2/core', "./bindings/input.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n          <my-input (submitted)=\"onSubmit($event)\"></my-input>\n        </div>\n        <div class=\"container\">\n            ...\n        </div>\n    ",
                        directives: [input_component_1.InputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0Isb0JBQWUsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBQyxpTUFPUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUMvQixDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdUNBR0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSBcIi4vYmluZGluZ3MvaW5wdXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8bXktaW5wdXQgKHN1Ym1pdHRlZCk9XCJvblN1Ym1pdCgkZXZlbnQpXCI+PC9teS1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIC4uLlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBteXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuICAgIGNvbmZpcm1lZE15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
