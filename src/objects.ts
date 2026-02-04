
// type é um tipo construido ...

type Operadora={
    indicativo:string;
    numeroTelefone:number;
}

type User ={
    firstName: string;
    age: Number;
    email?: string;
    password: string;
    address?:string;
    metas: string[];
    operadoras?:Operadora[];
    register?(): string;
}

const usuarios: User = {
    firstName: "Adilson futa",
    age:34,
    password: "124se33c",
    metas:["nestjs", "gcp","advance ts/nestjs","payment"],
    operadoras:[
        {indicativo:"+244",numeroTelefone:932392875},
        {indicativo:"+222",numeroTelefone:914765656}
    ],
    register(us) {
       return "ola mundo"  
    },

}

console.log(usuarios.firstName);
console.log(usuarios.operadoras);


const printLog = (sms?: string) =>{
    console.log(sms);
    
 } 
printLog(usuarios.email="adi@sirius.ao"); 

// quando eu chamo um valor q pode ser tipo |underfine (email?)
// a funcao de chamada deve ser ? ou seja o seu argumento -> (sms?: string) 

const printLog2 = (envia: string) =>{
    console.log(envia);
    
 } 
printLog2(usuarios.address="viana é a banda"!); 
printLog2(usuarios.operadoras[0]?.numeroTelefone!); 

// ou uso ! para dizer que existe  ! ignora undefined... 
// UNIONS - permite combinar 2 de 1 type em um unico 

type Company={
    id:number;
    nif?:number;
    segmento:string;
}

// usando union 
const cargo: User & Company ={
    firstName: "Adilson",
    age:39,
    metas:["ok","ja deu"],
    password:"asdasde133",
    id:1,
    segmento:"tecnologia",
    operadoras:[]
} 

console.log(cargo.segmento+"\n"+cargo.firstName);
