const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    // 
    let a = 1;
    let b = 2;
    let expected = 3;

    // Actual
    const actual = calculator.sum(a, b);

    // Assert
    expect(actual).toBe(expected);
})

test('substracts a - b', () => {
    //Actual resta
    let actual= calculator.substract(2,1);
    //Expected resta
    expect(actual).toBe(1);
})

test('multiplies a * b', () => {
    let actual= calculator.multiply(2,2);
    expect(actual).toBe(4);
})

test('divides a / b', () => {
    let actual= calculator.divide(4,2);
    expect(actual).toBe(2);
})

test('Raises to power a ^ b', () => {
    let actual= calculator.power(3,4);
    expect(actual).toBe(81);
})
