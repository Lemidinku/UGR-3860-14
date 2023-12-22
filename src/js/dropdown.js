const menuButton = document.querySelector('.relative button');
const dropdownMenu = document.querySelector('.absolute');

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});