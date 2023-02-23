function init() {

  // ! Generating a grid

  
  // Variables
  const startBtn = document.querySelector('#startBtn')
  const startingPosition = 94
  let currentPosition = startingPosition
  const livesDisplay = document.querySelector('#lives-display')
  livesDisplay.style.visibility = 'hidden'
  let lives = 3

  // Obstacle positions generated on the grid by being passed into addObstacles function.
  const obstacleCells = [
    [81, 83, 85, 87],
    [61, 62, 63, 66, 67],
    [41, 42, 43, 46, 47, 48],
    [59],
    [70]
  ]

  const woodCells = [
    [10, 11, 13, 14, 15, 17],
    [21, 22, 23, 25, 26, 27],
    [31, 34, 37]
  ]

  const waterCells = [
    [12, 16, 18, 19],
    [20, 24, 28, 29],
    [30, 32, 33, 35, 36, 38, 39]
  ]
    
  // Creating the grid
  const cells = []
  const grid = document.querySelector('.grid')
  const width = 10
  const height = 10
  const cellCount = width * height
  const finish = Math.floor(Math.random() * 10) // random position form 0 - 10

  const easy = document.querySelector('#easy') // Easy start button 
  const medium = document.querySelector('#medium') // Medium start button
  const difficulty = document.querySelector('.difficulty') // Difficult start button
  const arrows = document.querySelector('#arrows')
  const controls = document.querySelector('.controls')
  
  


  // A function to add a random cell from 0-10 as a goal for Bob to reach.
  function addFinish() {
    cells[finish].classList.add('finish')
  }
  
  const playAgain = document.querySelector('#playAgain')
  playAgain.style.visibility = 'hidden'
  grid.style.visibility = 'hidden'

  

  function createGrid(){
  // Using the total cell count we've saved to a variable then using a for loop to iterate that many times.
    for(let i = 0; i < cellCount; i++){
  // Create div cell, add index as innerText, add Data attribute representing index.
      const cell = document.createElement('div')
      // cell.innerText = i
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
    checkFinish()
    }
  
  // Large function to start the game. 

  function easyStart() {
    addBob(startingPosition)   
    grid.style.visibility = 'visible'
    livesDisplay.style.visibility = 'visible'
    difficulty.remove()
    arrows.remove()
    checkFinish()
    addFinish()
    handleCollision()
    addObstacles(obstacleCells, 0, 'patrick')
    addObstacles(obstacleCells, 1, 'squidward')
    addObstacles(obstacleCells, 2, 'krab')
    moveObstacles(2000, 'patrick', 0, 80, -1)
    moveObstacles(2000, 'squidward', 1, 69, 1)
    moveObstacles(2000, 'krab', 2, 49, 1)
    addWood(woodCells, 0, 'wood')
    addWood(woodCells, 1, 'wood')
    moveWood(2000, 'wood', 0, 19, 1)
    moveWood(2000, 'wood', 1, 20, -1)
    addWater(waterCells, 0, 'water')
    addWater(waterCells, 1, 'water')
    moveWater(2000, 'water', 0, 19, 1)
    moveWater(2000, 'water', 1, 20, -1 )
    
  }

  function mediumStart() {
    addBob(startingPosition)   
    grid.style.visibility = 'visible'
    livesDisplay.style.visibility = 'visible'
    difficulty.remove()
    arrows.remove()
    checkFinish()
    addFinish()
    handleCollision()
    addObstacles(obstacleCells, 0, 'patrick')
    addObstacles(obstacleCells, 1, 'squidward')
    addObstacles(obstacleCells, 2, 'krab')
    addObstacles(obstacleCells, 3, 'gary')
    moveObstacles(500, 'patrick', 0, 80, -1)
    moveObstacles(500, 'squidward', 1, 69, 1)
    moveObstacles(500, 'krab', 2, 49, 1)
    moveObstacles(200, 'gary', 3, 50, -1)
    addWood(woodCells, 0, 'wood')
    addWood(woodCells, 1, 'wood')
    addWood(woodCells, 2, 'wood')
    moveWood(500, 'wood', 0, 19, 1)
    moveWood(500, 'wood', 1, 20, -1)
    moveWood(500, 'wood', 2, 39, 1 )
    addWater(waterCells, 0, 'water')
    addWater(waterCells, 1, 'water')
    addWater(waterCells, 2, 'water')
    moveWater(500, 'water', 0, 19, 1)
    moveWater(500, 'water', 1, 20, -1 ) 
    moveWater(500, 'water', 2, 39, 1 )    
  }

  function start() {
    addBob(startingPosition)   
    grid.style.visibility = 'visible'
    livesDisplay.style.visibility = 'visible'
    difficulty.remove()
    arrows.remove()
    checkFinish()
    addFinish()
    handleCollision()
    addObstacles(obstacleCells, 0, 'patrick')
    addObstacles(obstacleCells, 1, 'squidward')
    addObstacles(obstacleCells, 2, 'krab')
    addObstacles(obstacleCells, 3, 'gary')
    addObstacles(obstacleCells, 4, 'sandy')
    moveObstacles(500, 'patrick', 0, 80, -1)
    moveObstacles(500, 'squidward', 1, 69, 1)
    moveObstacles(500, 'krab', 2, 49, 1)
    moveObstacles(200, 'gary', 3, 50, -1)
    moveObstacles(300, 'grandma', 4, 79, 1)
    addWood(woodCells, 0, 'wood')
    addWood(woodCells, 1, 'wood')
    addWood(woodCells, 2, 'wood')
    moveWood(500, 'wood', 0, 19, 1)
    moveWood(500, 'wood', 1, 20, -1)
    moveWood(500, 'wood', 2, 39, 1 )
    addWater(waterCells, 0, 'water')
    addWater(waterCells, 1, 'water')
    addWater(waterCells, 2, 'water')
    moveWater(500, 'water', 0, 19, 1)
    moveWater(500, 'water', 1, 20, -1 ) 
    moveWater(500, 'water', 2, 39, 1 )    
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

  // A function to add logs (sprite class) onto the grid.
  function addWood(wood, indexRow, className) {
    wood[indexRow].forEach(wood => {
      cells[wood].classList.add(className)
        })
    }

  // A function to remove logs (sprite class) from the grid.
  function removeWood(wood, className) {
    wood.forEach(wood => {
      cells[wood].classList.remove(className)
        })
    }  

  // A function to add water (sprite class) onto the grid.
  function addWater(water, indexRow, className) {
    water[indexRow].forEach(water => {
      cells[water].classList.add(className)
        })
    }
  
  // A function to remove logs (sprite class) from the grid.
  function removeWater(water, className) {
    water.forEach(water => {
      cells[water].classList.remove(className)
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

function moveWood(intervalTime, className, woodRow, targetCell, movement = 1) {
  timer = setInterval(()=> {
  removeWood(woodCells[woodRow], className)
  woodCells[woodRow] = woodCells[woodRow].map(woodIndex => {
    if (movement === 1 && woodIndex >= targetCell) {
      return woodIndex -= 9
    } else if (movement === -1 && woodIndex <= targetCell) {
      return woodIndex += 9
    } {
      return woodIndex + movement
      }
    })
    addWood(woodCells, woodRow, className)

  }, intervalTime)
}


function moveWater(intervalTime, className, waterRow, targetCell, movement = 1) {
  timer = setInterval(()=> {
  removeWater(waterCells[waterRow], className)
  waterCells[waterRow] = waterCells[waterRow].map(waterIndex => {
    if (movement === 1 && waterIndex >= targetCell) {
      return waterIndex -= 9
    } else if (movement === -1 && waterIndex <= targetCell) {
      return waterIndex += 9
    } {
      return waterIndex + movement
    }
  })
  addWater(waterCells, waterRow, className)
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
        lives--
        livesDisplay.innerHTML = lives ? '❤️'.repeat(lives) : '💔'
        currentPosition = startingPosition
        checkFinish()
        addBob(startingPosition)
      }
    })
  })

  waterCells.forEach(row => {
    row.forEach(water => {
      if (cells[water].classList.contains('bob')) {
      removeBob()
      lives--
      livesDisplay.innerHTML = lives ? '❤️'.repeat(lives) : '💔'
      currentPosition = startingPosition
      checkFinish()
      addBob(startingPosition)
    }
  })
})
}
 
  // A function to check if the 'finish' cell contains the Bob class.
  function checkFinish() {
    if (currentPosition === finish) {
    removeBob()
    winGame()
   } else if (lives === 0) {
    endGame()
   }
  }
  
  // A basic function to check the end of the game.  
  function endGame() {
    grid.classList.remove('grid')
    playAgain.style.visibility = 'visible'
    playAgain.innerHTML = `Play again? <img src="../root/assets/Sprites/crying.gif" style="height: 150px">`
    livesDisplay.style.visibility = 'hidden'
    removeBob()
    addBob(startingPosition)
  }

  function winGame() {
    grid.classList.remove('grid')
    playAgain.style.visibility = 'visible'
    playAgain.innerHTML = `Play again? <img src="../root/assets/Sprites/thumbs.gif" style="height: 100px">`
    livesDisplay.style.visibility = 'hidden'
    removeBob()
    addBob(startingPosition)
  }


  // A basic function to reload the page
  function restartGame() {
    location.reload()
  }



  // ! Events
  document.addEventListener('keyup', moveBob)
  startBtn.addEventListener('click', start)
  playAgain.addEventListener('click', restartGame)
  easy.addEventListener('click', easyStart)
  medium.addEventListener('click', mediumStart)

  // ! Page Load
  createGrid()
    
  }
  
  window.addEventListener('DOMContentLoaded', init)
  
  