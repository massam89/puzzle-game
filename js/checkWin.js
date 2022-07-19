import isArraySorted from "./isArraySorted.js";

export default function checkWin() {
  const allBlocks = Array.from(document.querySelectorAll('.hole, .item'))
  const orders = allBlocks.map(element => +element.style.order)
  console.log(orders)
  if(isArraySorted(orders)) {
    alert('You win!')
    window.location.reload();
  }
}