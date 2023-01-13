const gifs =['./img/bobrossparrot.gif','./img/explodyparrot.gif','./img/fiestaparrot.gif','./img/metalparrot.gif','./img/revertitparrot.gif','./img/tripletsparrot.gif','./img/unicornparrot.gif']; 
gifs.sort(comparador);
let numCartas;
const segundo = document.querySelector('.segundo');
let segundoTempo = 0;
let cron;
//Começo do jogo

numeroDeCartas();
function numeroDeCartas(){
    numCartas = prompt("Com quantas cartas você quer jogar?");
    Number(numCartas);
    if(numCartas<4||(numCartas%2)!==0||numCartas>14){
        numeroDeCartas();
    }
}

//Distribuição aleatória das cartas de acordo o número escolhido
let contador=0;
let gifAdicionado;
distribuiCartasAleatorias()

function distribuiCartasAleatorias(){
    const containerPrincipal = document.querySelector(".container-principal");
    const cartasDistribuidas=[];
    for( ;contador<numCartas; contador++){
        if(contador%2===0){
            gifAdicionado=contador/2;
        }else{
            gifAdicionado=(contador-1)/2;
        }
    
         const cartaAdicionadaNoDom = `<div onclick="viraCarta(this)" data-test="card" class="card">
             <div class="front-face face">
                 <img data-test="face-down-image" src="./img/back.png" alt="Imagem de um papagaio">
             </div>
             <div class="back-face face">
                 <img data-test="face-up-image" src="${gifs[gifAdicionado]}" alt="Imagem de um papagaio">
             </div>
         </div>`
         cartasDistribuidas.push(cartaAdicionadaNoDom);
     }
     cartasDistribuidas.sort(comparador);
     
     for(contador = 0;contador<cartasDistribuidas.length; contador++){
         containerPrincipal.innerHTML+=cartasDistribuidas[contador];
     }
     start();
}
//Virando as cartas

contador = 0;
let espera = 0;
let numeroDeJogadas = 0;
let quantidadeDeAcertos = 0;
function primeiraCarta(carta){
    carta.classList.add("vira");
    numeroDeJogadas++;
    contador++;
}
function segundaCarta(carta){
    numeroDeJogadas++;
    espera++;
    carta.classList.add("vira");
    contador = 0;
    const cartasViradas = document.querySelectorAll('.vira');
    if(cartasViradas[0].innerHTML===cartasViradas[1].innerHTML){
        cartasViradas[0].classList.add('cartasIguais');
        cartasViradas[1].classList.add('cartasIguais');
        cartasViradas[0].classList.remove('vira');
        cartasViradas[1].classList.remove('vira');
        quantidadeDeAcertos+=2;
        espera=0;
    }
    else{
        setTimeout(function(){cartasViradas[0].classList.remove("vira");}, 1000);
        setTimeout(function(){cartasViradas[1].classList.remove("vira");}, 1000);
        setTimeout(function(){espera=0;}, 1000);
    }
    if(Number(quantidadeDeAcertos)===Number(numCartas)){
        setTimeout(fimDoJogo, 500);
    }
}
function viraCarta(carta){
    if(espera!==0){
        return;
    }
    if(contador===0){
        primeiraCarta(carta);
    }
    else{
        segundaCarta(carta);
    }
}

function fimDoJogo(){
    clearInterval(cron);
    alert(`Você ganhou em ${numeroDeJogadas} jogadas! A duração do jogo foi de ${Number(segundoTempo)} segundos!`);
    let reiniciarJogo = prompt('Quer jogar novamente? sim ou não?');
    while((reiniciarJogo!=='sim')&&(reiniciarJogo!=='não')){
        reiniciarJogo = prompt('Quer jogar novamente? sim ou não?');
    }
    if(reiniciarJogo==='não'){
        return;
    }
    //Reinicia o jogo
    if(reiniciarJogo==='sim'){
        segundoTempo = 0;
        segundo.innerHTML = '00';
        const conteudoDoDom = document.querySelector('.container-principal').querySelectorAll('div');
        for(let indice=0;indice<conteudoDoDom.length;indice++){
            conteudoDoDom[indice].remove();
        }
        numeroDeCartas();
        contador=0;
        distribuiCartasAleatorias()
        contador = 0;
        espera = 0;
        numeroDeJogadas = 0;
        quantidadeDeAcertos = 0;
    }
}

//Implementação do bônus
//Timer
function start() {
    cron = setInterval(iniciaTimer, 1000);
  }
function iniciaTimer(){
    segundoTempo++;
    segundoTempo = Number(segundoTempo);
    segundo.innerHTML = `${segundoTempo}`;
}

function comparador() { 
	return Math.random() - 0.5; 
}