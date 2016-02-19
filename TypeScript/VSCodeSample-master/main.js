var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter(" Twitter");
var foo;
var bar = "tests";
// Build working with
// tsc *.ts --watch
// running in the dev dir
