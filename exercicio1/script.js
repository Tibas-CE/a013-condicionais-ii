const num = Number(prompt("Dígite um número"));

//Utilizando ifs aninhados

if(num % 2 == 0){
    if(num % 3 == 0){
        console.log("Este número e divisível por 2 e 3");
    } else {
        console.log("Este número e divisível apenas por 2");
    }
} else if(num % 3 == 0){
    console.log("Este número e divisível apenas por 3");
} else{
    console.log("Não foi dessa vez!");
};

//Utilizando um operador lógico para unir duas operações relacionai

//operador &&

if(num % 2 == 0 && num % 3 == 0){
    console.log("Este número e divisível por 2 e 3");
} else if(num % 2 == 0){
    console.log("Este número é divisível por 2");
} else if(num % 3 == 0){
    console.log("Este número e divisível apenas por 3");
} else{
    console.log("Não foi dessa vez!");
};

//operador ||

if(num % 2 == 0 || num % 3 == 0){
    console.log("Este número e divisível por 2 ou 3");
}   else {
    console.log("Não foi dessa vez!");
};

