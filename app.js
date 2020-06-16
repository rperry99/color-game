$(document).ready(function () {
  $("#begin").click(() => {
    $("#game").removeClass("hide");
    $("#start").addClass("hide");
  });
});

function resetGame() {
  $("#start").removeClass("hide");
  $("#game").addClass("hide");
}
