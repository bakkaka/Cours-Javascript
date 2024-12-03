const listMots = ["Pomme", "Bannane", "Orange"]
const listPhrases = ["Un cafe", "Un the", "Un jux"]
let score = 0

let choix = prompt("Veuillez choisir : mots ou phrases")
while(choix !== "mots" && choix !== "phrases" ){
	choix = prompt("Veuillez choisir : mots ou phrases")
}
  if(choix === "mots"){
  for(let i = 0; i < listMots.length; i++){
    let motUser = prompt("Entrer le mot :" + listMots[i])
	if(motUser === listMots[i]){
	score++
	}
	console.log("Votre score est " + score +" sur " + listMots.length)
}
}else {
for(let i = 0; i < listPhrases.length; i++){
    let motUser = prompt("Entrer la phrase :" + listPhrases[i])
	if(motUser === listPhrases[i]){
	score++
	}
}
console.log("Votre score est " + score +" sur " + listPhrases.length)
}

