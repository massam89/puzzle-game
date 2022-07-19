import createGame from "./createGame.js"

(function () { 
  const input = Array.from(document.getElementsByClassName('input'))
  let x_grid = input[0].value
  let y_grid = input[1].value

  createGame(x_grid, y_grid)

  input.forEach(element => {
    element.addEventListener('change', (e) => {
      
      if(e.target.value >= 10 || e.target.value < 3 || e.target.value == ''){
        alert('You can not choose number more than 10')
        x_grid = e.target.value > 0 ? 10 : 3
        input[0].value = e.target.value > 0 ? 10 : 3
        y_grid = e.target.value > 0 ? 10 : 3
        input[1].value = e.target.value > 0 ? 10 : 3
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