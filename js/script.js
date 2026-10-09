function verificarHabitos() {
    let habitos = document.querySelectorAll(".habito");
    let quantidade = 0;

    for (let i = 0; i < habitos.length; i++) {
        if (habitos[i].checked) {
            quantidade++;
        }
    }

    let resultado = document.getElementById("resultado");

    if (quantidade >= 3) {
        resultado.innerHTML = "Parabéns! Você está cuidando bem da sua rotina.";
    } else {
        resultado.innerHTML = "Atenção! Você pode melhorar alguns hábitos.";
    }
}

let botaoTema = document.getElementById("botaoTema");

botaoTema.onclick = function() {
    document.body.classList.toggle("escuro");
};