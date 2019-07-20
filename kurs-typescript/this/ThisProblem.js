var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.msg = "Hello Elo";
    }
    ThisProblem.prototype.printFunction = function () {
        // function() wywoływanie funkcji anonimowej
        // w tym wypadku this odnosi się do pola funkcji = undefined
        return function () {
            console.log(this.msg);
        };
    };
    ThisProblem.prototype.printFunction2 = function () {
        var _this = this;
        // function() wywoływanie funkcji anonimowej
        // w tym wypadku this odnosi się do pola funkcji = undefined
        return function () {
            console.log(_this.msg);
        };
    };
    return ThisProblem;
}());
var example = new ThisProblem();
var funk = example.printFunction();
funk();
var funk2 = example.printFunction2();
funk2();
