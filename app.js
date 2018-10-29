const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));

const chalkAnimation = require('chalk-animation');
 
chalkAnimation.rainbow('Lorem ipsum dolor sit amet');

let str = 'Loading...';

const glitch= chalkAnimation.neon(str);

setInterval(() => {
    glitch.replace(str+= '.');
}, 1000)
 
// Add a new dot every second
