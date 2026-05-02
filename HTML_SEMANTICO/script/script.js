// tema light / dark 
const root = document.documentElement;
const botao = document.querySelector("#btntema");

botao.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === "escuro";

    if (escuro) {
        root.removeAttribute("data-tema");
    } else {
        root.setAttribute("data-tema", "escuro");
    }
});