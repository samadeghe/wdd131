document.addEventListener("DOMContentLoaded", function () {
    // ===== NAVIGATION TOGGLE =====
    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", function () {
            siteNav.classList.toggle("open");
        });
    }

    // ===== DYNAMIC YEAR =====
    const yearSpans = document.querySelectorAll("[id^='year']");
    yearSpans.forEach(span => {
        span.textContent = new Date().getFullYear();
    });

    // ===== FORM SUBMISSION HANDLING =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const experience = document.getElementById('experience').value;
            const message = document.getElementById('messageField').value;

            // Store form data in localStorage
            localStorage.setItem('contactForm', JSON.stringify({ name, email, experience, message }));

            // Display success message
            document.getElementById('formStatus').textContent = 'Your message has been sent!';
            this.reset();
        });
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
});
