const sideBar = document.querySelector('.aside')
const menu = document.querySelector('#burger-menu')
const close = document.querySelector('#close-button')

function openMenu() {
  sideBar.style.left = '0px'
}

function closeMenu() {
  sideBar.style.left = '-306px'
}

menu.addEventListener('click', openMenu)

close.addEventListener('click', closeMenu)