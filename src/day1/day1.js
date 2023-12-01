
const sum = function (input, options = {}) {
    const useNumericText = options.useNumericText || false

    if(useNumericText) {
        input = replaceNumericText(input)
    }

    const rows = input.trim().split(`\n`)
    let sum = 0
    for(let row of rows) {
        const numerics = row.match(/\d/ig)
        const digits = numerics.map(numeric => Number(numeric))
        let rowSum
        if(digits.length === 1) {
            rowSum = Number(`${digits[0]}${digits[0]}`);
        } else {
            rowSum = Number(`${digits[0]}${digits[digits.length-1]}`);
        }
        sum += rowSum
    }
    return sum
}

const replaceNumericText = function(row) {
    const replacers = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    }
    return row.replace(/(one|two|three|four|five|six|seven|eight|nine)/ig, (match) => {
        return replacers.hasOwnProperty(match) ? replacers[match] : match;
    });
}

module.exports = {
    sum,
};
