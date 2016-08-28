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



