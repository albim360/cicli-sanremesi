console.log("hello Sanremo!")

const artists = [
    "Anna Oxa",
    "Gianmaria",
    "Mr Rain",
    "Marco Mengoni",
    "Ariete",
    "Ultimo",
    "Coma Cose",
    "Elodie",
    "Leo Gassmann",
    "Cugini di Campagna",
    "Gianluca Grignani",
    "Olly",
    "Colla Zio e Mara Sattei",
    "Will",
    "Modà",
    "Sethu",
    "Articolo 31",
    "Lazza",
    "Giorgia",
    "Colapesce e Dimartino",
    "Shari, Madame",
    "Levante",
    "Tananai",
    "Rosa Chemical",
    "LDA",
    "Paola e Chiara"
]

let userInput = prompt('Scrivi un cantante');
let risultato = ''
let found = false

for (let i = 0; i < artists.length; i++) {

    if (userInput === artists[i]) {
        risultato = 'Hai vinto'
        found = true
    }
}

if (!found) {
    risultato = 'Hai perso'
}

console.log(risultato)
