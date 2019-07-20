class LetConstVar {
    // var ma zasieg 'globalny' 
    //przez co nadpisuje zmienne nawet po wyjsciu z pętli
    printNumber() {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log(i);
    }
    //stosujemy let aby ograniczyć zasieg
    // let nie pozwala definiować 2och zmiennych o tej samej nazwie
    printNumber2() {
        let i = 99;
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log(i);
    }
    checkIf() {
        let a = 'Jestem A'
        if (true) {
            var b = 'Jestem B'
            console.log(a);
            console.log(b);
        }
        // var b wyskakuje poza scope!
        console.log(b);
        a = "jestem nowe A"
        console.log(a);
    }
    // określa zmienne niemutowalne - stałe
    showConst() {
        const num = 100;
        console.log(num);
    }

}

let example = new LetConstVar();
example.printNumber();
example.printNumber2();
example.checkIf();