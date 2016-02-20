//tuts3.1.ts
// version 1
// class Point {
//     private xValue: number;
//     private yValue: number;
//     constructor(x: number, y: number) {
//         this.xValue = x;
//         this.yValue = y;
//     }
// }
// var p1 = new Point(2, 1);
//version 2
var Point = (function () {
    function Point(xValue, yValue) {
        this.xValue = xValue;
        this.yValue = yValue;
    }
    Point.add = function (p1, p2) {
        return p1.add(p2);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.xValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        // //set x(value: number) {
        //     this.xValue = value;
        // }
        get: function () {
            return this.yValue;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.add = function (point) {
        return new Point(point.x + this.x, point.y + this.y);
    };
    Point.origin = new Point(0, 0);
    return Point;
})();
var p1 = new Point(2, 1);
var p2 = new Point(5, 2);
var p3 = Point.add(p1, p2);
