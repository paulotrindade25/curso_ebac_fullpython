const form = document.getElementById('formulario');
const varA = document.getElementById('variavelA');
const varB = document.getElementById('variavelB');

let validado = false; 

function maiorQueA ( numeroA, numeroB ){
    if ( numeroB > numeroA ){
        return validado = true ;
    }else{
        return validado = false; 
    }
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const mensagemValidacao = ` Parabéns o número B, ${varA.value} inserido é maior que o número A, ${varB.value} `;

    validado = maiorQueA(varA.value,varB.value);

    if(validado){

        const containerValidado = document.querySelector('.msg-sucesso');

        containerValidado.innerHTML =  mensagemValidacao;
        containerValidado.style.display = 'block';

        varA.value = '';
        varB.value = '';
    }else{
        varB.style.border = ' 1px solid red ';
        const msgInvalido = document.querySelector('.maior');
        msgInvalido.style.display = 'block';
    }
})

