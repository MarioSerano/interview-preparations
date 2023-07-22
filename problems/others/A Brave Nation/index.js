function isAbbreviation(source, abbr) {
  let sourceList = source.split(" ").map((data) => data.toLowerCase());
  abbr = abbr.toLowerCase();
  let letterPointer = 0;
  for (let i = 0; i < sourceList.length; i++) {
    let word = sourceList[i];
    let pointer = 0;
    let found = false;
    if (word && letterPointer === abbr.length) return false;

    while (letterPointer < abbr.length && pointer < word.length) {
      if (abbr[letterPointer] === word[pointer]) {
        found = true;
        letterPointer++;
      } else if (found && abbr[letterPointer] !== word[pointer]) {
        break;
      }
      pointer++;
    }
  }

  return letterPointer === abbr.length;
}
let source = "European Union";
let abbr = "europe";
console.log(isAbbreviation(source, abbr));
