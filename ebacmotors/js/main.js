$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true,
        arrow: true
    })

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-0')

    $('#cep').mask('00000-000')

    $('#form').validate({
        rules:{
            nome:{
                requerid: true
            },
            email: {
                requerid: true, 
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
            endereco: {
                requerid: true
            }
        },

        messages: {
            nome: 'por favor, digite seu nome completo',
            email: 'por favor, digite seu email',
            telefone: 'por favor, digite seu telefone',
            endereco: 'por favor, digite seu endereço',
            cep: 'por favor, digite sue cep',
            cpf: 'por favor, digite seu cpf'
        },
        submitHandler: function (form){
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(form, validator){
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})