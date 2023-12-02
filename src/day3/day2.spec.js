const day3 = require('./day3')
const input = require('fs').readFileSync(__dirname+'/input.txt').toString()

describe('day3', () => {
    describe('part1', () => {
        it('example result should be 0', () => {
            const input = ``;
            expect(day3.calculate(input)).to.eql(0)
        });
    });
});
