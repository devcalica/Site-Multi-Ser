document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.botao-circular');
    const conteudos = document.querySelectorAll('.psicologia-conteudo');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe ativo de todos os botões e conteúdos
            botoes.forEach(b => b.classList.remove('ativo'));
            conteudos.forEach(c => c.classList.remove('ativo'));

            // Adiciona a classe ativo ao botão clicado e ao conteúdo correspondente
            botao.classList.add('ativo');
            const conteudoId = botao.getAttribute('data-slide');
            document.getElementById(conteudoId).classList.add('ativo');
        });
    });
}); 