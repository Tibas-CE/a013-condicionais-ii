//código a ser reescrito

let idade = Number(prompt("Informe sua idade"));
const nome = prompt("Informe seu nome").toLowerCase(); 

if(nome === "jose"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
};

//if ternário
nome === "jose" ? console.log("Oi, Zé!") : console.log("Olá, "+nome);


if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
};

//if ternário
idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Não pode tirar carteira de motorista!");