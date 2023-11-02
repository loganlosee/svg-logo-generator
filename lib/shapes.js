class Shape {
  constructor() {
    this.color = 'black';
    this.text = '';
    this.textColor = 'black'; // Add a property for text color
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor; // Set the text color
  }

  render() {
    throw new Error('render() method must be implemented in child classes.');
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      <text x="150" y="120" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="150" y="120" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="120" height="120" fill="${this.color}" />
      <text x="150" y="120" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
