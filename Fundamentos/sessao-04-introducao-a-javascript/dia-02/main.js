/* Exercicio 01 - Arrays e For */
console.log("Exercicio 01")
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
   console.log(groceryList[index]);
}

/* Exercicio 02 - For of*/
console.log("---------------------")
console.log("Exercicio 02")
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (const el of names) {
    console.log(el);
}

console.log("---------- Exercicio para fixar -----------")
console.log("Exercicio 03")


let sum = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (const number of numbers) {
    console.log(number);
    sum += number;
}



console.log(`A soma dos valores é ${sum}`);
if(sum/10 > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}
 


let maxNumber = 0;
for(i = 0; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
}



let oddNumber = 0;

console.log("O maior numero é " + maxNumber);
for (const el of numbers) {
    if(el % 2 === 0){
        oddNumber++;
    }
}
console.log(oddNumber);


let minNumber = maxNumber;

for(i = 0; i < numbers.length; i++){
    if (numbers[i] < minNumber){
        minNumber = numbers[i];
    }
}
console.log("O menor número é : " + minNumber)


const arrNumbers = [];

for(i = 1; i <= 25; i++){
    arrNumbers.push(i);

}
console.log(arrNumbers);

for (const el of arrNumbers) {
    console.log(el/2);
}












