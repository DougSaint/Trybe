
console.log("ORDEM CRESCENTE")
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(i = 0; i < numbers.length; i++){
    for(x = 0; x < numbers.length; x++){
        if(numbers[i] < numbers[x]){
            let number = numbers[i]
           numbers[i] =numbers[x];
           numbers[x] = number;
        }
    }
}
console.log(numbers)


/*------------------------------------------------------------ */

console.log("Ordem decrescente")

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(i = 0; i < numbers2.length; i++){
    for(x = 0; x < numbers2.length; x++){
        if(numbers2[x] < numbers2[i]){
            let number = numbers2[x]
            numbers2[x] = numbers2[i]
            numbers2[i] = number
        }
    }
}
console.log(numbers2)