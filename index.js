'use strict';

const dupli = (originalName, counterNames, prefix) => {
  // get the originalName into a local variable
  let name = originalName || '';

  // set a default highest
  let highest = 1;

  counterNames = counterNames || [];
  prefix = prefix || '';

  // go through all the other files which impact the original 'highest'
  counterNames.forEach(counterName => {
    // split name by prefix + whitespace, get the string which follows
    const prefixSplit = counterName.split(`${prefix} `)[1];

    // if no text, return, this file does not take part in counting
    if (!prefixSplit) return;

    // get first string between next whitespace (and after prefix) and try to turn it into a number
    const firstChar = Number(prefixSplit.split(' ').shift());

    // if its not a number, this file does not take part in counting
    if (isNaN(firstChar)) return;

    // if the number is higher than the current highest, replace with this number + 1
    if (firstChar >= highest) highest = firstChar + 1;
  });

  // see if the name already contains the pattern (is a duplicate already)
  const matches = name.match(`^(?:${prefix}(?=\\s[0-9]))\\s\\d`);

  // is a duplicate, replace the pattern portion of the name
  if (matches) {
    // replace the prefix + whitespace + number with a new number
    name = name.replace(new RegExp(`^(?:${prefix}(?=\\s[0-9]))\\s\\d`), `${prefix} ${highest}`);
  } else {
    // set the name to the prefix + name
    name = `${prefix} ${highest} ${name}`;
  }

  return name;
};

module.exports = dupli;
