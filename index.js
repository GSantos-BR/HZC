const botaomenu = document.querySelector('.header__menu')
const menu = document.querySelector('.menu-lateral')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})