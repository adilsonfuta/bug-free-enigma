
interface UserInterface{
    firstName: string;
    email?: string;
    readonly paisOrigem: string;
}

// implementacao

const emailUser: UserInterface ={
    firstName: "adilson",
    email: "adilson@sirius.ao",
    paisOrigem:"Angola",
}

// let info=emailUser.paisOrigem="B";  nao da pra fazer por ser readonly
console.log(emailUser.paisOrigem);

interface Livros{
    books: string[]
}

const UniaoInterfaces: UserInterface & Livros = {
    books:[],
    firstName: "futa",
    paisOrigem:"Belgica",
    email: "futa@gmail.com"
}

console.log(UniaoInterfaces.paisOrigem);
 
type Grade = number | string;
const notas : Grade =1;