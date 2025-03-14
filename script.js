document.getElementById('showMessageButton').addEventListener('click', function() {
    // Esconde o botão
    this.style.display = 'none';

    // Mostra a mensagem ocupando toda a tela
    const messageDiv = document.getElementById('message');
    messageDiv.style.visibility = 'visible';
    messageDiv.style.opacity = '1';
});
