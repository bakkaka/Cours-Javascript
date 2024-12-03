const listMots = ["Pomme", "Bannane", "Orange"]
let score = 0

for(let i = 0; i < listMots.length; i++){
    let motUser = prompt("Entrer le mot :" + listMots[i])
	if(motUser === listMots[i]){
	score++
	}
}
console.log("Votre score est " + score +" sur 3")
console.log("Votre score est " + score +" sur " + listMots.length)
