const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-59768.jpg"
    },  
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5988.jpg"
    },
    {
        templeName: "Toronto Ontario",
        location: "Brampton, Ontario, Canada",
        dedicated: "1990, August, 25",
        area: 55558,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469.jpg"
    },  
    
];

const container = document.getElementById("templesContainer");

function displayTemples(templesArray) {
    container.innerHTML = "";
    templesArray.forEach(t => {
        const section = document.createElement("section");
        section.classList.add("temple-card");

        section.innerHTML = `
      <h2>${t.templeName}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;
        container.appendChild(section);
    });
}

function filterTemples(criteria) {
    let filtered = [];
    switch (criteria) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    displayTemples(filtered);
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = link.dataset.filter;
        filterTemples(filter);
    });
});

// Hamburger toggle
document.getElementById("hamburger").addEventListener("click", () => {
    const nav = document.getElementById("mainnav");
    nav.classList.toggle("open");
    hamburger.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Footer update
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial load
displayTemples(temples);
