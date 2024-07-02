let bericht = "Press on one of the ice creams to choose a different flavor!"
//Hier wordt variabele 'bericht' gedefinieerd

let kop = document.querySelector("h1")
//Hier wordt variabele 'kop' gedefinieerd. Hij selecteert het eerste <h1> element
const button = document.querySelector("button")

function verandertitel() {
kop.textContent = bericht
} //Een function om de titel te veranderen, pas laten uitvoeren als er op de button wordt geklikt

button.addEventListener("click", verandertitel)
//de button een klik functie geven, functie word uitgevoerd als er op de knop word geklikt


const colors = ['#FF6387', '#FFD730', '#ADFF4F', '#40E1D0', '#FF69B4', '#BA45D3'];
//een verzameling van kleuren die de afbeeldingen veranderen

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const iceCreams = document.querySelectorAll('.ice-cream');

iceCreams.forEach(iceCream => {
    iceCream.addEventListener('click', () => {
        iceCream.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    });
});
// comment, meer code, bronvermelding, in de les niet behandelde functie


const iceCreamName = document.getElementById('ice-cream-name');
// Selecteer het element waar de naam van het ijsje zal worden weergegeven.

iceCreams.forEach(iceCream => {
    iceCream.addEventListener('click', () => {
        const name = iceCream.getAttribute('data-name');
        iceCreamName.textContent = `Je hebt gekozen voor een ${name}`;
    });
});
// Voeg een event listener toe aan elk ijsje. Wanneer een ijsje wordt geklikt, haalt deze de waarde van het 'data-name' attribuut op
// en stelt deze in als de tekstinhoud van het 'ice-cream-name' element.