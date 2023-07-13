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

    formEValido = validaFormulario(campoA, campoB)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

