const pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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

  console.log(shuffleArray(pitchClasses))