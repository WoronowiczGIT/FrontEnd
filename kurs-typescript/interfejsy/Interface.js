var ClassInterface = /** @class */ (function () {
    // constructory klasy opisujemy słowem contructor
    function ClassInterface(msg) {
        this.msg = "massage";
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var example = new ClassInterface('HAHHA');
example.printMsg();
var dog = ({
    name: 'reksio',
    age: 3,
    color: 'black'
});
console.log(dog);
console.log(dog.name);
var json = '{"name":"Szarik","age":7,"color":"red","date":"2019-12-31"}';
var myDog = JSON.parse(json);
console.log(myDog);
