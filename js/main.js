import createGame from "./createGame.js"

(function () { 
  const input = Array.from(document.getElementsByClassName('input'))
  let x_grid = input[0].value
  let y_grid = input[1].value

  createGame(x_grid, y_grid)

  input.forEach(element => {
    element.addEventListener('change', (e) => {
      
      if(e.target.value >= 10){
        alert('You can not choose number more than 10')
        x_grid = 10
        input[0].value = 10
        y_grid = 10
        input[1].value = 10
      } else {
         switch(element.id){
          case 'x-grid':
            x_grid = e.target.value
            break
          case 'y-grid':
            y_grid = e.target.value
            break
      }
      }

      createGame(x_grid, y_grid)
    })
  })

})()