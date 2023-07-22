/** @format */

export function getNumberOfLine(fileContent) {
  if (fileContent.length !== 0) {
    return (fileContent.match(/\n/gi) || []).length + 1;
  }
  return 0;
}

export function getNumberOfLetters(fileContent) {
  let matchingResult = fileContent.match(/\p{L}/gu) || [];
  return matchingResult.length;
}

export function getNumberOfSpace(fileContent) {
  let matchingResult = fileContent.match(/\s/gu) || [];
  return matchingResult.length;
}

export function getNumberOfCharacters(fileContent) {
  let matchingResult = fileContent.match(/[^\s]/gu) || [];
  return matchingResult.length;
}

export function getNumberOfFigures(fileContent) {
  let regex = /^\d+\s|(?<=\s)\d+(?=\s)|\s\d+$/g;
  let matchingResult = fileContent.match(regex) || [];
  return matchingResult.length;
}

export function getNumberOfOtherCharacters(fileContent) {
  let matchingResult = fileContent.match(/[^\s\w]/gu) || [];
  return matchingResult.length;
}

export function getNumberOfWords(fileContent) {
  const regex = /(?<=\s)\b[a-zA-Z]+\b(?=\s)/gm;

  let matchingResult = fileContent.match(regex) || [];
  return printWordsStatistics(matchingResult);
}

function addWordInfToMap(wordsInfMap, word) {
  let wordLength = word.length;
  let newValue = wordsInfMap.has(wordLength)
    ? wordsInfMap.get(word.length) + 1
    : 1;

  wordsInfMap.set(wordLength, newValue);
}

function getWordsInfMap(wordMatchingResult) {
  let wordsInfMap = new Map();
  for (const word of wordMatchingResult) {
    addWordInfToMap(wordsInfMap, word);
  }
  return new Map([...wordsInfMap.entries()].sort((a, b) => a[0] - b[0]));
}

function printWordsStatistics(wordMatchingResult) {
  let wordsInfMap = getWordsInfMap(wordMatchingResult);
  let result = `Number of words: ${wordMatchingResult.length}\n`;
  for (const worldInf of wordsInfMap.entries()) {
    result += `    Number of ${worldInf[0]} letter words: ${worldInf[1]}\n`;
  }
  return result;
}
