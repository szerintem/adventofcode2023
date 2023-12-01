
const day1 = require('./day1');
const input = require('fs').readFileSync(__dirname+'/input.txt').toString()

const example1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

const example2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;

describe('day1', () => {
    describe('part1', () => {
        it('example result should result 142', () => {
            expect(day1.sum(example1)).to.eql(142);
        });
        it('input result should be 53334', () => {
            expect(day1.sum(input)).to.eql(53334)
        });
    });
    describe('part2', () => {
        it('example result should result 281', () => {
            expect(day1.sum(example2, {useNumericText: true})).to.eql(281);
        });
        it('input result should be 52834', () => {
            expect(day1.sum(input, {useNumericText: true})).to.eql(52834)
        });
    });
});
