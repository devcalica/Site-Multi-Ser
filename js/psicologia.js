document.addEventListener('DOMContentLoaded', function() {
    const secaoPsicologia = document.querySelector('.psicologia');
    const botoesPsicologia = secaoPsicologia.querySelectorAll('.botao-circular');
    const conteudosPsicologia = secaoPsicologia.querySelectorAll('.psicologia-conteudo');

    botoesPsicologia.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe ativo de todos os botões e conteúdos desta seção
            botoesPsicologia.forEach(b => b.classList.remove('ativo'));
            conteudosPsicologia.forEach(c => c.classList.remove('ativo'));

            // Adiciona a classe ativo ao botão clicado e ao conteúdo correspondente
            botao.classList.add('ativo');
            const conteudoId = botao.getAttribute('data-slide');
            secaoPsicologia.querySelector(`#${conteudoId}`).classList.add('ativo');
        });
    });
}); 