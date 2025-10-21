const envelope = document.getElementById('envelope');
const openButton = document.getElementById('openButton');

openButton.addEventListener('click', () => {
    envelope.classList.toggle('open');
    openButton.textContent =
        envelope.classList.contains('open') ? 'Cerrar Carta' : 'Abrir Carta';
});
