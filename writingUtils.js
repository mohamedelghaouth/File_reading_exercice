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

function getCharactersResult(fileContent) {
  let output = `Number of characters (total): ${getNumberOfCharacters(
    fileContent
  )}
Number of letters: ${getNumberOfLetters(fileContent)}
Number of digits: ${getNumberOfFigures(fileContent)}
Number of spaces: ${getNumberOfSpace(fileContent)}
Number of other characters: ${getNumberOfOtherCharacters(fileContent)}`;

  return output;
}

function getLinesResult(fileContent) {
  let output = `Number of lines: ${getNumberOfLine(fileContent)}`;

  return output;
}

export function getResult(fileContent, firstLine) {
  if (firstLine === "--Lines--") {
    return getLinesResult(fileContent);
  } else if (firstLine === "--Characters--") {
    return getCharactersResult(fileContent);
  } else {
    return `${printWordsStatistics(getNumberOfWords(fileContent))}`;
  }
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
  let result = `Number of words: ${wordMatchingResult.length}`;
  for (const worldInf of wordsInfMap.entries()) {
    if (worldInf[0] === 1) {
      result += `\nNumber of words of ${worldInf[0]} letter: ${worldInf[1]}`;
    } else {
      result += `\nNumber of words of ${worldInf[0]} letters: ${worldInf[1]}`;
    }
  }
  let res = "";
  return result;
}
