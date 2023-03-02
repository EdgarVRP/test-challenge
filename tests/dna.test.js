const { default: expect } = require('expect');
const DNAString = require('../dna');

test('DNAString', () => {
    let actual = DNAString('CTAGGGcTAratata');
    expect(actual).toBe('CTAGGGTA');
})

