var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    // var ma zasieg 'globalny' 
    //przez co nadpisuje zmienne nawet po wyjsciu z pętli
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log(i);
    };
    //stosujemy let aby ograniczyć zasieg
    // let nie pozwala definiować 2och zmiennych o tej samej nazwie
    LetConstVar.prototype.printNumber2 = function () {
        var i = 99;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            console.log(i_1);
        }
        console.log(i);
    };
    LetConstVar.prototype.checkIf = function () {
        var a = 'Jestem A';
        if (true) {
            var b = 'Jestem B';
            console.log(a);
            console.log(b);
        }
        // var b wyskakuje poza scope!
        console.log(b);
        a = "jestem nowe A";
        console.log(a);
    };
    // określa zmienne niemutowalne - stałe
    LetConstVar.prototype.showConst = function () {
        var num = 100;
        console.log(num);
    };
    return LetConstVar;
}());
var example = new LetConstVar();
example.printNumber();
example.printNumber2();
example.checkIf();
