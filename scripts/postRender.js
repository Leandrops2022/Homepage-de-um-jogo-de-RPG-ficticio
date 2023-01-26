const tela = window.matchMedia("(max-width: 480px)");

document.body.onscroll = function escondeMenu() {
    if (tela.matches) {
        ativo = false;
        menu.style.height = "0vh";
    }
}        

