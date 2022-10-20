let escolhaDeCartas=Number(prompt("Escolha a quantidade de cartas...O numero deve ser par, maior que 4 e menor que 15"))
let cartas=document.querySelector('.teste');

while(escolhaDeCartas < 4 || escolhaDeCartas > 15 || escolhaDeCartas% 2 !==0){

        escolhaDeCartas=Number(prompt("Escolha a quantidade de cartas...O numero deve ser par, maior que 4 e menor que 15"));
                
    }

    cartas.innerHTML= `liescolhaDeCartas`
 

console.log(escolhaDeCartas)
