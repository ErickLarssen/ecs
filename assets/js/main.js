/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navFechar = document.getElementById('nav-fechar');

// Mostrar Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('mostrar-menu');
    });
}

// Menu Fechar
if (navFechar) {
    navFechar.addEventListener('click', () => {
        navMenu.classList.remove('mostrar-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('mostrar-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD SOMBRA NA HEADER ===============*/
const sombraHeader = () => {
    const header = document.querySelector('.header');
    this.scrollY >= 50 ? header.classList.add('sombra-header') : header.classList.remove('sombra-header');
};
window.addEventListener('scroll', sombraHeader);

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
