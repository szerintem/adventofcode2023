
const sum = function (input, options = {}) {
    if(options.useNumericText) {
        input = replaceNumericText(input)
    }

    const rows = input.trim().split(`\n`)
    let sum = 0
    rows.forEach(row => {
        const numerics = row.match(/\d/ig)
        if(!numerics) return
        const digits = numerics.map(numeric => Number(numeric))
        sum += Number(`${digits[0]}${digits[digits.length-1]}`);
    })
    return sum
}

const numericTextObject = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, }

const replaceNumericText = function(row) {
    return row.replace(/(one|two|three|four|five|six|seven|eight|nine)/ig,
        match => numericTextObject[match] || match
    );
}

module.exports = {
    sum,
};
