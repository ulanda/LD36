# The Ancient Shaman
Hi, this is my first Jam, it has been a great experience, I'm happy just being able to do "something". 

I tried to make an "educational" game that would help you to learn binary. 

All of you already know binary so it should be easy for you to beat :) 

My lack of gfx skills is a mayor problem for this category, but I like the idea of improving on that in the future. 

I'm not done yet as I'll try to extend the tutorial a bit more and is possible I would like to add some kind of "enemies" that difficult your movements... 

This time sound is totally out off scope :-( 
    
The Ancient Shaman by
[ulanda](https://github.com/ulanda).

Initial scaffolding generated with [generator-gamejam](https://github.com/belen-albeza/generator-gamejam/).

## Installation

### Requirements

This games uses [gulp](http://gulpjs.com/) for building and tasks automation.

You can install gulp with npm:

```
npm install -g gulp
```

### Build

Clone this repository and install dependencies:

```
git clone ulanda/LD36
cd LD36
npm install
```

To **build** the game, run the `dist` task from the project root:

```
gulp dist
```

The `dist` folder will contain a build of the game. You can then start a local server that serves this directory statically to play the game in local:

```
npm install -g http-server
http-server dist
```

You can **clean up** the temporary files and the `dist` folder by running:

```
gulp clean
```

## Development

This project uses [Browserify](http://browserify.org) to handle JavaScript modules.

There is a task that will automatically run Browserify when a JavaScript file changes, and it will also reload the browser.

```
gulp run
```





You can deploy to **Github Pages** with the `deploy:ghpages` task, which will build the project and then push the `dist` folder in the `gh-pages` branch.

```
gulp deploy:ghpages
```

