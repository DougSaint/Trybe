console.log("Exercicio 01")
const myName = "Douglas Santos";
const birthCity = "Montes claros";
let birthYear = 2022;
console.log(myName + " " + birthCity + " " + birthYear);


/*
Altere o valor atribuído à constante birthCity.
 Faça um console.log(birthCity) novamente!
  Você saberia explicar por que recebemos uma mensagem de erro? 🤔 */

  /* Não é possível alterar o valor de uma constante */ 
console.log("Exercicio 02")
const base = 5;
const height = 8;
const area = base * height;
console.log(area);
const perimeter = base + base + height + height;
console.log(perimeter);


console.log("Exericio 03");

const nota = 70;
if(nota >= 80){
  console.log("Parabéns, você foi aprovada(o)!");
}else if(nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera");
}else{
  console.log("Você foi reprovada(o)”");
}

console.log("Exercicio 04");

const currentHour = 9;
let message = '';
if(currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir"
}else if (currentHour >= 18 && currentHour < 22){
  message = "Rango da noite, vamos jantar :D"
}else if (currentHour >= 14 && currentHour < 18){
  message = "Vamos fazer um bolo pro café da tarde?"
}else if (currentHour > 11 && currentHour< 14){
  message = "Hora do almoço!!!"
}else{
  message = "“Hmmm, cheiro de café recém-passado” na variável “message”"
}
console.log(message);

console.log("Exercicio 05")

const weekDay = "Quarta-feira"
if(
      weekDay === "segunda-feira" ||
      weekDay === "terça-feira" ||
      weekDay === "quarta-feira" ||
      weekDay === "quinta-feira" || 
      weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
  }else{
    console.log("FINALMENTE, descanso merecido UwU”")
  }


console.log("Exercicio 06")

let statusCandidate = "lista"

switch (statusCandidate) {
  case "aprovada": console.log("Parabéns, você foi aprovada(o)!”")
    break;
  case "lista": console.log("Você está na nossa lista de espera")
    break;
  case "reprovada": console.log("Você foi reprovada(o)")
    break;  
  default: console.log("informação incorreta")
    break;
}