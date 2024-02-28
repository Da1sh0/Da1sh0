document.addEventListener('DOMContentLoaded', function () {
    // Muestra la pantalla de carga al inicio
    var loader = document.querySelector('.loader');
    loader.style.display = 'flex';

    // Oculta la pantalla de carga después de 5 segundos
    setTimeout(function () {
        loader.style.display = 'none';
    }, 1000); // 5000 milisegundos = 5 segundos
});