
//  Password generator :

    let pswGenerate = document.getElementById("pswGenerate")
    let pswCopy = document.getElementById("pswCopy")

    let pswLength = document.getElementById("pswLength")
    let pswUpper = document.getElementById("pswUpper")
    let pswLower = document.getElementById("pswLower")
    let pswNumber = document.getElementById("pswNumber")
    let pswSymbole = document.getElementById("pswSymbole")

    let GeneratePassword = document.getElementById("GeneratePassword")

// Logique :

function RandowPswNumber(characters){
    const numbers = '0123456789';
    characters =  characters += numbers
}

function RandomPswSymbole(characters){
    const symbole ='$%@é#&§()'
    characters = characters += symbole
}

function RandomPsw(length) {
    let result = '';
    let characters = '';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '$%@é#&§()';

    // Ajout obligatoire d'au moins un caractère pour chaque option cochée
    if (pswUpper.checked) {
        result += letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        characters += letters.toUpperCase();
    }

    if (pswLower.checked) {
        result += letters[Math.floor(Math.random() * letters.length)];
        characters += letters;
    }

    if (pswNumber.checked) {
        result += numbers[Math.floor(Math.random() * numbers.length)];
        characters += numbers;
    }

    if (pswSymbole.checked) {
        result += symbols[Math.floor(Math.random() * symbols.length)];
        characters += symbols;
    }

    // Compléter le mot de passe jusqu'à la longueur demandée
    for (let i = result.length; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }

    // Mélanger les caractères du mot de passe pour éviter un ordre prévisible
    result = result.split('').sort(() => Math.random() - 0.5).join('');

    return result;
}

GeneratePassword.addEventListener("click", () => {
    const length = pswLength.value; // Récupérer la longueur spécifiée
    const password = RandomPsw(length); // Générer le mot de passe
    pswGenerate.innerText = password; // Afficher le mot de passe généré
});

// Copy :

function copyClipboard() {
    navigator.clipboard.writeText(pswGenerate.innerText)
        .then(() => {
            alert("Copied the text: " + pswGenerate.innerText);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy text");
        });
}

pswCopy.addEventListener("click", copyClipboard);

