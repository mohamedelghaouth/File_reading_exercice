#!/usr/bin/env node
/** @format */
import * as fs from "node:fs";
import {
  getNumberOfCharacters,
  getNumberOfFigures,
  getNumberOfLine,
  getNumberOfOtherCharacters,
  getNumberOfWords,
  getNumberOfLetters,
  getNumberOfSpace,
} from "./utils.js";

var fileContent;
var output;

function setResult() {
  output = `output:
    Number of lines: ${getNumberOfLine(fileContent)}
    Number of characters: ${getNumberOfCharacters(fileContent)}
    Number of space symbol: ${getNumberOfSpace(fileContent)}
    Number of letters: ${getNumberOfLetters(fileContent)}
    Number of figures: ${getNumberOfFigures(fileContent)}
    Number of other characters: ${getNumberOfOtherCharacters(fileContent)}
    ${getNumberOfWords(fileContent)}
    `;
}

try {
  fileContent = fs.readFileSync("./sample.txt", "utf8");
  setResult();
  fs.writeFileSync("./output.txt", output);
} catch (err) {
  console.error(err);
}
