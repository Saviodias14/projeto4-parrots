const gifs =['./img/bobrossparrot.gif','./img/explodyparrot.gif','./img/fiestaparrot.gif','./img/metalparrot.gif','./img/revertitparrot.gif','./img/tripletsparrot.gif','./img/unicornparrot.gif']; 
let numCartas;
numeroDeCartas();
function numeroDeCartas(){
    numCartas = prompt("Com quantas cartas você quer jogar?");
    Number(numCartas);
    if(numCartas<4||(numCartas%2)!==0||numCartas>14){
        alert("Você deve escolher um número par entre 4 e 14!");
        numeroDeCartas();
    }
}
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
    containerPrincipal.innerHTML+=cartaAdicionadaNoDom;
    cartasDistribuidas.push(cartaAdicionadaNoDom);
    contador++;
    console.log(cartaAdicionadaNoDom);
}
function viraCarta(carta){
    carta.classList.add("vira");
    setTimeout(function(){carta.classList.remove("vira");}, 2000);
}
