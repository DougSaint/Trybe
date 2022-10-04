 // Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for. 

 function checkPalindromo(str){
    let string = str.split("").reverse().join('');
    if (string === str){
      return("É palindromo")
    }else{
      return("Não é Palindromo")
    }
 }

//console.log(checkPalindromo("pipa"))

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
 
function biggerInt(arr) {
    let biggerValue = 0;
    let position = 0
    for(x in arr){
       if(arr[x] > biggerValue){
        biggerValue = arr[x]
        position = x
       }
    }
   return(position)
}

// console.log(biggerInt([2, 3, 6, 7, 10, 1]))

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerNumber(arr) {
    let position = 0;
    for( x = 0; x < arr.length; x++){
        if(arr[position] > arr[x]){
            position = x
        }
    }
    return(position);
}

// console.log(lowerNumber([2, 4, 6, 7, 10, 0, -3]))




//Crie uma função que receba um array de nomes
//e retorne o nome com a maior quantidade de caracteres.


function mostLetters(arr){
    let mostLetters = '' 
    for (x in arr){
        if (arr[x].length > mostLetters.length ){
            mostLetters = arr[x]
        }
    }
    return mostLetters
}
//console.log(mostLetters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))




// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


// Crie uma função que receba um número natural 
// (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(int) {
    if(int > 0){
        let somador = 0;
        for (let x = 0; x <= int; x++){
            somador += x;
        }
        return somador
    }else{
        return("Numero inválido")
    }
}

// console.log(somatorio(5))

// Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(str1, str2){
    let y = str2.length - 1;
    for(x = str1.length - 1; x > 0; x--){
        if(str1[x] === str2[y]){
            y--;
        }else if(y <= 0){
            return true;
        }else{
            return false;
        }
    }
}
//  console.log(verificaFimPalavra('joaofernando', 'fernan'))