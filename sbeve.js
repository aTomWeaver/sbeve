import db from "./sbeveDB.json" assert { type: "json" };

let getRandElm = (ary, qty = 1) => {
  let vals = [];
  ary == db.eno ? vals.push("\n# Oblique Strategies") : vals.push("\n#");
  for (let i = 0; i < qty; i++) {
    let newElm = ary[Math.floor(Math.random() * ary.length)];
    vals.includes(`\t- ${newElm}`) ? i-- : vals.push("\t- " + newElm); // no duplicate values
  }
  return vals.join("\n");
};

function render() {
  
}

console.log(getRandElm(db.eno) + "\n");
console.log(getRandElm(db.music.descriptor, 5));
