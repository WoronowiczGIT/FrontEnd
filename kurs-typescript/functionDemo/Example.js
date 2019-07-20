var ExampleFunction = /** @class */ (function () {
    function ExampleFunction() {
        this.msg = "elo elo";
        // funkcja anonimowa z argumentem
        this.fName = function (myArgument) { return console.log('anonymous function / fat arrow. Argument = ' + myArgument); };
        // funkcja anonimowa bez argumentu
        this.fName2 = function () { return console.log('no argument'); };
        // funkcja anonimowa zwracajaca argument
        this.fName3 = function (arg) {
            console.log(arg);
            return 69;
        };
    }
    ExampleFunction.prototype.showMsg = function () {
        console.log(this.msg);
    };
    // deklarowanie typu zwracanego
    ExampleFunction.prototype.hello = function () {
        return 'dupa dupa';
    };
    // deklarowanie parametru
    ExampleFunction.prototype.hello2 = function (myParameter) {
        console.log(myParameter);
    };
    // znak zapytania przy parametrze oznacza, 
    // że jest on opcjonalny, ale nie jest pomijany
    // -> undefined
    ExampleFunction.prototype.hello3 = function (msg1, msg2) {
        console.log(msg1 + " " + msg2);
    };
    //deklarowanie parametru w konstruktorze
    ExampleFunction.prototype.hello4 = function (msg1, msg2) {
        if (msg2 === void 0) { msg2 = 'domyslny'; }
        console.log(msg1 + " " + msg2);
    };
    return ExampleFunction;
}());
var example = new ExampleFunction();
example.showMsg();
console.log(example.hello());
example.hello2('try hard');
example.hello3('ona', 'jest');
example.hello3('ona');
example.hello4('ten parametr jest ');
example.hello4('ten parametr jest ', 'podany');
example.fName('some random value');
example.fName2();
console.log(example.fName3('the lucky number is:'));
