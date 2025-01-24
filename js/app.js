function alterarStatus(id){
    let jogoEscolhido=document.getElementById(`game-${id}`);
    let imagem=jogoEscolhido.querySelector(".dashboard__item__img");
    let botao=jogoEscolhido.querySelector(".dashboard__item__button");

    if(imagem){
    imagem.classList.toggle("dashboard__item__img--rented");
    }
    else{
        return;
    }
}