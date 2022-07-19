export default function createGame(x_grid, y_grid) {
  const gameEl = document.getElementById('game')

  gameEl.innerHTML = ''

  for(let i = 1 ; i <= x_grid * y_grid  ; i++) {
    const element = document.createElement('div')
    const span = document.createElement('span')

    span.innerText = i

    element.classList.add('item')

    element.style.cssText = `width: ${100/x_grid}%; height: ${100/y_grid}%`

    element.appendChild(span)

    gameEl.appendChild(element)
  }
}