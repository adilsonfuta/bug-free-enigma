
// inferencia de tipo ... 

let age:number = 34;

const firstName: string = "Adilson Futa";
const isValid: boolean = true;
let idk: any = true;

idk='12';
idk= false;

// criando vetor / lista / array

const ids: number[] = [1,2,4,5,12312321];

const booleans: boolean[] = [true, false, true, false];

const names: string[] = ["Adilson", "Nuna", "Aryadne"];

// tupla // chave e valores  

const tuplaPersona: [number, string] = [1,"Irene"];

// lista de tupla
const people :[number, string][] = [
    [2, "pedro"],
    [3, "mingo"],
    [4, " joao"]
]

// intersections - para uma var ter varios tipos

const productId: string | number | boolean = false;

// enum - definicao de valor constante ...

/*
enum Dir {
    A,
    B,
}

const valorRes = Dir.B;
console.log(valorRes);
*/

// type assertions - mudar o tipo de uma variavel  tem 2 formas item1 e item2

const productName: any = "chapeu";

let itemId = productName as string;

console.log(itemId);


// let itemId2 = <string> productName;



// -----------------------------------------

type status = "sucess" | "error";
let response: status ="sucess";

console.log(response);





