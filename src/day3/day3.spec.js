const day3 = require('./day3')
const input = require('fs').readFileSync(__dirname+'/input.txt').toString()

describe('day3', () => {
    describe('part1', () => {
        it.only('example result should be 4361', () => {
            const example = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
            expect(day3.calculate(example)).to.eql(4361)
        });
        it.only('input result should be 539590', () => {
            expect(day3.calculate(input)).to.eql(539590)
        });
    });
    describe.skip('part2', () => {
        it.only('example result should be 4361', () => {
            const example = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
            expect(day3.calculate2(example)).to.eql(467835)
        });
        // it.only('input result should be 539590', () => {
            // expect(day3.calculate(input)).to.eql(539590)
        // });
    });
});
