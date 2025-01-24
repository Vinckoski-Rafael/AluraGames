function alterarStatus(id){
    let jogoEscolhido=document.getElementById(`game-${id}`);
    let imagem=jogoEscolhido.querySelector(".dashboard__item__img");
    let botao=jogoEscolhido.querySelector(".dashboard__item__button");

    if(imagem){
        imagem.classList.toggle("dashboard__item__img--rented");
    }
    
    if(botao){
        botao.classList.toggle("dashboard__item__button--return");
        if(botao.classList.contains("dashboard__item__button--return")){
            botao.textContent="devolver";
        }
        else{
            botao.textContent="Alugar";
        }       
    }
    else{
        return;
    }
}