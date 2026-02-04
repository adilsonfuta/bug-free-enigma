
const soma=(a:number, b:number) =>{
    return a+b;
}

const soma2=(a:number, b:number):string =>{
    return (a+b).toString();
}

const soma3=(a:number, b:number): string | number =>{
      return (a+b).toString();
}
const valor = soma(3,4);

console.log(valor);

const logg = (mensagem: string): void =>{
    console.log(mensagem);
}
