let quantidadeDeJogosAlugados = 1;
function alterarStatus(id){ //função que recebe como parametro id HTML para escolha do jogo.
    let jogoEscolhido=document.getElementById(`game-${id}`);
    let imagem=jogoEscolhido.querySelector(".dashboard__item__img");
    let botao=jogoEscolhido.querySelector(".dashboard__item__button");  
    if(botao){//Condicional para mudança da classe CSS do botao e imagem
        botao.classList.toggle("dashboard__item__button--return");  //Usado função classlist.toggle para adicionar classes CSS  para alteraçao de visual do botao e imagem do jogo. 
        imagem.classList.toggle("dashboard__item__img--rented");
        if(botao.classList.contains("dashboard__item__button--return")){ //condicional que altera o texto do botão conforme mudança da classe do botao.
            if(confirm("Tem certeza que quer alugar este jogo?")){ //Condicional p/ Confirmação do usuario sobre a locação.
                botao.textContent="devolver"; //Alteração do texto do botao usando função textContent.
                quantidadeDeJogosAlugados++;
                console.log("Quantidade de jogos alugados: "+ quantidadeDeJogosAlugados); 
            }
            else{
                imagem.classList.toggle("dashboard__item__img--rented");
                botao.classList.toggle("dashboard__item__button--return");  //Retirando Classe CSS para alteração do visual caso o usuario não confirme a locação. 
            }
        }
        else{
            if(confirm("Tem certeza que quer devolver este jogo?")){    //Condicional p/ Confirmação do usuario sobre a devolução.  
                botao.textContent="Alugar";
                quantidadeDeJogosAlugados--;
                console.log("Quantidade de jogos alugados: "+ quantidadeDeJogosAlugados);
            }
            else{
                imagem.classList.toggle("dashboard__item__img--rented");
                botao.classList.toggle("dashboard__item__button--return");  //Retirando Classe CSS para alteração do visual caso o usuario não confirme a devolução. 
            }
        }       
    }
    else{
        return;
    }
}
