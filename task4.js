// Type your code below this line!

function Journey(start,end) {
    this.from = start
    this.to = end
}

// Type your code above this line!
function task4() {
const prompt = require("prompt-sync")();
// Type your code below this line!

const from = prompt("Ingrese su punto de inicio: ")
const to = prompt("Ingrese su punto de llegada: ")


// Type your code above this line!

const travel = new Journey(from, to )

console.log(`Booking a taxi from ${travel.from} to ${travel.to}.`)

}

module.exports = task4;