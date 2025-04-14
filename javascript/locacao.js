//ENVIO DO FORMULÁRIO//

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-location").addEventListener("submit", function(e) {
        e.preventDefault(); 

        // Captura os dados do formulário
        const name = document.getElementById("name-form").value;
        const email = document.getElementById("email-form").value;
        const phone = document.getElementById("number-form").value;
        const date = document.getElementById("date-form").value;
        const obs = document.getElementById("obs-form").value;

        const destinatario = "5571994044195"; 

        // Organiza a mensagem com os valores
        const mensagem = `Olá! Gostaria de agendar uma visita:\n\n` +
            `*Nome:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Celular:* ${phone}\n` +
            `*Data da Visita:* ${new Date(date).toLocaleString('pt-BR')}\n` +
            `*Observações:* ${obs}`;

        const mensagemCodificada = encodeURIComponent(mensagem);

        const url = `https://wa.me/${destinatario}?text=${mensagemCodificada}`;

        window.open(url, "_blank");
    });
});
