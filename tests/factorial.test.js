const { default: expect } = require("expect");
const factorial = require("../factorial");

test("factorial", () => {
    let actual = factorial(5);
    //Probando que la prueba funcione
    //expect(actual).toBe(121);
    expect(actual).toBe(120);
});
