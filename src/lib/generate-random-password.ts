 function generateCharDictionary() {
  const alphabets = generateAlphabets();
  const digits = getCharsFromAsciiRange(48, 57);

  const charDictionary: Map<number, string> = new Map();
  [alphabets, digits].forEach(arr => {
    arr.forEach(c => charDictionary.set(charDictionary.size, c));
  });

  return charDictionary;
}


function generateAlphabets() {
  const smallAlphabets = getCharsFromAsciiRange(97, 122);
  const bigAplphabets = getCharsFromAsciiRange(65, 90);

  const mergedAlphabets = [];
  smallAlphabets.forEach((sm, index) => {
    mergedAlphabets.push(bigAplphabets[index], sm);
  });

  return mergedAlphabets;
}

function getCharsFromAsciiRange(from: number, to: number) {
  const chars = [];
  for (let i=from; i<=to; i++) {
    chars.push(String.fromCharCode(i));
  }
  return chars;
}

function addSymbolsToDictionary(charDictionary: Map<number, string>, selectedSymbols: string[]) {
  const clonedDictionary = new Map(charDictionary);
  selectedSymbols.forEach(c => clonedDictionary.set(clonedDictionary.size, c));
  return clonedDictionary;
}

export function generateRandomPassword(numberOfChars: number, selectedSymbols: string[]) {
  // const symbols = ['!', '#', '$', '%', '&', '*', '_', '?'];
  const charDictionary = generateCharDictionary();
  const intArray = new Uint8Array(numberOfChars);
  const randomInt = crypto.getRandomValues(intArray);

  const dictionary = addSymbolsToDictionary(charDictionary, selectedSymbols);

  const charArray = Array.from(randomInt).map(i => dictionary.get(i % dictionary.size));
  return charArray.join('');
}