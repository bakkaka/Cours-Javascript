function returnMsgScore(score, nbMax){
let message = "Le score est de " + score + "sur " + nbMax
return message

}
let returnMessage = returnMsgScore(1, 6)
console.log(returnMessage)