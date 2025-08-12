// main.js

document.addEventListener("DOMContentLoaded", function () {
    // ===== NAVIGATION TOGGLE =====
    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", function () {
            siteNav.classList.toggle("open");
        });
    }

    // ===== HERO IMAGE LOADING =====
    const heroImg = document.querySelector(".hero-img");
    if (heroImg) {
        // Optional: Handle any dynamic hero image changes here if needed
        console.log("Hero image loaded:", heroImg.src);
    }

    // ===== DYNAMIC YEAR & LAST MODIFIED =====
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById("lastmodified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // ===== PLACEHOLDER: ADD ANY OTHER PAGE-SPECIFIC SCRIPTS BELOW =====
    // Example: Chart interactions, resource filtering, contact form validation, etc.
});
