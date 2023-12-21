

const Menu = document.querySelector('.menu-lis');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    Menu.classList.toggle("active");
}