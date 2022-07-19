import checkBorder from "./checkBorder.js"

export default function checkReplacement(current, hole, x_grid) {
  
  if(
    (current == hole + 1 || 
    current == hole - 1 || 
    current == hole - x_grid || 
    current == hole + x_grid) &&
    checkBorder(current, hole, x_grid)
    ) {
    return true
  } else {
    return false
  }
}