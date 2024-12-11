const numeroUsuario = document.querySelector('#numeroUsuario');
const btnTabuada = document.querySelector('#btnTabuada');
const Resultado = document.querySelector('#Resultado');

function calcularTabuada() {
    const numero = parseInt(numeroUsuario.value);
    Resultado.innerHTML = '';

    if (isNaN(numero)) {
        Resultado.innerHTML = 'Por favor, ingresa um número válido.';
        return;
    }

    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    Resultado.innerHTML = resultado;
}

btnTabuada.addEventListener('click', calcularTabuada);