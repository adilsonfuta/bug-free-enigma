

interface MathFunc {
    (a: number, b:number ): number;
}

// implements.MathFunc()
const soma: MathFunc = (a: number, b:number ): number =>{
    return a + b;
};

console.log(soma(12, 3));
