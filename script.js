document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const navMenu = document.getElementById('nav-menu');

    toggleButton.addEventListener('click', function() {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});

function toggleMenu() {
    // Add functionality to open/close the menu
    const menu = document.querySelector('nav ul'); // Assuming the menu is a <ul> inside a <nav>
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
