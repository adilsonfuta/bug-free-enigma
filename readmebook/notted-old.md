

   > "target": "es2016", // define qual a linguagem ou versao do js ser compilada
   >  "module": "esnext", // define import/export ou require 

   ---------------------------------------



TypeScriptTutorial
$ npm install -g typescript
tipagem dinamica - o TypeScript permite que variaveis mudem de tipo

let minhaVariavel: any = 10; // inicialmente é um número

tipagem estatica - o TypeScript não permite que variaveis mudem de tipo

let minhaOutraVariavel: number = 20; // inicialmente é um número

// minhaOutraVariavel = "texto"; 
// Isso causaria um erro de compilação
// o compilador do typescript se chama tsc (TypeScript Compiler)
// e é usado para converter código TypeScript em JavaScrip

// para compilar um arquivo TypeScript, você pode usar o comando:
// tsc nomeDoArquivo.ts

import uuid from 'uuid';

const generateUser = () =>{ return {id: uuid}; ; }

console.log("Res:"+ generateUser());

no typescript posso usar import e export ...

-----------------------------------------------------------



type Carro = {
	modelo?: string;
	ano: number; 
}

let car: Carro;

car = {
	ano: 2012,
	modelo: "kia",
}

console.log(car.modelo?.toUpperCase());


function teste(mensagem: string){
	console.log(mensagem)
}

function teste2(mensagem: string): string{
	return mensagem;
}

teste("ola mundo")

console.log(teste2("ola mundo 2"));
console.log(teste2("ola mundo 2").toUpperCase());

// inferencia de tipo permite o ts ler uma funcao e saber o seu tipo de retorno, 
// so funciona para tipos primitivos a menos q definas um type etc 

function getCarro(): Carro{
		return {
			modelo:"hyundai",
			ano: 2026
		}
}

console.log(getCarro())

function toJSON(objeto: any){
		return JSON.stringify(objeto);
}

console.log(toJSON(car));


// funcoes Generic no caso tipo T

function fromJSON<T>(valor: string){
	return JSON.parse(valor) as T;
}

const novoCarJson = `{"ano":2050,"modelo":"kia Future"}`;

console.log(fromJSON<Carro>(novoCarJson))

console.log(fromJSON<Carro>(novoCarJson).ano)


