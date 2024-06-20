function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }

  function task2() {
   const prompt = require("prompt-sync")();
  // Type your code below this line!

  let ingresado1 = prompt("Ingresa un mensaje: ")
  let ingresado2 = prompt("Continua tu mensaje ")

  const newMail = new Mail( ingresado1, ingresado2 )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)

  }

  module.exports = task2;