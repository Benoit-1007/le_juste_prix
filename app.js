// Etape 1 - Sélectionner nos éléments
let input      = document.querySelector('#prix');
let error      = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let newGame = document.querySelector('.newGame');

// Etape 2 - Cacher l'erreur et le bouton rejouer
error.style.display = 'none';
newGame.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random()*1001);
let coups           = 0;
let nombreChoisi;

console.log("🚀 ~ file: app.js ~ line 11 ~ nombreAleatoire", nombreAleatoire)

// Etape 6 - Créer la fonction vérifier
function verifier(nombre){
    let instructions = document.querySelector('#instructions');
    let instruction = document.createElement('div');

    instructions.prepend(instruction); 

    if(nombre < nombreAleatoire) {
        // Ajouter un contenu '#1 (nombre) C'est plus !'
        instruction.textContent = `#${coups} (${nombre}) C'est plus !`;
        instruction.classList.add('instruction', 'plus');
    }
    else if(nombre > nombreAleatoire) {
        // Ajouter un contenu '#1 (nombre) C'est moins !'
        instruction.textContent = `#${coups} (${nombre}) C'est moins !`;
        instruction.className = 'instruction moins';
    } else {
        // Ajouter un contenu '#1 (nombre) Félicitations, vous avez trouvé le juste prix !'
        instruction.textContent = `#${coups} (${nombre}) Félicitations, vous avez trouvé le juste prix !`;
        instruction.classList.add('instruction', 'fini');
        input.disabled = 'true';
        
        newGame.style.display = 'block'
    }

}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',() => {
    if(isNaN(input.value) || input.value > 1000) {
        error.style.display = 'initial';
    }
    else {
        error.style.display = 'none';
        input.style.border = 'none';
    }
})

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(isNaN(input.value) || input.value == '' || input.value > 1000) {
        input.style.border = '2px solid red';
        error.style.display = 'initial';
    }
    else {
        coups++;
        input.style.border = '2px solid silver';
        error.style.display = 'none';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
})

// Etape 6 - Créer la fonction vérifier
