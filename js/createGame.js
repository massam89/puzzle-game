import createRandomArray from "./createRandomArray.js"

export default function createGame(x_grid, y_grid) {
  const blockNum = x_grid * y_grid
  const gameEl = document.getElementById('game')

  gameEl.innerHTML = ''

  const randomArray = createRandomArray(blockNum)

  for(let i = 1 ; i <= blockNum ; i++) {

    const element = document.createElement('div')
    const span = document.createElement('span')

    if(i === blockNum) {
      span.innerText = ''

      element.classList.add('hole')
      element.style.cssText = `width: ${100/x_grid}%; height: ${100/y_grid}%; order: ${randomArray[blockNum - 1]}`
      element.appendChild(span)

    } else {
      span.innerText = i

      element.classList.add('item')
      element.style.cssText = `width: ${100/x_grid}%; height: ${100/y_grid}%; order: ${randomArray[i]}`
      element.appendChild(span)

    }

    gameEl.appendChild(element)
  }
}