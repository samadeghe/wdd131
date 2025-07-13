// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mainnav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");

    // Toggle hamburger icon between ☰ and ✖
    if (nav.classList.contains("open")) {
        hamburger.textContent = "✖"; // Close icon
    } else {
        hamburger.textContent = "☰"; // Hamburger icon
    }
});

// Footer dynamic date updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
