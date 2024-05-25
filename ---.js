document.getElementById('create-ad-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    saveAd(title, description);
    alert('Anúncio criado com sucesso!');
    window.location.href = 'index.html'; // Redirecionar de volta para a página inicial
});

function saveAd(title, description) {
    // Aqui você pode salvar os dados do anúncio em um banco de dados ou em outro local de armazenamento
}
