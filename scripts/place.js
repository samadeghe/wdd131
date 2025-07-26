document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill calculation for °C
function calculateWindChillC(tempC, speedKmh) {
    return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
    chill = `${calculateWindChillC(temp, wind)} °C`;
}

document.getElementById("chill").textContent = chill;
