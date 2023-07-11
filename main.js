const form = document.getElementById('form-formulario');
var campoA = parseFloat(document.getElementById('valorA').value);
var campoB = parseFloat(document.getElementById('valorB').value);
let formEValido = false;

function validaFormulario(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    var campoA = document.getElementById('valorA').value;
    var campoB = document.getElementById('valorB').value;
    const mensagemSucesso = `Está correto, o valor B: <b>${valorB}</b> é maior que o valor A: <b>${valorA}</b>`;

    form = validarFormulario(campoA, campoB)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.computedStyleMap.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoA.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaFormulario(e.target.value);

    if (!formEValido) {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})
