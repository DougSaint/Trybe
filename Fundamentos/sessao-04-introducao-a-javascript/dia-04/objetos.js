let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178’",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};


// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
// Use a sintaxe meuObjeto.chave. Valor esperado no console:

//console.log('Bem vinda, ' + info.personagem)



// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. 
// Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

 // info.recorrente = 'Sim'
 // console.log(info)


 // Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

/* for (key in info){
console.log(key)
} */

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

    /* for (key in info){
    console.log(info[key])
    }  */


// imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

/* for (key in info){

    if(info[key] == 'Sim'){
        console.log('Ambos recorrentes')
    }else{
        console.log(info[key] + 'e ' + info2[key])
    }
}
*/ 

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      
    ],
  };

  leitor.livrosFavoritos.push(
    { titulo: 'O Pior Dia de Todos',
         autor: 'Daniela Kopsch',
         editora: 'Tordesilhas',
    }
)


// console.log("O livro favorito de Julia Pessoa se chama " + leitor.livrosFavoritos[0].titulo + "."); 

console.log("Julia tem " + leitor.livrosFavoritos.length + " livros favoritos.")
