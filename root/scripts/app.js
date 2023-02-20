function init() {

  // ! Generating a grid

  
  // Variables
  const startBtn = document.querySelector('#startBtn')
  const startingPosition = 94
  let currentPosition = startingPosition
  

  // Obstacle positions generated on the grid by being passed into addObstacles function.
  const obstacleCells = [
    [71, 73, 75, 77],
    [51, 52, 53, 56, 57],
    [31, 32, 33, 36, 37, 38]
  ]
        
    
  // Creating the grid
  const cells = []
  const grid = document.querySelector('.grid')
  const width = 10
  const height = 10
  const cellCount = width * height
   
  
  function createGrid(){
  // Using the total cell count we've saved to a variable then using a for loop to iterate that many times.
    for(let i = 0; i < cellCount; i++){
  // Create div cell, add index as innerText, add Data attribute representing index.
      const cell = document.createElement('div')
      cell.innerText = i
      cell.dataset.index = i
  // Append to grid and push cells into cells array.
      grid.appendChild(cell)
      cells.push(cell)
      }  
    }
    
  
  // ! Executions
  
  // Adding Bob class (player) onto the grid.
  function addBob(position){
    cells[position].classList.add('bob')
    }
  
  // Removing Bob class (player) from the grid.
  function removeBob(){
    cells[currentPosition].classList.remove('bob')
    }

  // Moving Bob around the grid.
  function moveBob(e){
    const right = 39
    const left = 37
    const up = 38
    const down = 40
  
    removeBob()
  
      if (e.keyCode === right && currentPosition % width !== width - 1){
        currentPosition++ 
      } else if (e.keyCode === left && currentPosition % width !== 0){
        currentPosition--
      } else if (e.keyCode === up && currentPosition >= width){
        currentPosition -= width
      } else if (e.keyCode === down && currentPosition + width < cellCount){
        currentPosition += width
      } else {
      }
    addBob(currentPosition)
    }
  
  // Large function to start the game. 
  function start() {
    addBob(startingPosition)
    handleCollision()
    moveObstacles(300, 'patrick', 0, 70, -1)
    moveObstacles(500, 'squidward', 1, 59, 1)
    moveObstacles(3000, 'krab', 2, 39, 1)
  }

  // A function to add obstacles (sprite classes) onto the grid.
  function addObstacles(obstacles, indexRow, className) {
    obstacles[indexRow].forEach(obstacle => {
      cells[obstacle].classList.add(className)
        })
    }

  // A function to remove obstacles (sprite classes) from the grid.
  function removeObstacles(obstacles, className) {
    obstacles.forEach(obstacle => {
      cells[obstacle].classList.remove(className)
      })
    }

    
  // A function that takes the obstacle arrays by row number and maps a new array moving the sprite grid positions.
  // Different interval times passed into this function .
  function moveObstacles(intervalTime, className, obstacleRow, targetCell, movement = 1) {
    timer = setInterval(()=> {
    removeObstacles(obstacleCells[obstacleRow], className)
    // Remove obstacles first.
    // console.log('removing obstacles')
    obstacleCells[obstacleRow] = obstacleCells[obstacleRow].map(obstacleIndex => {
    // Mapping a new array moving the grid positions either plus or minus one.
    // If statement to prevent obstacles moving onto a new row and move grid positions back to the start of their row.
      if (movement === 1 && obstacleIndex >= targetCell) {
        return obstacleIndex -= 9
      } else if (movement === -1 && obstacleIndex <= targetCell) {
        return obstacleIndex += 9
      } {
        return obstacleIndex + movement
      }
    })
    // Add sprite classes to new obstacle positions on the grid.
    addObstacles(obstacleCells, obstacleRow, className)
    // console.log('adding obstacles')
    handleCollision()
  }, intervalTime)
}

  function handleCollision() {
    // Checking that each obstacle cell in the obstacle arrays doesn't contain the Bob class.
    // If they do, remove Bob from the grid and start him at the starting position.
    obstacleCells.forEach(row => {
      row.forEach(obstacle => {
        if (cells[obstacle].classList.contains('bob')) {
        removeBob()
        currentPosition = startingPosition
        addBob(startingPosition)
      }
    })
  })
}
    
  // ! Events
  document.addEventListener('keydown', moveBob)
  startBtn.addEventListener('click', start)
  
  
  // ! Page Load
  createGrid()
    
  }
  
  window.addEventListener('DOMContentLoaded', init)