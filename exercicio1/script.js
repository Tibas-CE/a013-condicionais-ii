const num = Number(prompt("Dígite um número"));

//Utilizando ifs aninhados

if(num % 2 == 0){
    if(num % 3 == 0){
        console.log("Este número e divisível por 2 e 3");
    } else {
        console.log("Este número e divisível apenas por 2");
    }
} else{
    console.log("Não foi dessa vez.");
};

//Utilizando um operador lógico para unir duas operações relacionai

//operador &&
if(num % 2 == 0 && num % 3 == 0){
    console.log("Este número e divisível por 2 e 3");
} else{
    console.log("Este número não é divisível por 2 e 3");
};

//operador ||
if(num % 2 == 0 || num % 3 == 0){
    console.log("Este número e divisível por 2 e 3");
} else{
    console.log("Este número não é divisível por 2 e 3");
};