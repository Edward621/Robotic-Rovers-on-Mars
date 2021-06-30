# Robotic Rovers on Mars

## Table of Contents

- [Install](#install)
- [Introduction](#introduction)
- [Description](#description)
- [Input & Output](#input output)
- [Test](#test)
- [Improvement](#improvement)


## Install

This is a [Node](https://nodejs.org/en/) console application.
You need to have [node](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/) installed in you machine.

Here is how you can clone & run the project:

1- clone from the repository:

```sh
$ git clone https://github.com/Edward621/Robotic-Rovers-on-Mars.git
```

2- Go to the project root directory:

```sh
$ cd <project-directory>
```

3- install project dependencies:

```sh
$ npm install
```

4- run console application:

```sh
$ npm start
```


## Introduction

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover’s position and location is represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.


## Description

Assume that the square directly North from (x, y) is (x, y+1).

INPUT: The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover’s position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover’s orientation.

Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.


## Input & Output

First line of input is upper-right coordinates.
Second line represent current location.
Third line is movement instructions.

Then you can continue entering by second rover's current location (press enter) and movement instructions in the next line (press enter).
By pressing ctr+c the application will show you the current location of each rover respectively and terminate the application.
e.g:

```Input
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

```Output
1 3 N
5 1 E
```


## Test

For running unit tests simply run the command bellow:
```sh
$ npm test
```


## Improvement
Improvements can make to this application which few of them are as follow:

1- Since we have upper-right coordinates of the plateau we can check if the movement instructions leads rover to move out of the boundary.
when the lower-left coordinates are assumed to be 0,0 and upper-right coordinates for the above example is (5, 5), rover's X position must be always within [0, 1, 2, 3, 4, 5] range & rover's Y position must be always within [0, 1, 2, 3, 4, 5] range.

2- Keep track of all current rovers location, so each rover won't collapse after new movement instructions with the other one.

3- Always can write and keep rover's previous & current location in file.
