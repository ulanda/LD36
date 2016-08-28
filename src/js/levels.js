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
    {result: 7,  map:level0},
    {result: 11, map:level1},
    {result: 15, map:level0},
];
    
module.exports = LevelArray;
