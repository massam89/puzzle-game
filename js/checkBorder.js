export default function checkBorder(current, hole, x_grid) {

  if((current == hole + 1 || current == hole - 1) && (hole == x_grid + 1)){
    return false
  } else {
    return true
  }
}