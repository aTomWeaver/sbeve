#!/usr/bin/env node
import db from "./sbeveDB.json" assert { type: "json" };

const getRandElm = (ary) => ary[Math.floor(Math.random() * ary.length)];
const getPrompt = () => '>> create something ' + getRandElm(db.adjective) + ' and ' + getRandElm(db.music.aspect) + " " + getRandElm(db.music.descriptor);
const getEnoCard = () => enoSays[0] + getRandElm(db.eno) + enoSays[1];
const enoSays = ['>> Eno says:\n\t ¸¸♬·¯·♩¸¸♪·¯·♫¸¸', '¸¸♫·¯·♪¸¸♩·¯·♬¸¸']

function parse() {
  let stagedStrings = [];
  const args = process.argv;
  const flags = args.filter(arg => arg.split("").includes("-"));
  if (args[2] === undefined) {
    stagedStrings.push(getEnoCard());
    stagedStrings.push(getPrompt());
  } else if (args.includes('-p')) {
    stagedStrings.push(getPrompt());
  } else if (args.includes('-e')) {
    stagedStrings.push(getEnoCard());
  }
  render(stagedStrings)
}

function render(strings) {
  console.log("\n" + strings.join("\n\n") + "\n")
}

parse()