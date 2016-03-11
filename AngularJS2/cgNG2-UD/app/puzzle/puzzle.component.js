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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n          <h2>Game Setup</h2>\n          Enter your name please:\n          <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section \n        [ngClass]=\"{\n            puzzle: true,\n            solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n        }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"\n        >\n          <h2>\n              The Puzzle |\n              {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n          \n          \n          \n          </h2>\n          <p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>\n          <br>\n          Switch 1:\n          <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n          Switch 2:\n          <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n          Switch 3:\n          <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n          Switch 4:\n          <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number || switch3.value != switch3Number || switch4.value != switch4Number\">Congratulations {{name.value}}, you did it!</h2>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUNBO2dCQUFBO2dCQWNBLENBQUM7Z0JBUkcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsdzRDQWdDVDtxQkFFSixDQUFDOzttQ0FBQTtnQkFnQkYsc0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDZDQWNDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktcHV6emxlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgcHV6emxlOiB0cnVlLFxuICAgICAgICAgICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJiBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXJcbiAgICAgICAgfVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgVGhlIFB1enpsZSB8XG4gICAgICAgICAgICAgIHt7c3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCd9fVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHA+T2ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICBTd2l0Y2ggMTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICBTd2l0Y2ggMzpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICBTd2l0Y2ggNDpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHwgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8IHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bWJlciB8fCBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDROdW1iZXJcIj5Db25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cbiAgICBgLFxuICAgICAgICBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoM051bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDROdW1iZXI6IG51bWJlcjsgICAgXG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoM051bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
