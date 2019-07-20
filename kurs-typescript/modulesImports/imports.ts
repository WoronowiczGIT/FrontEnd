// importujemy pojedyńczą klasę
import { One } from "./model";
// mozemy importowac wzsystkie exporty z danego pliku
import * as model from "./model";


let one = new One();
let two = new model.Two();
let pi = model.Pi;
console.log(pi);