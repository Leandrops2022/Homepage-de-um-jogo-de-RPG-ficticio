let botao = document.querySelector("#botao");
let menu = document.querySelector(".navegacao");
let textoLogin = document.querySelector(".textoLogin");
let ativo = false;

function mostraMenu() {
    if (ativo) {
        ativo = false;
        menu.style.height = "0vh";
        

    }else {
        
        ativo = true;
        menu.style.height = "35vh";
    }
}

botao.addEventListener("click", mostraMenu)
