<-----------------------------------Premiere condition------------------------>
let mot = true
if(mot){
      console.log("Bravo")
}else {
	console.log("Faux")
}

<---------------------------------------Deuxiemen condition------------------------------------>
let motApp = "Bonjour"
 
 let motUser = prompt("Entrer le mot " + motApp)
   if(motUser === motApp){
	   console.log("Bravo")
   }else {
	   console.log("Faux")
   }
   
<----------------------------------------Troisieme condition--------------------------------------->
 const motApp = "Bonjour"
 const motUser = prompt("Entrer un mot " + motApp)
    if(motUser === "motApp"){
		console.log("Bravo")
	}else{
		if(motUser === "Gredin"){
			console.log("Restez correct")	
			}
		else{
			if(motUser === "Feneant"){
				console.log("Soyez serieux")
		}else{
			if(motUser == "Gredin"){
				console.log("Soyer gentil")
			}else{
				console.log("Vous avez fait une erreur de frappe")
			}
		}
	}
	}
<---------------------------------Break------------------------------------------>
  const motApp = "Bonjour"
 const motUser = prompt("Entrer un mot " + motApp)
 switch (motUser) {
    case motApp:
        console.log("Bravo !")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Soyer serieux !")
        break
    case "Vilain":
        console.log("Un peut de tenue !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}