const inquirer = require('inquirer')
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
//import { Shape, Triangle, Circle, Square } from './lib/shapes.js'

//fs write file


// Function to prompt the user for shape and color
async function getUserInput() {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter a color:',
      },
    ]);
    return answers;
}

getUserInput();