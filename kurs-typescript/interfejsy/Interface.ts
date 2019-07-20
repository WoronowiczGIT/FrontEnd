class ClassInterface {

    msg: string = "massage"
    // constructory klasy opisujemy słowem contructor
    constructor(msg?: string) {

    }

    printMsg() {
        console.log(this.msg);
    }

}
let example = new ClassInterface('HAHHA');
example.printMsg();

//definicja intercafe-u
// interface-y uzywane sa w angularze 
// głównie do definiowania obiektów jsonowych
interface Dog {
    name: string;
    age: number;
    color: string;
    date?: Date;
}
let dog: Dog = ({
    name: 'reksio',
    age: 3,
    color: 'black'
})

console.log(dog)
console.log(dog.name)
// tworzymy obiekt parsując JSON ! :-D
let json = '{"name":"Szarik","age":7,"color":"red","date":"2019-12-31"}'
let myDog: Dog = JSON.parse(json);
console.log(myDog);