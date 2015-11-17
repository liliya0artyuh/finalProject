//    <!--Repository Name for source code on github: finalProject-- >
//    <!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//    <!--Author Name: Liliya Artyukh -- >
//    <!--Creation Date: 06 - Nov - 2015 -- >
//    <!--Last Modified Date: 12 - Nov - 2015 -- >
//    <!--Last Modified by: Liliya Artyukh -- >
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/webaudioapi/waa.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../utility/utility.ts" />
/// <reference path="../config/wordsets.ts" />
/// <reference path="../config/config.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/word.ts" />
/// <reference path="../objects/truck.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/menu.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
// Global Game Framework Variables
var canvas;
var stage;
var stats;
var state;
var currentState; // alias for our current state
// Game variables
var menu;
var game;
var over;
var name;
var outcome = 0;
var wordCategory;
var background;
var numOfCollectedWords;
var numOfLivesLost;
//Game managers
var assets;
var collision;
var scoreboard;
function preload() {
    assets = new managers.Asset();
    document.getElementById("txtName").value = "";
    name = "";
}
function init() {
    console.log("Game started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage 
    stage.enableMouseOver(20); //enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 frames per second
    createjs.Ticker.on("tick", gameLoop, this); // update gameLoop every frame
    background = new objects.Background("back");
    stage.addChild(background);
    setupStats(); // setup statistics object
    state = config.MENU_STATE;
    changeState(state);
}
// Main Game Loop
function gameLoop(event) {
    stats.begin(); //begin measuring
    background.update();
    currentState.update();
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // end measuring
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); //show fps
    //align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    //  document.getElementById("main").appendChild(stats.domElement);
    document.body.appendChild(stats.domElement);
}
// state machine
function changeState(state) {
    //lauch various scenes
    switch (state) {
        case config.MENU_STATE:
            stage.removeAllChildren();
            menu = new states.Menu();
            console.log(menu);
            currentState = menu;
            break;
        case config.PLAY_STATE:
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            break;
        case config.OVER_STATE:
            stage.removeAllChildren();
            over = new states.Over(outcome);
            currentState = over;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);
}
//# sourceMappingURL=game.js.map