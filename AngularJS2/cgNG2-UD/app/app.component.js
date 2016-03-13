System.register(['angular2/core', "./bindings/input.component", "./bindings/confirm.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = { name: myself.name, age: myself.age };
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " \n        <div class=\"container\">\n          <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confiredMyself\"></my-input>\n        </div>\n        <div class=\"container\">\n          <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n        </div>\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzdCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFTMUMsQ0FBQztnQkFQRywrQkFBUSxHQUFSLFVBQVMsTUFBbUM7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxNQUFtQztvQkFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBQyx3U0FPUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9DQUFnQixDQUFDO3FCQUNqRCxDQUFDOztnQ0FBQTtnQkFZRixtQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdUNBV0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSBcIi4vYmluZGluZ3MvaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbmZpcm1Db21wb25lbnR9IGZyb20gXCIuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTpgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPG15LWlucHV0IChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFtteXNlbGZdPVwiY29uZmlyZWRNeXNlbGZcIj48L215LWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxteS1jb25maXJtIChjb25maXJtZWQpPVwib25Db25maXJtKCRldmVudClcIiBbbXlzZWxmXT1cIm15c2VsZlwiPjwvbXktY29uZmlybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSW5wdXRDb21wb25lbnQsIENvbmZpcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcbiAgICBjb25maXJtZWRNeXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuICAgIFxuICAgIG9uU3VibWl0KG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gICAgICAgIHRoaXMubXlzZWxmID0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9OyAgXG4gICAgfVxuICAgIFxuICAgIG9uQ29uZmlybShteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSkge1xuICAgICAgICB0aGlzLmNvbmZpcm1lZE15c2VsZiA9IHtuYW1lOiBteXNlbGYubmFtZSwgYWdlOiBteXNlbGYuYWdlfTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
