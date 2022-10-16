const pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let _mod12 = (num) => {
  if (num > 11) {
    while (num > 11) num -= 12;
  } else if (num < 0) {
    while (num < 0) num += 12;
  }
  return num;
};

let _shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateToneRow(size = 12) {
  const toneRow = _shuffleArray(pitchClasses);
  for (let i = size; i < 12; i++) toneRow.pop();
  return toneRow;
}

function displayMatrix(matrix) {
  const rowLength = Math.sqrt(matrix.length)
  let buffer = [];
  console.log("[\n");
  for (let i = 0; i < matrix.length + 1; i++) {
    if (i > 0 && i % rowLength === 0) {
      console.log(buffer.join("") + "\n");
      buffer = [];
    }
    matrix[i] > 9
      ? buffer.push("  " + matrix[i])
      : buffer.push("   " + matrix[i]);
  }
  console.log("]");
}

function generateMatrix(toneRow) {
  let matrix = [...toneRow];
  let buffer = [...toneRow];
  for (let i = 0; i < toneRow.length - 1; i++) {
    let inversionInterval = matrix[i] - matrix[i + 1];
    buffer = buffer.map((elm) => _mod12(elm += inversionInterval));
    matrix.push(...buffer);
  }
  return matrix;
}

function getMatrix(toneRow = generateToneRow(), rowSize) {
  if (rowSize) toneRow = generateToneRow(rowSize)
  let newMatrix = generateMatrix(toneRow);
  displayMatrix(newMatrix);
}

function parseCookie(arr) {
  let args = arr.split(',');
  args = args.map(elm => parseInt(elm))
  .map(elm => _mod12(elm))
  return args;
}

export { getMatrix, parseCookie };
