const copier = (originalName = '', counterNames = [], prefix = '') => {
  // get the originalName into a local variable
  let name = originalName;

  // set a default highest
  let highest = 1;

  // go through all the other files which have to do with the counting of the original one
  counterNames.forEach(counterName => {
    // split name by prefix + whitespace, get text following
    const prefixSplit = counterName.split(`${prefix} `)[1];

    // if no text, return, this file does not take part in counting
    if (!prefixSplit) return;

    // get first string between next whitespace (and after prefix)
    const firstChar = Number(prefixSplit.split(' ').shift());

    // if its not a number, this file does not take part in counting
    if (isNaN(firstChar)) return;

    // if the number is higher than the current highest, replace with + 1
    if (firstChar > highest) highest = firstChar + 1;
  });

  // name already contains prefix + a number
  const matches = name.match(`^(?:${prefix}(?=\\s[0-9]))\\s\\d`);
  if (matches) {

    // replace the prefix + whitespace + number with a new number
    name = name.replace(new RegExp(`^(?:${prefix}(?=\\s[0-9]))\\s\\d`), `${prefix} ${highest}`);
  } else {

    // set the name to the prefix + name
    name = `${prefix} ${highest} ${name}`;
  }

  return name;
};

module.exports = copier;
