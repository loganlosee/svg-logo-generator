//shape class
class shape {
    constructor(){
        this.color='';
    }
    logoColor(color){
        this.color=(color);
    }
    render() {
    // overriden by child class
    throw new Error('render() method must be implemented in child classes.');
  }
}

class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  

  class Square extends Shape {
    render() {
      return `<rect x="40" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Trianle, Cirlce, Square};
  