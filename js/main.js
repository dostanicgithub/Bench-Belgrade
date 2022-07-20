// Menu close on link click
const navbarNav = document.getElementById('navbarNav'); 
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navbarNav.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal
const sr = ScrollReveal({
    distance: '100px',
    duration: 2500,
    delay: 300
});

sr.reveal('.about-image-first', {origin: 'left'});
sr.reveal('.about-image-second', {origin: 'right', duration: 3000, delay: 400});
sr.reveal('.sponsor', {origin: 'top', distance: '30px', interval: 200});
sr.reveal('.card-graphic', {origin: 'top', distance: '50px', interval: 300});