const toggButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggButton.addEventListener('click', function () {
    menu.classList.toggle('show');
});