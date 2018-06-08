var chalk = require("chalk");

var message = "Hello " + chalk.magenta.bold.bgBlack("World");
console.log(message);