$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true,
        arrow: true
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '12345-6789'
    })

    $('#cpf').mask('000.000.000-0', {
        placeholder: '1234.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    })

    $('form').validate({
        rules:{
            nome:{
                requerid: true
            },
            email: {
                requerid: true, 
                email: true
            },
            telefone: {
                requerid: true
            },
            endereco: {
                requerid: true
            },
            cep: {
                requerid: true
            },
            cpf: {
                requerid: true
            },
        },
        submitHandler: function (form){
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(form, validator){
            alert("Por faavor, preencha os campos para prosseguir com a compra!");
        }
    })
})