function viraCarta(carta){
    const aux = carta.querySelector(".card");
    aux.classList.add("vira");
    setTimeout(function(){aux.classList.remove("vira");}, 1000);
}
