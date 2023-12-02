const calculate = function(input, rules) {
  const games = separate(input);

  let sum = 0;

  Object.entries(games).forEach(([gameId, rounds]) => {
    gameId = Number(gameId)
    const sumColors = {
      red: 0,
      green: 0,
      blue: 0,
    }
    rounds.forEach(round => {
      if(round.red && round.red > sumColors.red) sumColors.red = round.red
      if(round.green && round.green > sumColors.green) sumColors.green = round.green
      if(round.blue && round.blue > sumColors.blue) sumColors.blue = round.blue
    })

    const isValidForRule =
      rules.red >= sumColors.red &&
      rules.green >= sumColors.green &&
      rules.blue >= sumColors.blue

    if(isValidForRule) {
      sum = sum + gameId;
    }
  });

  return sum;
};

const calculate2 = function(input, rules) {
  const games = separate(input);

  let sum = 0;

  Object.entries(games).forEach(([gameId, rounds]) => {
    const sumColors = {
      red: 0,
      green: 0,
      blue: 0,
    }
    rounds.forEach(round => {
      if(sumColors.red < round.red) sumColors.red = round.red
      if(sumColors.green < round.green) sumColors.green = round.green
      if(sumColors.blue < round.blue) sumColors.blue = round.blue
    })

    const asd = Number(sumColors.red * sumColors.green * sumColors.blue)
    sum = sum + asd
  });

  return sum;
};

const separate = function(input) {
  const rows = input.trim().split(`\n`);
  const result = {};
  rows.forEach(rowString => {
    const [gameIdString, gameString] = rowString.split(':');
    const gameId = Number(gameIdString.replace('Game ', ''));

    result[gameId] = [];
    const cubeStrings = gameString.trim().split(';');

    cubeStrings.forEach(cubeString => {
      const roundsString = cubeString.trim().split(',');
      const round = {};
      roundsString.forEach(roundString => {
        const [ number, color ] = roundString.trim().split(' ');
        round[color] = Number(number);
      })
      result[gameId].push(round)
    });

  });

  return result;
};

module.exports = {
  calculate,
  calculate2,
};
