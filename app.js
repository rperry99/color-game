$(document).ready(function () {
  $("#begin").click(() => {
    newGame();
    appendTiles(3);
  });
});

function gameOver() {
  $("#start").removeClass("hide");
  $("#game").addClass("hide");
}

function newGame() {
  $("#game").removeClass("hide");
  $("#start").addClass("hide");
}

//TODO: Random RGB Generator
function randomColor() {
  return Math.floor(Math.random() * 255);
}
function randomRGB() {
  let red = randomColor();
  let green = randomColor();
  let blue = randomColor();
  return `rgb(${red},${green},${blue})`;
}
//TODO: Function to create color div
function appendTiles(numToAppend) {
  let colorArr = [];
  for (let i = 0; i < numToAppend; i++) {
    colorArr.push(randomRGB());
    let colorTile = $(
      `<div class = 'colorTile' style='background: ${colorArr[i]}'</div>`
    );
    $("#tiles").append(colorTile);
  }
  getWinningColor(colorArr);
  console.log(colorArr);
}

//TODO: Get the winning color
function getWinningColor(arr) {
  $("#clue").text(arr[Math.floor(Math.random() * arr.length)]);
}
//TODO: Score / Round Counter
//TODO: Increase Difficulty
