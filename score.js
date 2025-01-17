// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Pomme', 'Bannane', 'Orange']
let score = 0

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUser = prompt('Entrez le mot : ' + listeMots[0])

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (motUser === listeMots[0]) {
    score++
}

// Idem avec le second mot du tableau
// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
motUser = prompt('Entrez le mot : ' + listeMots[1])
if (motUser === listeMots[1]) {
    score++
}

// Idem avec le troisième mot du tableau
motUser = prompt('Entrez le mot : ' + listeMots[2])
if (motUser === listeMots[2]) {
    score++
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")