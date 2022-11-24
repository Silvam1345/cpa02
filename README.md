# NBA Search App

This is an app which allows the user to create an account
to view an api database of all registered players in the NBA 
as of the year 2022, as well as create a list of favorite players.

Link to the site on Railway: https://nba-search-app.up.railway.app/

## Using the App
On the main page, the user can search for players by either their first 
or last name, their id number, or by letter. 

![Main_page](/public/images/ScreenShot2022-11-20at10.47.37AM.png)

From there, they can click on the player's name to get the page of the player's info.

![List_of_players](/public/images/ScreenShot2022-11-20at10.52.14AM.png)

![Player's_page](/public/images/ScreenShot2022-11-20at10.52.38AM.png)

Users must be signed in or logged in to add the player to their list of favorite players.
These players can also be removed from the list. 

![Favorites_Page](/public/images/ScreenShot2022-11-20at10.53.34AM.png)

## Installation
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
npm start
```
or install nodemon (the node monitoring app) with
``` bash
npm install -g nodemon
```
and start the project with
``` bash
nodemon
```
