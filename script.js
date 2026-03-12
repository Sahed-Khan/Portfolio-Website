// ------------------------------
// Menu Hamburger Toggle
// ------------------------------
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // change l'icône
    navbar.classList.toggle('active'); // montre ou cache le menu
});

// ------------------------------
// Scroll Sections Active Link
// ------------------------------
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // décalage pour header
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Sticky Header
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// ------------------------------
// Multiple Text Type Animation
// ------------------------------
const multipleText = document.querySelector('.multiple-text');
const words = ['Computer Science Student', 'Network Enthusiast', 'Cybersecurity Learner'];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 100;
let newWordDelay = 2000;

function type() {
    if(charIndex < words[wordIndex].length) {
        multipleText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        multipleText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        wordIndex++;
        if(wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(words.length) setTimeout(type, newWordDelay);
});