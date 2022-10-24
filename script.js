let escolhaDeCartas;
let baralho=document.querySelector('.container');
const cards =[];
let primeiro ="";
let segundo ="";
let acerto=0;
let erro=0;
const personagem=['0','1','2','3','4','5','6'];


function embaralhar() { 
  return Math.random() - 0.5;     
}

function criarCartas(){

    for(let i =0; i < cards.length; i++){

    baralho.innerHTML += `
    <div class="card "> 
    <li id="${cards[i]}" onclick= "selecionarCarta(this)" class="face front"> <img class="image"src="../images/${cards[i]}.gif" alt=""/>  </li>
    <li id="${cards[i]}" onclick= "selecionarCarta(this)" class="face back"> <img class="image" src="./images/back.png" alt=""/>  </li>
    </div>

    `;

   //cards.push({card:i}, {personagem: `${i}.gif`});
}

 
}


function inicio(){

while(escolhaDeCartas < 4 || escolhaDeCartas > 15 || escolhaDeCartas% 2 !==0){
        escolhaDeCartas=Number(prompt("Escolha a quantidade de cartas...O numero deve ser par, maior que 4 e menor que 15"));
        
    }
    
 for(let i =0; i < escolhaDeCartas/2; i++){
    let card =personagem[i]
    cards.push(card)
    cards.push(card) 
    
} 
cards.sort(embaralhar) /*para embaralhar as cartas */
console.log(cards)
criarCartas()
}
console.log (cards)





function verificarCards(){
let firts = primeiro.id
let second =segundo.id

if(firts === second){
    primeiro.parentNode.classList.add( 'foi');
    segundo.parentNode.classList.add('foi');
    
    primeiro =""
    segundo =""
    acerto++
    
}

    else {
        
        setTimeout(() =>{
        primeiro.parentNode.classList.remove('select-card');
        segundo.parentNode.classList.remove('select-card');
        primeiro =""
        segundo =""
        erro++
    },1000);

}

if( acerto === escolhaDeCartas/2 ){
 setTimeout( wins,1000)   
}
}

function wins(){
    const totalJogadas = acerto + erro
   alert(`Você ganhou em ${totalJogadas} jogadas!`)
}

function selecionarCarta(clicou){
 
    if (clicou.parentNode.classList.contains('select-card')) {
        return
    }   
    
    if(primeiro ===""){
    clicou.parentNode.classList.add('select-card')
    primeiro = clicou
}

else if(segundo===""){
    clicou.parentNode.classList.add('select-card')
    segundo = clicou

    verificarCards()
}
}
 
    inicio()
   
 // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir

//console.log(cards)