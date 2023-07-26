/** @format */

export function getNumberOfLine(fileContent) {
  if (fileContent.length !== 0) {
    return (fileContent.match(/\n/gi) || []).length + 1;
  }
  return 0;
}

export function getNumberOfLetters(fileContent) {
  let regex = /\p{L}/gu;
  return (fileContent.match(regex) || []).length;
}

export function getNumberOfSpace(fileContent) {
  let regex = /\s/gu;
  return (fileContent.match(regex) || []).length;
}

export function getNumberOfCharacters(fileContent) {
  let regex = /[^\s]/gu;
  return (fileContent.match(regex) || []).length;
}

export function getNumberOfFigures(fileContent) {
  let regex = /^\d+\s|(?<=\s)\d+(?=\s)|\s\d+$/g;
  return (fileContent.match(regex) || []).length;
}

export function getNumberOfOtherCharacters(fileContent) {
  let regex = /[^\s\w]/gu;
  return (fileContent.match(regex) || []).length;
}

export function getNumberOfWords(fileContent) {
  const regex = /(?<=\s)\b[a-zA-Z]+\b(?=\s)/gm;
  return fileContent.match(regex) || [];
}
