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



