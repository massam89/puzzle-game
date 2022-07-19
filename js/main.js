import createGame from "./createGame.js";
import checkInput from "./checkInput.js";

(function () {
  const input = Array.from(document.getElementsByClassName("input"));
  let x_grid = +input[0].value;
  let y_grid = +input[1].value;

  createGame(x_grid, y_grid);

  input.forEach((element) => {
    element.addEventListener("change", (e) => {
      ({x_grid, y_grid} = checkInput(e, x_grid, y_grid, input, element))
      createGame(x_grid, y_grid);
    });
  });
})();
