# MalagaProject
## Introduction
This is our project, a videogame like Kahoot, but simpler.
In the home page the user has to enter his username and choose a category between art, videogames, geography and food.
Then he will need to click the "start" button and he will be redirected to the game page, where will be shown random questions regarding the selected category.
After answering ten questions there will be an "Award page" where the score will be displayed, there will be two other buttons, one to return to the home page, while the other one to see the correct answer (with explanation) to the questions.

## Versions
Our project has 2 version:
+ The first version, which we have finished.
+ The second version, which we haven't finished.

## Languages and tools that we used
For the site we used:
+ HTML: for the structure of the site
+ CSS: for the style of the site
+ JavaScript: to manage the behavior of the page
+ Java: to manage the databse requests using SpringBoot API in the second version


We had a server available for this project, we set it up with Ubuntu 20.04, Apache and Docker.

To use it, we used SSH and SFTP protocols, using MobaXxTerm an SSH, SFTP etc... client.

To code we mainly used VisualStudioCode for the frontend, and for the backend we used Intellij IDEA Ultimate. 


In the second version we used Databases to manage players and questions and to make a scoreboard.
The databases that we used are:
+ MongoDB
+ PostGreSql


## Differences between first and second verison
In the first version the game pick questions from JavaScript code and there isn't any interaction with others players in game.

In the second version the game do a HTTP request to the server to pick questions from the database.
Furthermore people have to login to the server with username and there is a scoreboard that allow to see others players' points.
We haven't finished this version, because HTTP requests and their management give us some problems (we think that the problem is mainly in Java backend).

Nobody of us have never worked with HTTP requests and databases, despite that we decide to try them and "go out of the comfort zone".


## The server now
The server now hosts the second version that doesn't work, to exchange the second version with the first one you have to substitute all files in:

> /var/www/game/  _(here there is the second version now)_

with files in:

> /home/ubuntu/OfflineGame/

___There isn't any copy of the second version into the server, so if you want to replace the version make sure you have copied the second version to another place.___

To access to Java Code you have to go to:
> /home/ubuntu/backendCode


## Authors
Marco Simeone

Daniele Campana

Stefano Cavassa

Riccardo Fracassi

Lorenzo Carlo Sasso

Francesco Domenico Totaro

Claudio Vito Catalano

Giulia Cagnano
