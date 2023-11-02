const inquirer = require('inquirer');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');

// Function to prompt the user for shape, shape color, text, and text color
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
      message: 'Enter a color for the shape:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 letters:',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to 3 letters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the text:',
    },
  ]);
  return answers;
}

// Function to create and render the selected shape with text and text color
function createAndRenderShape(shape, color, text, textColor) {
  let selectedShape;

  switch (shape) {
    case 'Triangle':
      selectedShape = new Triangle();
      break;
    case 'Circle':
      selectedShape = new Circle();
      break;
    case 'Square':
      selectedShape = new Square();
      break;
    default:
      console.log('Invalid shape selected.');
      return;
  }

  selectedShape.setColor(color);
  selectedShape.setText(text);
  selectedShape.setTextColor(textColor);

  return selectedShape.render();
}

// Main function to run the program
async function main() {
  console.log('Welcome to the Shape Renderer');
  const userInput = await getUserInput();
  const svgString = createAndRenderShape(
    userInput.shape,
    userInput.color,
    userInput.text,
    userInput.textColor
  );

  if (svgString) {
    // Save the SVG to a file
    fs.writeFileSync('output.svg', svgString);
    console.log('SVG file saved as "output.svg".');
  }
}

main();
