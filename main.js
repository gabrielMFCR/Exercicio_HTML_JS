const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
});


function validarFormulario() {
    var campoA = parseInt(document.getElementById("num-a").value);
    var campoB = parseInt(document.getElementById("num-b").value);
    var mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.innerHTML = "Formulário válido";
        mensagem.className = "valido";
        return true;
    } else {
        mensagem.innerHTML = "Formulário inválido! O valor do número B deve ser maior que o número A.";
        mensagem.className = "invalido";
        return false;

    }
}