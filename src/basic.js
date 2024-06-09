function welcome(){
    //Escribe tu código aquí

   const saludo="Hello World";
   return saludo;
};

function evenOrOdd(numero) {
    if (numero%2===0) {
        return "even";
    } else {
        return "odd";
    }
}


function greeting(persona) {
    return `Hola, ${persona}!`;
}

export { evenOrOdd, greeting, welcome }

//ejercicio 2
function compOne() {
    const number= 20;
    const comNum=(number===20);
    
return comNum;
}

function compTwo() {
    const language= "Javascript";
    const expresion=(language!== "Javascript");
    return expresion;
}
export{ compOne, compTwo}

//ejercicio 3
function operaciones() {
    const a=50;
    const b=50;
    const suma=a+b;
    const multiplicacion=a*b;
    const divicion=a/b;
    return [suma , multiplicacion , divicion];
}
export{operaciones}

//ejercicio 4
function and(a,b) {
    return a && b;
}
function oo(a,b) {
    return a || b;
    
}
export{and, oo}


