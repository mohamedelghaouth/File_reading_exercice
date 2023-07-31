#!/usr/bin/env node
/** @format */
import * as fs from "node:fs";
import { getResult } from "./writingUtils.js";

try {
  let fileContent = fs.readFileSync("./input.txt", "utf8");
  let lines = fileContent.split("\n");
  let firstLine = lines[0];
  fileContent = lines.slice(1).join("\n");
  let output = getResult(fileContent, firstLine);
  fs.writeFileSync("./output.txt", output);
} catch (err) {
  console.error(err);
}
