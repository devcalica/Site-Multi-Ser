//AGENDAR VISITA COM O BOTÃO DA INTRODUÇÃO//
document.getElementById("button-agendar").addEventListener("click", function () {
    const phoneNumber = "5571994044195"; // Número do WhatsApp sem "+" ou símbolos
    const message = "Olá! Gostaria de agendar uma visita."; // Mensagem padrão
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank"); // Abre em nova aba
  });




//ENVIO DO FORMULÁRIO//
document.getElementById("form-location").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Pega os dados dos campos
    const name = document.getElementById("name-form").value;
    const email = document.getElementById("email-form").value;
    const phone = document.getElementById("number-form").value;
    const date = document.getElementById("date-form").value;
    const obs = document.getElementById("obs-form").value;

    // Formata a mensagem
    const message = `Olá! Gostaria de enviar as seguintes informações:\n\n` +
        `📝 Nome: ${name}\n` +
        `📧 Email: ${email}\n` +
        `📱 Celular: ${phone}\n` +
        `📅 Data e Hora: ${date}\n` +
        `🗒️ Observações: ${obs}`;

    // Codifica e monta o link do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5571994044195"; // sem espaços, traços ou +
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp
    window.open(whatsappURL, "_blank");
});
