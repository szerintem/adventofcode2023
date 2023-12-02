const day2 = require('./day2')
const input = require('fs').readFileSync(__dirname+'/input.txt').toString()

describe.only('day2', () => {
    describe('part1', () => {
        it('example result should be 8', () => {
            const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

            const rules = { red: 12, green: 13, blue: 14 }
            expect(day2.calculate(input, rules)).to.eql(8)
        });
        it('input result should be higher than 2105', () => {
            const rules = { red: 12, green: 13, blue: 14 }
            expect(day2.calculate(input, rules)).to.eql(2105)
        });
    });
    describe('part2', () => {
        it('example result should be 2286', () => {
            const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

            const rules = { red: 12, green: 13, blue: 14 }
            expect(day2.calculate2(input, rules)).to.eql(2286)
        });
        it('input result should be 72422', () => {
            const rules = { red: 12, green: 13, blue: 14 }
            expect(day2.calculate2(input, rules)).to.eql(72422)
        });
    });
});
