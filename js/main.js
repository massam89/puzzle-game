import createGame from "./createGame.js";
import checkInput from "./checkInput.js";

export default function main(){
  const inputs = Array.from(document.getElementsByClassName("input"));
  let x_grid = +inputs[0].value;
  let y_grid = +inputs[1].value;

  // create game at first
  createGame(x_grid, y_grid);

  // create game when the user changes one of two inputs
  inputs.forEach((element) => {
    element.addEventListener("change", (e) => {

      // Input validation
      ({x_grid, y_grid} = checkInput(e, x_grid, y_grid, inputs, element))

      createGame(x_grid, y_grid);
    });
  });
}
