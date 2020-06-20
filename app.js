let highscore = 0;
$(document).ready(function () {
  let winner;
  let score = 0;
  let appendNum = 4; //Base number of tiles per game. Number will increase as score increases

  $("#begin").click(() => {
    newGame();
    newRound(appendNum);
  });
});

$(document).on("click", ".colorTile", function (e) {
  if ($(this).attr("data-color") === winner) {
    score++;
    updateScore(score);
    if (score <= 3) {
      appendNum = 4;
    } else if (score > 3 && score < 6) {
      appendNum = 8;
    } else if (score > 12) {
      appendNum = 12;
    }
    newRound(appendNum);
  } else {
    gameOver();
  }
});

function gameOver() {
  if (highscore < score) {
    highscore = score;
  }
  score = 0;
  updateScore(score);
  $("#start").removeClass("hide");
  $("#game").addClass("hide");
  $("#begin").text("Play Again?");
  $("#message").removeClass("hide");
  $("#highscore").html(highscore);
  console.log(highscore);
  $(".help").removeClass("hide");
  $(".container h1").removeClass("hide");
}

function newGame() {
  score = 0;
  updateScore(score);
  $("#game").removeClass("hide");
  $("#start").addClass("hide");
  $(".help").addClass("hide");
  $(".container h1").addClass("hide");
}

//TODO: Random RGB Generator
function randomColor() {
  return Math.floor(Math.random() * 255);
}
function randomRGB() {
  let red = randomColor();
  let green = randomColor();
  let blue = randomColor();
  return `rgb(${red}, ${green}, ${blue})`;
}
//TODO: Function to create color div
function newRound(numToAppend) {
  $("#tiles").empty();
  let colorArr = [];
  for (let i = 0; i < numToAppend; i++) {
    colorArr.push(randomRGB());
    let colorTile = $(
      `<div class = 'colorTile' data-color='${colorArr[i]}' style='background: ${colorArr[i]}'</div>`
    );
    $("#tiles").append(colorTile);
  }
  winner = getWinningColor(colorArr);
  $("#clue").text(winner);
  console.log(colorArr);
}

//TODO: Get the winning color
function getWinningColor(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//TODO: Score / Round Counter
function updateScore(currentScore) {
  $("#score").text(currentScore);
}
