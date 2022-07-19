export default function checkInput(e, x_grid, y_grid, input, element ){

  if (e.target.value > 10 || e.target.value < 3 || e.target.value == "") {
    alert("You can not choose number more than 10");
    x_grid = e.target.value > 0 ? 10 : 3;
    input[0].value = e.target.value > 0 ? 10 : 3;
    y_grid = e.target.value > 0 ? 10 : 3;
    input[1].value = e.target.value > 0 ? 10 : 3;
  } else {
    switch (element.id) {
      case "x-grid":
        x_grid = e.target.value;
        break;
      case "y-grid":
        y_grid = e.target.value;
        break;
    }
  }

  return {x_grid, y_grid}
}