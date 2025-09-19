document.getElementById('index.html');addEventListener('submit', function(event) {

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;
    
    const mensagemParaWhatsApp = `Nome: ${encodeURIComponent(nome)}\nComentario: ${encodeURIComponent(comentario)}`;
    const numeroWhatsApp = '5548998419856';
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemParaWhatsApp)}`;

    window.open(url, '_blank');
});

