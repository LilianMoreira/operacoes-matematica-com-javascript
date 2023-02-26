//paramtros de função
function soma(numero1,numero2){
    return numero1 + numero2;
}
console.log(soma(2,2));
console.log(soma(245,20));
console.log(soma(-500,60));

//parâmetros X argumentos
//ordem dos parâmetros 

function nomeIdade(nome,idade){
return `Meu nome é ${nome} e minha idade é ${idade} anos`;
}
console.log(nomeIdade("Juliana",40));
console.log(nomeIdade("Lilian",29));
console.log(nomeIdade("Joceli", 54));
console.log(nomeIdade("Maximirian",39));
console.log(nomeIdade("Sophia",6));

function multiplica(numero1, numero2){
    return numero1*numero2
}
console.log(multiplica(2,4));
console.log(multiplica(4,10));
console.log(multiplica(soma(2,2),soma(245,20)));

function multiplicacao(numero1=1, numero2=1){
    return numero1*numero2;
}
console.log(multplicacao(soma(2,4)));