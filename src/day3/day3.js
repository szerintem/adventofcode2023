const calculate = function(input) {
  const lines = input.split(`\n`).map(line => line.split(''));

  let sum = 0;

  lines.forEach((line, posX) => {
    let numericLine = [];
    let hadSpecial = false;
    line.forEach((character, posY) => {
      const isCurrentNumeric = isNumeric(lines, posX, posY);
      const next = getCharacter(lines, posX, posY + 1);
      const isNextNumeric = isNumeric(lines, posX, posY + 1);

      if(isCurrentNumeric) {
        numericLine.push(character);
        const hasSpecial = validateCharacter(lines, posX, posY);
        if(hasSpecial) {
          hadSpecial = true;
        }
      }

      if(!isNextNumeric) {
        if(hadSpecial && numericLine.length) {
          const num = Number(numericLine.join(''));
          sum = sum + num;
        }
        numericLine = [];
        hadSpecial = false;
      }

    });
  });

  return sum;
};

const isNumeric = function (lines, posX, posY) {
  const character = getCharacter(lines, posX, posY);
  return !!character && !!character.match(/\d/);
}

const isSpecial = function (character) {
  return (
    character
    && character !== '.'
    && !character.match(/\d/)
    && !character.match(/\w/)
  )
}

const validateCharacter = function (lines, posX, posY) {
  const tl  = getCharacter(lines, posX-1, posY-1)
  const t   = getCharacter(lines, posX, posY-1)
  const tr  = getCharacter(lines, posX+1, posY-1)
  const l   = getCharacter(lines, posX-1, posY)
  const r   = getCharacter(lines, posX+1, posY)
  const bl  = getCharacter(lines, posX-1, posY+1)
  const b   = getCharacter(lines, posX, posY+1)
  const br  = getCharacter(lines, posX+1, posY+1)

  const tls = isSpecial(tl)
  const ts  = isSpecial(t)
  const trs = isSpecial(tr)
  const ls  = isSpecial(l)
  const rs  = isSpecial(r)
  const bls = isSpecial(bl)
  const bs  = isSpecial(b)
  const brs = isSpecial(br)

  const has = tls || ts || trs || ls || rs || bls || bs || brs;

  // if(has) {
  //   const c = getCharacter(lines, posX, posY);
  //   console.log(c + ' has special character');
  //   if(tls) console.log('tl', tl)
  //   if(ts) console.log('t', t)
  //   if(trs) console.log('tr', tr)
  //   if(ls) console.log('l', l)
  //   if(rs) console.log('r', r)
  //   if(bls) console.log('bl', bl)
  //   if(bs) console.log('b', b)
  //   if(brs) console.log('br', br)
  // }
  return has;
}

const getCharacter = function(lines, posX, posY) {
  return lines?.[posX]?.[posY]
}

module.exports = {
  calculate
};
