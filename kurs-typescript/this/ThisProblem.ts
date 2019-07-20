class ThisProblem {
    msg: string = "Hello Elo";

    printFunction() {
        // function() wywoływanie funkcji anonimowej
        // w tym wypadku this odnosi się do pola funkcji = undefined
        return function () {
            console.log(this.msg)
        }
    }
    printFunction2() {
        // z jakiegoś powodu lambdy sa powiazane z rodzicem
        return () => {
            console.log(this.msg)
        }
    }

}

var example = new ThisProblem();
var funk = example.printFunction();
funk();
var funk2 = example.printFunction2();
funk2();