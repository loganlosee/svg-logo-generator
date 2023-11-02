const { Shape, Triangle, Circle, Square } = require('./shapes');

test('Render Triangle with specified color and text', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  shape.setText('ABC');
  shape.setTextColor('red');

  // The entire expected SVG code, including both the polygon and text elements
  const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue" />
      <text x="150" y="120" font-size="30" text-anchor="middle" fill="red">ABC</text>
    </svg>`;

  expect(shape.render()).toEqual(expectedSVG);
});

test('Render Circle with specified color and text', () => {
  const shape = new Circle();
  shape.setColor('red');
  shape.setText('123');
  shape.setTextColor('green');

  const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="red" />
      <text x="150" y="120" font-size="30" text-anchor="middle" fill="green">123</text>
    </svg>`;

  expect(shape.render()).toEqual(expectedSVG);
});

test('Render Square with specified color and text', () => {
  const shape = new Square();
  shape.setColor('green');
  shape.setText('XYZ');
  shape.setTextColor('blue');

  const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="120" height="120" fill="green" />
      <text x="150" y="120" font-size="30" text-anchor="middle" fill="blue">XYZ</text>
    </svg>`;

  expect(shape.render()).toEqual(expectedSVG);
});
