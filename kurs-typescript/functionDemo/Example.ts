class ExampleFunction {
    msg: string = "elo elo";

    showMsg() {
        console.log(this.msg);
    }
    // deklarowanie typu zwracanego
    hello(): string {
        return 'dupa dupa';
    }
    // deklarowanie parametru
    hello2(myParameter: string) {
        console.log(myParameter);
    }
    // znak zapytania przy parametrze oznacza, 
    // że jest on opcjonalny, ale nie jest pomijany
    // -> undefined
    hello3(msg1: string, msg2?: string) {
        console.log(msg1 + " " + msg2);
    }
    //deklarowanie parametru w konstruktorze
    hello4(msg1: string, msg2 = 'domyslny') {
        console.log(msg1 + " " + msg2);
    }
    // funkcja anonimowa z argumentem
    fName = myArgument => console.log('anonymous function / fat arrow. Argument = ' + myArgument);
    // funkcja anonimowa bez argumentu
    fName2 = () => console.log('no argument');
    // funkcja anonimowa zwracajaca argument
    fName3 = (arg: string): number => {
        console.log(arg);
        return 69;
    }
}

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