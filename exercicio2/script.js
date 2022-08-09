//let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

/*if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

//utilizando o switch-case

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade) {
    case "brasileira", "brasileiro":
        console.log("a pessoa é do Brasil!");
        break;
    case "argentina", "argentino":
        console.log("a pessoa é da Argentina!");
        break;
    case "uruguaia", "uruguaio":
        console.log("a pessoa é do Uruguai!");
        break;
    case "chilena", "chileno":
        console.log("a pessoa é do Chile!");
        break;
    case "colombiana", "colombiano":
        console.log("a pessoa é da Colômbia!");
        break;
    default:
        console.log("Nacionalidade não encontrada");    
};

//utilizando switch-case com array
/*let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

let nacao = [
    "brasileira", "brasileiro", "argentina", "argentino", "chilena", "chileno", "colombiana", "colombiano" 
];

switch (nacionalidade) {
    case nacao [0 || 1]:
        console.log("a pessoa é do Brasil!");
        break;
    case nacionalidade [2 || 3]:
        console.log("a pessoa é da Argentina!");
        break;
    case nacionalidade [4 || 5]:
        console.log("a pessoa é do Uruguai!");
        break;
    case nacionalidade [6 || 7]:
        console.log("a pessoa é do Chile!");
        break;
    case nacionalidade [8 || 9]:
        console.log("a pessoa é da Colômbia!");
        break;
    default:
        console.log("Nacionalidade não encontrada");    
};*/