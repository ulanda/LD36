(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


var intro0 = [
  [1,"Long time ago..."],
  [1,""],
  [1,""],
  [1,"In the old gory days of humanity, those days were the days of"],
  [1,"TECHNOLOGY, knowelge and magic!!"],
  [1,""],
  [1,""],
  [1,"There was an ANTICENT chaman, who predicted our end...."],
  [1,""],
  [1,""],
  [1,"I don't know when the next war is goig to be..."],
  [1,""],
  [1,"But whay I can tell you NOW is that the after that,"],
  [1,"will be using our bare hands..."],
  [1,""],
  [1,"............ he said."],
  [1,""],
  [1,"His name was Einstein..."],
  [1,""]
];

var intro1 = [
  [1,"He was right, there was a big war nobody can remember now, "],
  [1,"but after that all our knowege was lost forever..."],
  [1,""],
  [1,""],
  [1,"Now with live fighting for survive... "],
  [1,"... in ths world of MONSTERS and BEASTS..."],
  [1,""],
  [1,""],
  [1,"Legends says that some of the gold-days"],
  [1,"citicens survived, and escape the DEAD..."],
  [1,""]
];

var intro2 = [
  [1,"They build a complete new world, its said that.."],
  [1,"It is located after the great walls, but they look it..."],
  [1,"in a way only EXCEPTIONAL humans can pass the walls."],
  [1,""],
  [1,"For that you have to deciper how that ANTICENT TECNOLOGY"],
  [1,"works and unlock all the walls that will bring you"],
  [1,"to the world of tecnology and magic."],
  [1,""],
  [1,""],
  [1,"GOOD LOOK my friend!!!!"],
  [4,""],
];

var start_time;
var curent_page  = 0;
var curent_line  = 0;
var line_speed   = .5;
var page_speed   =  3;
var next_time;
var Pages = [ intro0, intro1, intro2 ];

var was_click = false;

var IntroScene = {
	
create: function () {
  start_time = this.game.time.totalElapsedSeconds();
  next_time  = start_time;
  curent_page = 0;
  curent_line = 0;
},


update : function () {

},

render : function () {
  var posx = 100;
  var posy = 150;
  var PAGE = Pages[curent_page];
  this.game.debug.text("Current Page: "+curent_page+" Current Line: "+curent_line, 0,0 );

  for (var index = 0; index < curent_line; index++) {
    this.game.debug.text( PAGE[index][1], posx, posy );
    posy = posy + 20;
  }  
  
  var skip_time = false;
  if (this.game.input.activePointer.isDown != was_click )
  {
    skip_time = true;
    was_click = !was_click;
  }
  
  if(next_time < this.game.time.totalElapsedSeconds() || skip_time)
  {    
    var line_time = PAGE[curent_line][0]*line_speed;
    next_time = this.game.time.totalElapsedSeconds() + line_time;
    curent_line++;

    if(curent_line+1 == PAGE.length)
      next_time = this.game.time.totalElapsedSeconds() + page_speed;

    if(curent_line >= PAGE.length)
    {
      curent_line = 0;
      if(curent_page+1 >= Pages.length)
        this.game.state.start('play');
      else
        curent_page++;
    }
  }



}

};

module.exports = IntroScene;




},{}],2:[function(require,module,exports){
'use strict';


var level0 = [
    { 
        editable: 'VALUE',
        VAL: 2,
        res: 0,
        inputA: null,
        inputB: null,
        imgB:null,
        imgN:null,
        x:100,
        y:100,
    },
    {
        editable: 'VALUE',
        VAL: 4,
        res: 0,
        inputA: null,
        inputB: null,
        imgB:null,
        imgN:null,
        x:500,
        y:100,
    },
    {
        VAL: 'or',
        res: 0,
        inputA: 0,
        inputB: 1,
        imgB:null,
        imgN:null,
        imgM:null,
        x:300,
        y:300,
    },
];

var level1 = [
    { 
        editable: 'VALUE',
        VAL: 2,
        res: 0,
        inputA: null,
        inputB: null,
        imgB:null,
        imgN:null,
        x:100,
        y:100,
    },
    {
        editable: 'VALUE',
        VAL: 4,
        res: 0,
        inputA: null,
        inputB: null,
        imgB:null,
        imgN:null,
        x:500,
        y:100,
    },
    {
        VAL: 'and',
        res: 0,
        inputA: 0,
        inputB: 1,
        imgB:null,
        imgN:null,
        imgM:null,
        x:300,
        y:300,
    },
];
var level2 = [
    { 
        editable: 'VALUE',
        VAL: 2,
        res: 0,
        inputA: null,
        inputB: null,
        imgB:null,
        imgN:null,
        x:100,
        y:100,
    },
    {
        editable: 'VALUE',
        VAL: 4,
        res: 0,
        inputA: null,
        inputB: null,
        imgB:null,
        imgN:null,
        x:500,
        y:100,
    },
    {
        VAL: 'xor',
        res: 0,
        inputA: 0,
        inputB: 1,
        imgB:null,
        imgN:null,
        imgM:null,
        x:300,
        y:300,
    },
];


var LevelArray = [
    {result: 5,  map:level0},
    {result: 10, map:level1},
    {result: 15, map:level2},
];
    
module.exports = LevelArray;

},{}],3:[function(require,module,exports){
'use strict';

var PlayScene = require('./play_scene.js');
var IntroScene = require('./intro_scene.js');

var preloads = [
    { val: 'PANEL', id: 'panel',},
    { val: 'AND',   id: 'and',},
    { val: 'AND2',  id: 'and2',},
    { val: 'NOT',   id: 'not',},
    { val: 'OR',    id: 'or',},
    { val: 'XOR',   id: 'xor',},
    { val: 'N0',    id: 'n0',},
    { val: 'N1',    id: 'n1',},
    { val: 'N2',    id: 'n2',},
    { val: 'N3',    id: 'n3',},
    { val: 'N4',    id: 'n4',},
    { val: 'N5',    id: 'n5',},
    { val: 'N6',    id: 'n6',},
    { val: 'N7',    id: 'n7',},
    { val: 'N8',    id: 'n8',},
    { val: 'N9',    id: 'n9',},
    { val: 'NA',    id: 'na',},
    { val: 'NB',    id: 'nb',},
    { val: 'NC',    id: 'nc',},
    { val: 'ND',    id: 'nd',},
    { val: 'NE',    id: 'ne',},
    { val: 'NF',    id: 'nf',},
];

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.load.image('preloader_bar', 'images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.load.spritesheet('pannelKey', 'images/PANEL.png', 86, 84);
    for (var index = 0; index < preloads.length; index++) {
        var element = preloads[index];
        this.load.image(element.id, 'images/'+element.val+'.png');
    }

  },

  create: function () {
    this.game.state.start('intro');
  }
};


window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('intro', IntroScene);
  game.state.add('play', PlayScene);

  game.state.start('boot');
};

},{"./intro_scene.js":1,"./play_scene.js":4}],4:[function(require,module,exports){
'use strict';

var LevelArray = require('./levels.js');
var currentLevel;
var currentLevelIdx = 0;
var currentLevelResult = -1;

var images = ['n0','n1','n2','n3','n4','n5','n6','n7','n8','n9','na', 'nb','nc','nd','ne','nf'];

var game;
var player;
var exit = null;

var wait_for_input   = false;
var locked_for_input = -1;
var last_input       = -1; 
var planel_sprite    = null;

var render_scale = 2;


var PlayScene = {
	
  create: function () {
    game = this.game;

    player = game.add.sprite(200, 500, 'and2');
    player.width = 25*render_scale;
    player.height = 25*render_scale;
    player.anchor.x = .5;
    player.anchor.y = .5;
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    this.loadLevel(0);
  },

  loadLevel : function ( new_level ) {
    if(currentLevel!=null)
    {
        for (var index = 0; index < currentLevel.map.length; index++) {
            var element = currentLevel.map[index];
            if(element.imgM != null)
            {
                element.imgM.pendingDestroy = true; 
                element.imgM = null; 
            }
            if(element.imgB != null)
            {
                element.imgB.pendingDestroy = true; 
                element.imgB = null; 
            }
            if(element.imgN != null)
            {
                element.imgN.pendingDestroy = true; 
                element.imgN = null; 
            }
        }
    }

    if(new_level>=LevelArray.length)
        new_level = 0;

    currentLevel    = LevelArray[new_level];
    currentLevelIdx = new_level;
    currentLevelResult = -1;
    for (var index = 0; index < currentLevel.map.length; index++) {
        currentLevel.map[index].val = currentLevel.map[index].VAL;
    }

    if(exit!=null)
    {
        exit.pendingDestroy = true; 
        exit = null; 
    }

    exit = game.add.sprite(350,500, 'pannelKey', currentLevel.result);
    exit.width  = 50*render_scale;
    exit.height = 50*render_scale;
    
  },

  updateWinCondition : function () {
    if(locked_for_input>=0 )
        return;

    currentLevelResult = currentLevel.map[currentLevel.map.length-1].res;
    if(currentLevel.result == currentLevelResult)
    {
        this.loadLevel(currentLevelIdx+1);
    }
  },

  updatePlayerMoves : function () {
    if(locked_for_input>=0 )
    { 
        player.body.velocity.set(0);
        return;
    }
    //  If the sprite is > 8px away from the pointer then let's move to it
    if (game.physics.arcade.distanceToPointer(player, game.input.activePointer) > 8)
    {
        //  Make the object seek to the active pointer (mouse or touch).
        game.physics.arcade.moveToPointer(player, 200);
    }
    else
    {
        //  Otherwise turn off velocity because we're close enough to the pointer
        player.body.velocity.set(0);
    }
  },


  updateWorldLogic : function () {
    if(locked_for_input>=0 )
        return;
    
    for (var index = 0; index < currentLevel.map.length; index++) {
        var element = currentLevel.map[index];
        var prev    = element.res;
        if(element.inputA==null || element.inputB==null)
        {
            element.res = element.val;
        }
        else
        if(element.inputA!=null && element.inputB!=null)
        {
            if(element.imgM==null)
            {
                element.imgM = game.add.sprite(element.x+(25*render_scale), element.y-(25*render_scale), element.val);            
                element.imgM.width  = 50*render_scale;
                element.imgM.height = 25*render_scale;
            }
            switch (element.val) {
                case 'or':
                    element.res = currentLevel.map[element.inputA].res | currentLevel.map[element.inputB].res;            
                    break;
                case 'and':
                    element.res = currentLevel.map[element.inputA].res & currentLevel.map[element.inputB].res;            
                    break;
                case 'xor':
                    element.res = currentLevel.map[element.inputA].res ^ currentLevel.map[element.inputB].res;            
                    break;            
                default:
                    break;
            }
        }
 
        if(element.res != prev || element.imgB==null)
        {
            if(element.imgB!=null)
            {
                element.imgB.pendingDestroy = true;
                element.imgN.pendingDestroy = true;
            }
            element.imgB = game.add.sprite(element.x, element.y, images[element.res]);
            element.imgB.width  = 100*render_scale;
            element.imgB.height = 25*render_scale;
            element.imgN = game.add.sprite(element.x+(38*render_scale), element.y+(25*render_scale), 'pannelKey', element.res);
            element.imgN.width  = 25*render_scale;
            element.imgN.height = 25*render_scale;
        }
    }

  },

  checkInput : function () {

    if(locked_for_input>=0 || game.input.activePointer.isDown==false || last_input+500>this.game.time.time)
        return;

    for (var index = 0; index < currentLevel.map.length; index++) {
        var element = currentLevel.map[index];
        if(element.editable == null)
            continue;
        if(element.editable=='VALUE')
        {
            var dx  = player.x-element.imgN.x;
            var dy  = player.y-element.imgN.y;
            var dpx = game.input.activePointer.x-element.imgN.x;
            var dpy = game.input.activePointer.y-element.imgN.y;
            if( dx>0 && dy>0 && dpx>0 && dpy>0
             && dx <element.imgN. width && dy <element.imgN. height && 
                dpx<element.imgN. width && dpy<element.imgN. height)
            {
                locked_for_input  = index;
                wait_for_input    = false;
                planel_sprite = game.add.sprite(element.x, element.y, 'panel');
                planel_sprite.width  = 100*render_scale;
                planel_sprite.height = 100*render_scale;            
            }

        }
    }

  },  

  proceesInput : function () {
    {
        if(locked_for_input<0)
            return;

        if(game.input.activePointer.isDown == false)
            wait_for_input = true;

        if(wait_for_input==true && game.input.activePointer.isDown)
        {
            var dx = game.input.activePointer.x-planel_sprite.x;
            var dy = game.input.activePointer.y-planel_sprite.y;
            if( dx>0 && dy>0 && dx<planel_sprite. width && dy<planel_sprite. height)
            {
                var x = Math.floor(dx/Math.floor(planel_sprite.width /4));
                var y = Math.floor(dy/Math.floor(planel_sprite.height/4));
                currentLevel.map[locked_for_input].val = (y*4) + x;
            }

            wait_for_input    = false;
            locked_for_input  = -1;
            last_input        = this.game.time.time;
        }

        if(planel_sprite!=null &&  locked_for_input<0)
        {
            planel_sprite.exists = false;
            planel_sprite.alive  = false;
            planel_sprite=null;
        }
    }
},

update : function ()
{
    this.updateWinCondition();

    this.updatePlayerMoves();

    this.updateWorldLogic();

    this.checkInput();

    this.proceesInput();

},


render : function ()
{
    this.game.debug.text( "Current   Level:    "+currentLevelIdx,     50, 25 );
//    this.game.debug.text( "Current   Solution: "+currentLevelResult,  50, 50 );
//    this.game.debug.text( "Expected  Result:   "+currentLevel.result, 50, 75 );
},


};

module.exports = PlayScene;




},{"./levels.js":2}]},{},[3]);
