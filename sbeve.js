#!/usr/bin/env node 

import db from "./sbeveDB.json" assert { type: "json" };
import { getMatrix, parseCookie } from "./setTheory.js";

const getRandElm = (ary) => ary[Math.floor(Math.random() * ary.length)];
const getPrompt = () =>
  ">> create something " +
  getRandElm(db.adjective) +
  " and " +
  getRandElm(db.music.aspect) +
  " " +
  getRandElm(db.music.descriptor);
const getEnoCard = () => enoSays[0] + getRandElm(db.eno) + enoSays[1];
const enoSays = [">> Eno says:\n\t ¸¸♬·¯·♩¸¸♪·¯·♫¸¸", "¸¸♫·¯·♪¸¸♩·¯·♬¸¸"];

function parse() {
  let stagedStrings = [];
  const CLIargs = process.argv;
  const flags = CLIargs.filter((arg) => arg.split("").includes("-")).join("").split("");
  const fnArgs = "" // CLI args with flags and first two indexes taken out
  if (CLIargs[2] === undefined) {
    stagedStrings.push(getEnoCard());
    stagedStrings.push(getPrompt());
  } 
  if (flags.includes("p")) {
    stagedStrings.push(getPrompt());
  } 
  if (flags.includes("e")) {
    stagedStrings.push(getEnoCard());
  } 
  if (flags.includes("c")) {
    if (!CLIargs[3]) return console.log("no arguments passed!")
    getMatrix(parseCookie(CLIargs[3]));
  } 
  if (flags.includes('m')) {
    if (CLIargs[3]) {
      let row = CLIargs[3].split(",")
      row = row.map(elm => parseInt(elm.trim()))
      getMatrix(row);
    } else {
      getMatrix();
    }
  }
  render(stagedStrings);
}

function render(strings) {
  console.log("\n" + strings.join("\n\n") + "\n");
}

parse();
