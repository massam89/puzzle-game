export default function checkBorder(current, hole, x_grid) {
  if (
    (current == hole - 1 && current == Math.floor(current / x_grid) * x_grid) ||
    (current == hole + 1 &&
      current == Math.floor(current / x_grid) * x_grid + 1)
  ) {
    return false;
  } else {
    return true;
  }
}
