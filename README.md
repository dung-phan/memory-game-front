# MEMORY GAME

## What this project is about

Memory game is a game application aimed to show my approach to the assignment and efforts to practice a less familiar framework (Vuejs).

The application can be navigated between two main pages (home and game) with an extra page of history where they can see their previous game results.

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[File Structure](#file-structure)**
- **[Installation](#installation)**
- **[Improvements](#improvements)**

## Technologies used

The front-end is designed with Vue and styled with CSS.

## File Structure

```
-src
 -assets
 -components
  -game
  -home
  -history
 -App
 -main.js
 -routes.js
-README.md
```

# Installation

1. First, make sure to set up the backend [Server](https://github.com/dung-phan/memory-game-server)

2. Git clone the [Front-end](https://github.com/dung-phan/memory-game-front)

   ```
   $ git clone
   $ cd ./memory-game-front
   $ npm install
   ```

3. Run the app:
   ```
   $ npm run run dev
   ```

## Improvements

- The app is designed for laptop users only and therefore is not responsive. It is tested only on Chrome.
- Sometimes the app can be a bit out of sync (when switching between games), which I think is due to the issue with fetching data before navigation.
- For extra features, a state management can be useful for:

1. Record different players' results
2. Have an option to undo their moves
3. Replay the games that they lost.
4. Increase the level of difficulty based on their last performances (which can be done in the back-end)

