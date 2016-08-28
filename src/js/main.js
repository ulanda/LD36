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
