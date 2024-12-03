const maPersonne = {
   nom: "Mostafaoui",
   prenom: "Abdelaziz",
   age: 58

}

//console.log(maPersonne)
maPersonne.surnom = "leimen"
console.log(maPersonne.surnom)
console.log(maPersonne)
//Bonjour NOM ton surnom est SURNOM ton age est AGE

//Bonjour NOM ton age est AGE ton age est AGE ton surnom et SURNOM
let afficherText = "Bonjour " + maPersonne.nom + "votre prenom est "
+ maPersonne.prenom + "et votre age est " + maPersonne.age + "et pardon ton surnom est " + maPersonne.surnom
console.log(afficherText)