const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeButton = document.querySelector('.close-button');
const openMenu = (e) => {
    hamburgerMenu.classList.add("show-menu");
    hamburgerMenu.classList.remove("invisible");
    hamburgerMenu.classList.remove("hidden");
}
const closeMenu = (e) => {
    e.preventDefault()
    hamburgerMenu.classList.remove("show-menu");
    hamburgerMenu.classList.add("invisible");
    hamburgerMenu.classList.add("hidden");
}
hamburgerButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)
document.querySelectorAll('section').forEach((sec) => {
    sec.addEventListener('click', closeMenu)
})

