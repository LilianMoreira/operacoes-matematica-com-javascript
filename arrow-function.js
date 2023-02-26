//Arrow function
const apresentarArrow= nome => `Meu nome é ${nome}`;
const soma= (num1,num2)=> num1+num2;

//Arrow  function com + de 1  linha de  instrunção
const  somaNumerosPequenos= (num1,num2) => {
    if (num1>10||num2 >10){
    return"somente numeros de  1 a 9"
}else{
    return num1+num2;
}
}
//operador maior ou igual que >=
//arrow  function é  um jeito rápido e  curto de escrever  a função, tem vantagens quando mechemos  com objeto.