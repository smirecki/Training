class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter(" Twitter");

var foo;
var bar = "tests";

// Build working with
// tsc *.ts --watch
// running in the dev dir


