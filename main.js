const navLinks = document.querySelectorAll('.nav__item');
const windowPath = window.location.pathname;

navLinks.forEach(navLink => {
    const navLinkPath = new URL(navLink.href).pathname;

    if (windowPath == navLinkPath) {
        navLink.classList.add('active');
    }
});