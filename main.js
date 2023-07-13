const form = document.getElementById('form-formulario');
let formEValido = false;

function validaFormulario(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    const mensagemSucesso = `Está correto, o valor B: <b>${campoB}</b> é maior que o valor A: <b>${campoA}</b>`;
    const mensagemError = `O valor A: <b>${campoA}</b> é maior que o valor B: <b>${campoB}</b> tente de novo`;

    formEValido = validaFormulario(campoA, campoB)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
    }
})

