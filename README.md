# Project 1: Spongebob Frogger!

## Description

With three weeks of software engineering behind us, it was time for our first project. Our task was to render a game in the browser to be deployed online and accessed anywhere.

## Deployment Link

The game is deployed [here](https://tommycroot.github.io/Project-1-Frogger/ )

<img src="https://user-images.githubusercontent.com/80596226/236468964-642be0c8-4a32-46d1-aab5-cadb98da5071.png" width="70%" height="70%">

## Getting Started/Code Installation

Use the clone button to download the game and source code. Simply open the index.html file in your browser and the game should start. The images and audio for this game are stored in the assets folder.

## Timeframe & Working Team

This was a solo project and we were given one week to complete it.

## Technologies Used

```
HTML
CSS
JavaScript
Git 
GitHub
Exacalidraw
```

## Brief

The project brief was to build a game using HTML, CSS and JavaScript. This was a great opportunity to use JavaScript for DOM manipulation, sharpen up our HTML/CSS markup skills and regularly use Git and GitHub to update our code as the project developed. We were to adhere to the principles of KISS (Keep It Simple, Stupid) and DRY coding (Don’t Repeat Yourself.)

I choose to recreate the game Frogger because it’s one of the first games I remember playing. The aim of Frogger is for the player to try and move safely from one end of a level to the other. They must do this whilst avoiding collisions with moving obstacles at different speeds who are trying to thwart the player in their goal.

## Planning

The first bit of planning I did was to create a wireframe using Excalidraw. I tried to include as much info about how the game would work as I could, whilst also trying to identify any potential problems I may encounter. During this stage I planned to use classes to place my characters on the grid, handle collisions and detect how frogger wins the game.	

After this, I spent a while pseudocoding and trying to plan out as many variables, functions and events were going to be required to get a better picture of the project in my mind as well as having something to refer back to if I was lacking inspiration. This was helpful as it helped me develop a clearer outline of how to build the game and it got me imagining ways to solve some of the problems identified in the wireframe stage. For instance, it made sense to get the grid implemented and the frogger character moving first before trying to get the obstacles appearing and moving as I felt more comfortable with coding that section. It also made me realise in what order to do some tasks and how to break them down into smaller functions e.g. deciding to code the obstacles appearing first before tackling getting them moving or trying to attempt both in one function. 

![Exaclidraw plan](https://user-images.githubusercontent.com/80596226/236474725-0b3c9a6a-e3c7-4bff-b983-11b3e113777f.png) 
<figcaption>This is a plan created in Exaclidraw.<figcaption>

## Build/Code Process 

### Creating the grid:

Firstly, I created a grid for the frogger character to move vertically and horizontally on and for obstacles to move across. I achieved this by using DOM manipulation to push cells into an empty div with a for loop. 

![Exaclidraw plan](https://user-images.githubusercontent.com/80596226/236476582-a2b27d4a-a3c8-4f0b-a5fa-1f3fd55ce789.png) 
<figcaption>Here the grid is created by targeting the div with the class name of ‘grid.’<figcaption>

### Frogger (Bob) Movement

I decided to use a Spongebob Squarepants theme to make the project a lot more fun to look at. I used standard ‘Up’, ‘Down’, ‘Left’ and ‘Right’ arrows on the keyboard linked to a ‘keyup’ addEventListener to control player movement. If statements within the function were used to ensure that Spongebob couldn’t move past the perimeter of the grid and onto rows or columns on the other side. 

![2023-05-05 (4)](https://user-images.githubusercontent.com/80596226/236477134-63b069ad-cd9e-437a-a0a9-edd9d06d2252.png)
<figcaption>The Bob sprite is added to the starting position by adding that class to the ‘position’ cell. Bob is removed first from his current cell before moving to a new cell. </figcaption>

### Start Game Function

Based on the work we had done previously, it seemed pertinent to create a start function to initiate the game. Before I could start making any functions to add, remove and move anything across the grid, there needed to be a function in place to handle it. Later on, you will see how this function evolved.

### Adding/Removing Obstacles

My whole strategy for creating the Frogger game was predicated on being able to take arrays and pass them into a function that used the map array method to return new arrays with their cell positions moved on the grid. I created cell positions arrays that contained obstacle classes (later on becoming character sprites) to test this.  I then created forEach functions that took these arrays and then either added or removed the obstacles from the grid. I then moved these functions into the start game function. Once the start function was initialised, I could see the obstacles appear for a split second and then disappear. By using console.log I was able to confirm that the functions were working as expected. 

![2023-05-05 (6)](https://user-images.githubusercontent.com/80596226/236477690-8d306f74-6f1a-43dd-842c-d61cbc858924.png)
<figcaption>The ‘addObstacles’ function is used to add obstacle sprites to specific cells in the grid and ‘removeObstacles’ removes them. The array of arrays is called ‘obstacles’ and each inner array contains the indexes of the cells where the sprites should be placed/removed.</figcaption>

### Moving Obstacles

Next up was the challenge of making the obstacles move across the grid. After wrestling with the logical challenges this presented for a while, I eventually designed a function that included multiple arguments to make the obstacles customisable and also eradicate the need for multiple functions. I realised that by targeting the index of the row of obstacles in the array as an argument of the function, I was able to use this function repeatedly and avoid writing a function for every row. So I added that argument to the addObstacles function. Also included in this function is an argument for the direction that the obstacle’s movement is to travel in and a targetCell argument used to make sure the obstacles stayed within their rows. Finally, by using a timer and setting the interval time as an argument,  I realised I could simply pass in different interval times and achieve obstacles moving at different speeds. Later on, this function was recreated to move logs and water together. The water and log cell position arrays had to fill the whole row and they had to have exact interval times to work properly. 

![2023-05-05 (7)](https://user-images.githubusercontent.com/80596226/236478356-3a4c1500-a6d0-40db-98f0-d81fa968d5ec.png)
<figcaption>Inside the function, a ‘setInterval’ method is used to create a timer that repeatedly executes the code inside the function at the specified interval. The ‘intervalTime’ is customisable so that obstacles can travel at different speeds. </figcaption>

### Handling Collisions

The handling of collisions was included in the function to move obstacles when it was completed, but it was created after. This function again uses a forEach method and it checks if the cells in the array rows passed into the moveObstacles function are containing the class of Bob or not. If the cell does contain the class of Bob, then Bob is removed from the grid and placed at the starting position. This function was then recreated further on in my project for the water cells.

![2023-05-05 (8)](https://user-images.githubusercontent.com/80596226/236478891-0332267f-7c22-4779-bb57-b4f877df1be6.png)
<figcaption>The function iterates through the ‘obstacleCells’ array and checks if the cells also contain the ‘bob’ class. If a collision is detected, the function calls the ‘removeBob’ function, decrements the ‘lives’ counter, plays an audio file to indicate the collision, updates the ‘livesDisplay’ element to show the current number of lives, sets the ‘currentPosition’ variable to the ‘startingPosition’, calls the ‘checkFinish’ function to check if the game has ended and finally calls the ‘addBob’ function to add the player sprite back to the starting position.</figcaption>

### Winning The Game

<img src="https://user-images.githubusercontent.com/80596226/236890008-6e20edde-9744-479e-87a6-c8cb943aa9c5.png" width="70%" height="70%">

I generated a random cell from 0-9 on the top line of the grid and stored it as a variable. Then I made an addFinish function that targeted the cell with the i of the random number and added the finish class to it. If SpongeBob can make it all the way to that cell, then the game is won. 

I created a ‘checkFinish’ function to check if the cell currently containing the SpongeBob class also included the class of finish. If it does then the game is won. Within this same function, I also implemented an if statement to check if SpongeBob has any lives left. If he doesn’t, then unfortunately the game is lost.  There were also win game and end game functions largely made up of different CSS stylings to display different results of a game finish. These were later added and used within the checkFinish function.

![2023-05-05 (9)](https://user-images.githubusercontent.com/80596226/236479307-3eba5c85-e6b2-4846-b6c7-9a7d4810f64e.png)
<figcaption>The ‘checkFinish’ function is called to check if the player has reached the finish cell or if the player has run out of lives. The ‘endGame’ and ‘winGame’ functions both remove the ‘grid’ class from the game board element making it disappear from the screen. They also set the ‘visibility’ style property of the ‘playAgain’ button to ‘visible’ so the player can restart the game and the ‘livesDisplay’ element is hidden since the game has ended. Finally, the ‘restartGame’ function is called when the player clicks the ‘playAgain’ button to reload the page and start a new game.</figcaption>

### Difficulty Levels

I added different difficulties to the game by creating three different start functions that the player can choose from on the main screen. These were added as event listeners to three different difficulty buttons. Since the interval time of the obstacles and water movement are arguments, I could easily customise the speed in which they move across the screen. In addition, I could simply add a new array to the obstacles array, target that array with the indexRow argument used in the move obstacles function and add a new class to it by modifying its class argument. 

![2023-05-05 (10)](https://user-images.githubusercontent.com/80596226/236479842-c97750c3-a18e-493e-b44d-092f503555f1.png)
<figcaption>The start functions set up the game grid, adds and removes CSS properties from elements and starts the game with obstacles, wood and water moving across the grid.</figcaption>

## Challenges 

Due to the fact I never implemented a proper reset game function and was using location.reload instead; the game never reloads until that function is called on the end screen. This didn’t seem to cause any issues until later on when I attempted to implement levels. I felt like I didn’t have enough time to solve all the problems that this was complicating and so I instead created difficulty settings as a means to an end as I really wanted to add more gameplay to the finished project. I should have planned the end game reset functionality properly when designing the game in retrospect. Other problems I encountered were knowing exactly where to insert certain functions and in what order they needed to be in for the logic to work. This was most problematic in terms of adding/removing objects inside the move objects function and in particular the handling of collisions between Bob and the obstacles. It took me a while to achieve both Bob and the obstacles’ checking for collisions. This was generally solved by trial and error and thinking through step by step what I was trying to achieve. 

## Wins 

I am happy to have completed the MVP and added additional enhancements within the timeframe. I am most pleased to have produced a solid game that functions properly. I think the game is quite nice to look at and it plays well too. Some of the logic used to create a couple of my functions has thankfully kept them relatively short and the fact that they have been reusable too is pleasing.

<img src="https://user-images.githubusercontent.com/80596226/236480543-b9c13eb8-5e19-4b1d-9253-2edbe19374cd.png" width="70%" height="70%">

## Key Learnings/Takeaways

I feel so much more comfortable with JavaScript after completing this task. It was fun being able to customise how the obstacles moved across the screen and interesting to see how creating lots of little functions can lead to a massive function handling a lot! I think in general completing a game like this from start to finish has given me the confidence to believe that I can start projects and complete them, even if I don’t have everything figured out at the start. I have also really learned how much planning can help a project in this regard. I believe spending a long time pseudo coding was beneficial to my project working out as well as it did. I also feel like the problems that still exist now that the deadline has passed could have been solved if I had spent more time pseudo coding these areas specifically. 

## Bugs

The finished project is pretty much bug free, but there are a couple of issues that still exist mainly caused by CSS and HTML imperfections. These bugs are most likely due to a lack of knowledge and experience of these technologies. These little bugs aren’t really visible to the user but they did hinder my ability to implement more sound enhancements and CSS stylings. However, the user can see the page is slightly too big on the main screen, which is caused by an inability to temporarily remove a certain div. A big JavaScript bug I encountered was caused by the lack of a proper reset game function discussed earlier. I had to disable Bob’s controls entirely if he lost all his lives or won the game because he was still able to move around even after the grid was removed. This meant he was still able to lose the game or win the game after the final results were displayed and could even change the outcome results! Thankfully I was able to squash this bug.

## Future Improvements

In the future I would like to add proper reset game functionality and implement a proper levels system. I’d also like to add a timer to beat, points to win and collectibles for Bob to obtain. I’d also like to fix all of the structural layout issues and add further CSS enhancements to the main screen. I’m also keen to experiment with CSS animations and apply local storage functionality to the project too. 


