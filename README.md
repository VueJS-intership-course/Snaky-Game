# Snaky

As anyone of you know the most popular game for old mobiles phones is Snake. Now is your turn to implement it for the browser using **CSS**, **Javascript** and **HTML.**

In case you do not hear about that game you can check [here](https://en.wikipedia.org/wiki/Snake_(video_game_genre))

So here are the requirements:

As you write modern javascript you should setup a project with integrated [linter](https://eslint.org/) and package bundler like [Vite](https://vitejs.dev/). 

About the linter you can use some predefined like [Airbnb](https://github.com/airbnb/javascript) style rules or you can configure it by yourself.

You need to use the OOP Javascript programming for implementing game logic. As hint you should have some game board, snake, food object and each of them should have some position in the board, think about inhereintence and what is common between them.

As rules of game are simple:
Player can control the snake using keyboard arrow (up/down/left/right) or it's alternatives (W-up/A-left/S-down/D-right).

As target of **player** is to feed the **snake** with so much food as he can. The food that will appear on **randomly position** of the **game board**. After the **head** of snake **collide** with the **food** the food will **disappear** from the board and snake will **grow**. With each eaten food **score** of the **player** and **movement speed** of the **snake**  will be increased.

Here are the type of food for simplify visualize the food as square with size same as a segment of the snake ex. (20px/20px) and different color.

The snake will be fully vegan and will eat only fruits. :D

| Food Name | Score points | Color |
| ----------- | ------- | ----------- |
| Cherry | 10 | Red |
| Banana | 50 | Yellow |

The game will **over** only if the snake eats itself (it would not be vegan anymore :( ))

If snake collide with the game board wall, it position should be mirrored of the other side of the wall.

And after all, as mentioned earlier, the player will collect a score for each eaten food. For every player score and date of achievement should be stored on the local storage of the browser. Before each new game user should be prompted to enter it nickname. Scoreboard should appear at the sam page after game board. And entries in ot should be **sorted** by highest achived score for example.

| Name | Score | Date |
| --- | --- | --- |
| Bob | 1000| 2023-07-30 |
| Alan | 950 | 2023-08-01 |



Some technical hints:
Every game has a loop thats is called "game loop" research what is it and how can be implemented in Javascript way.


Imagine that you are working as a part of team and you should use git flow way to organize code commitments to your repository. For each milestone of your project you should create separate ``feature branch`` and when the milestone has been completed it will be merged into ``master``

Feel free to ask any question during the development. Good luck and have a snaky week :)


