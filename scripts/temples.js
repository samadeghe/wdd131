
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainnav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Set current year in footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Set last modified date in footer
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;
