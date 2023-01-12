const gifs =['./img/bobrossparrot.gif','./img/explodyparrot.gif','./img/fiestaparrot.gif','./img/metalparrot.gif','./img/revertitparrot.gif','./img/tripletsparrot.gif','./img/unicornparrot.gif']; 
gifs.sort(comparador);
let numCartas;

//Começo do jogo

numeroDeCartas();
function numeroDeCartas(){
    numCartas = prompt("Com quantas cartas você quer jogar?");
    Number(numCartas);
    if(numCartas<4||(numCartas%2)!==0||numCartas>14){
        alert("Você deve escolher um número par entre 4 e 14!");
        numeroDeCartas();
    }
}

//Distribuição aleatória das cartas de acordo o número escolhido

const containerPrincipal = document.querySelector(".container-principal");
const cartasDistribuidas=[];
let contador=0;
let gifAdicionado;
while(contador<(numCartas)){
    if(contador%2===0){
        gifAdicionado=contador/2;
    }else{
        gifAdicionado=(contador-1)/2;
    }
    
    const cartaAdicionadaNoDom = `<div onclick="viraCarta(this)" class="card">
        <div class="front-face face">
            <img src="./img/back.png" alt="Imagem de um papagaio">
        </div>
        <div class="back-face face">
            <img src="${gifs[gifAdicionado]}" alt="Imagem de um papagaio">
        </div>
    </div>`
    cartasDistribuidas.push(cartaAdicionadaNoDom);
    contador++;
}
cartasDistribuidas.sort(comparador);
contador=0;
while(contador<cartasDistribuidas.length){
    containerPrincipal.innerHTML+=cartasDistribuidas[contador];
    contador++;
}

//Virando as cartas

contador=0;
let espera = 0;
function primeiraCarta(carta){
    carta.classList.add("vira");
    contador++;
}
function segundaCarta(carta){
    espera++;
    carta.classList.add("vira");
    contador = 0;
    const cartasViradas = document.querySelectorAll('.vira');
    console.log(cartasViradas);
    if(cartasViradas[0].innerHTML===cartasViradas[1].innerHTML){
        console.log('São Iguais');
        cartasViradas[0].classList.add('cartasIguais');
        cartasViradas[1].classList.add('cartasIguais');
        cartasViradas[0].classList.remove('vira');
        cartasViradas[1].classList.remove('vira');
        espera=0;
    }
    else{
        setTimeout(function(){cartasViradas[0].classList.remove("vira");}, 1000);
        setTimeout(function(){cartasViradas[1].classList.remove("vira");}, 1000);
        setTimeout(function(){espera=0;}, 1000);
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
//function viraCarta(carta){
  //  carta.classList.add("vira");
   // setTimeout(function(){carta.classList.remove("vira");}, 2000);
//}








function comparador() { 
	return Math.random() - 0.5; 
}