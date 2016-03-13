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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        <h1>Your details, please</h1>\n        <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n     ",
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFtQjVELENBQUM7Z0JBakJELGdDQUFPLEdBQVA7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUM5QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDN0IsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQXpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsZ25CQWVSO3dCQUNFLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDN0IsQ0FBQzs7a0NBQUE7Z0JBd0JFLHFCQUFDO1lBQUQsQ0F2QkosQUF1QkssSUFBQTtZQXZCTCwyQ0F1QkssQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPllvdXIgZGV0YWlscywgcGxlYXNlPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV09XCJteXNlbGYuYWdlXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2PkZpbGxlZCBvdXQ6IHt7aXNGaWxsZWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICA8ZGl2PlZhbGlkOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgYCxcbiAgICAgICAgb3V0cHV0czogWydzdWJtaXR0ZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XG4gICAgbXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcbiAgICBpc0ZpbGxlZCA9IGZhbHNlO1xuICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICBzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcbiAgICBcbiAgICBvbktleXVwKCkge1xuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy5teXNlbGYpO1xuICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
