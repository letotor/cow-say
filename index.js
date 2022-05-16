const info= require('./information')
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `🤜 Hello I'm ${info.name} 👀 from ${info.campus} 🤙 👌 `,
    e : "oO",
    T : "U "
}));