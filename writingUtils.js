/** @format */
import {
  getNumberOfCharacters,
  getNumberOfFigures,
  getNumberOfLine,
  getNumberOfOtherCharacters,
  getNumberOfWords,
  getNumberOfLetters,
  getNumberOfSpace,
} from "./regexUtils.js";

export function getResult(fileContent) {
  let output = `output:
    Number of lines: ${getNumberOfLine(fileContent)}
    Number of characters: ${getNumberOfCharacters(fileContent)}
    Number of space symbol: ${getNumberOfSpace(fileContent)}
    Number of letters: ${getNumberOfLetters(fileContent)}
    Number of figures: ${getNumberOfFigures(fileContent)}
    Number of other characters: ${getNumberOfOtherCharacters(fileContent)}
    ${printWordsStatistics(getNumberOfWords(fileContent))}
    `;

  return output;
}

function addWordInfToMap(wordsInfMap, word) {
  let wordLength = word.length;
  let newValue = wordsInfMap.has(wordLength)
    ? wordsInfMap.get(wordLength) + 1
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
