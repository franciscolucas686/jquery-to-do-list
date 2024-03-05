$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li class ="nao-finalizado">${novaTarefa}</li>`);

        $(novoItem).appendTo('ul');
        $('#nome-tarefa').val('');

    });
    $('ul').click('li', function () {
        $(this).toggleClass('finalizado')
    });
});