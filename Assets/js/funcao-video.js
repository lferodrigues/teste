// Obtém todos os itens da lista de vídeos
const videoListItems = document.querySelectorAll('.video-list li');

// Função para alterar o vídeo principal e destacar o vídeo selecionado
function changeVideo(videoUrl) {
    // Atualiza o iframe do player
    const player = document.querySelector('.player iframe');
    if (player) {
        player.src = videoUrl;
    }

    // Remove a classe 'selected' de todos os itens
    videoListItems.forEach(item => item.classList.remove('selected'));

    // Adiciona a classe 'selected' ao item clicado
    const clickedItem = Array.from(videoListItems).find(
        item => item.getAttribute('onclick')?.includes(videoUrl)
    );

    if (clickedItem) {
        clickedItem.classList.add('selected');
    }
}

// Marca o primeiro vídeo como selecionado ao carregar a página
function initializeFirstVideo() {
    if (videoListItems.length > 0) {
        const firstVideoItem = videoListItems[0];
        const firstVideoUrl = firstVideoItem.getAttribute('onclick').match(/'(.*?)'/)[1];

        // Reproduz o primeiro vídeo e aplica a classe 'selected'
        changeVideo(firstVideoUrl);
    }
}

// Inicializa o comportamento da lista ao carregar a página
window.addEventListener('DOMContentLoaded', initializeFirstVideo);
