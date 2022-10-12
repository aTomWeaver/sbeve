const pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function mod12(num) {
  while (num > 11) num -= 12;
  return num;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
return arr;
}

function getToneRow(size=12) {
  const toneRow = shuffleArray(pitchClasses);
  for (let i = size; i < 12; i++) toneRow.pop();
  return toneRow;
}

function getMatrix(toneRow=getToneRow()) {
  let matrix = [...toneRow];
  let buffer = [...toneRow];
  for (let i = 0; i < toneRow.length; i++) {
    buffer = buffer.map((elm) => elm = mod12(elm + 1))
    matrix.push(...buffer);
  }
  return matrix;
}

console.log(getMatrix())