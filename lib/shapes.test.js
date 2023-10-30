const { Shape, Triangle, Circle, Square } = require('./shapes');

test('Render Triangle with specified color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Render Circle with specified color', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});
test('Render Square with specified color', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="40" y="40" width="120" height="120" fill="green" />');
});
test('Shape render method throws an error', () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrowError('render() method must be implemented in child classes.');
});