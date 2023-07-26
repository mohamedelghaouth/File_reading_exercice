#!/usr/bin/env node
/** @format */
import * as fs from "node:fs";
import { getResult } from "./writingUtils.js";

try {
  let fileContent = fs.readFileSync("./sample.txt", "utf8");
  let output = getResult(fileContent);
  fs.writeFileSync("./output.txt", output);
} catch (err) {
  console.error(err);
}
