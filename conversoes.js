//tipos de dados
 //booleanos
 //conversão implicita
 const numero= 456;
 const numeroString= "456";
 const numero1=456;
 const operacao=(numero+numero1)
 

 console.log( numero === numeroString)
 console.log(numero == numeroString)
 console.log(numero + numeroString )
 console.log(operacao)

 //conversão explicita
 console.log (numero+ Number(numeroString))
//Number()
 let largura = "10";
 let altura = "5";
 console.log(Number(largura) * Number(altura)); 

//Tipagem dinâmica
let minhaVar=567;
minhaVar='texto';
