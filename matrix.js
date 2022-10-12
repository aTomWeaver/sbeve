const pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function mod12(num) {
  while (num > 11) num -= 12;
  return num;
}

function shuffleArray(array) {
  // got this shuffle function from https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

function getToneRow(size=12) {
  const toneRow = shuffleArray(pitchClasses);
  for (let i = size; i < 12; i++) toneRow.pop();
  return toneRow;
}

function getMatrix(toneRow=getToneRow()) {
  let matrix = [...toneRow]
  let buffer = [...toneRow];
  for (let i = 0; i < toneRow.length; i++) {
    buffer = buffer.map((elm) => elm = mod12(elm + 1))
    matrix.push(...buffer);
  }
  return matrix;
}

getMatrix()