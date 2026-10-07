$(document).ready(function(){
    
    let expandido = true;
    $('#expandir').click(function(){
        if(expandido){
            $('#tarefas').slideUp();
            expandido = false;
        }else{
            $('#tarefas').slideDown();
            expandido = true;
        }
    });

    $('#botao-cancelar').click(function(){
        $('#tarefa-name').val(' ');
        $('#tarefas').slideUp();
    })

    function atualizarTarefasPendentes() {
        const lista = $('#tarefa-pendentes');
        if (lista.children('li').length === 0 ){
            lista.html('<li class="pendentes"> Sem Tarefas </li>');
        }
    }

    function atualizarTarefaConcluidas () {
        const lista = $('#tarefa-feita');
        if(lista.children('li').length === 0){
            lista.html('<li class="concluidas"> Sem Tarefas Concluidas</li>');
        }
    }


    const btn_adicionar = '<button class="concluirrr" id="botao-adicionar" type="click"> concluida </button>';
    const btn_excluir = '<button class="excluir" id="botao-cancelar" type="reset"> excluir </button>';

    $('form').on('submit', function(e){

        e.preventDefault();
        const novaTarefa = $(`#tarefa-name`).val();

        $('#tarefas').slideDown();

        if(novaTarefa.trim() !== ''){
            
            const pendentesTarefa = $('<li>');
            $(`<p class="novaTarefa"> ${novaTarefa}</p>`).appendTo(pendentesTarefa);
            $(btn_adicionar).appendTo(pendentesTarefa);
            $(btn_excluir).appendTo(pendentesTarefa);
            $(pendentesTarefa).appendTo('#tarefa-pendentes');
            $(pendentesTarefa).fadeIn(2000);
            $('.pendentes').remove();
            $('#tarefa-name').val('');
        }
    });
    
    $('#tarefa-pendentes').on('click', '.concluirrr', function(){

        const itemC = $(this).closest('li');
        const texto = itemC.find('.novaTarefa').text();
        itemC.remove(); // remove da div tarefa pendentes

        const novaConcluidas = $('<li>');
        novaConcluidas.append(`<p class="terminadas" >${texto}</p>`);
        novaConcluidas.append(btn_excluir);
        $('#tarefa-feita').append(novaConcluidas);
        novaConcluidas.fadeIn(2000);
        $('.concluidas').remove();
        atualizarTarefasPendentes();
    } );

    $('#tarefa-pendentes').on('click','.excluir', function(){
        $(this).closest('li').remove();
        atualizarTarefasPendentes();
    })

    $('#tarefa-feita').on('click', '.excluir', function(){
        $(this).closest('li').remove();
        atualizarTarefaConcluidas();
    });
    
});

