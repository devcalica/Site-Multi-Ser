document.addEventListener('DOMContentLoaded', function () {
    const botao = document.querySelector('.botao-acessibilidade');
    botao.addEventListener('click', function (event) {
      event.preventDefault();
      document.body.classList.toggle('contraste');
    });
  });
  