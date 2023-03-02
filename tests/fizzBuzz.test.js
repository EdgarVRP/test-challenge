const { default: expect } = require('expect');

const fizzBuzz = require('../fizzBuzz');

test('fizzBuzz', () => {
    let actual = fizzBuzz(15);
    expect(actual).toBe('FizzBuzz');
})

test('fizz', () => {
    let actual = fizzBuzz(6);
    expect(actual).toBe('Fizz');
})

test('buzz', () => {
    let actual = fizzBuzz(10);
    expect(actual).toBe('Buzz');
}) 