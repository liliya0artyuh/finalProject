//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var finalProject;
(function (finalProject) {
    // menu class
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        //constructor
        function Level1() {
            _super.call(this);
            this._antiWords = [];
            this._wordOrder = [0];
        }
        //public methods
        Level1.prototype.start = function () {
            this._determineCategories();
            this.addChild(background);
            //add truck/collector to the game
            this._truck = new finalProject.Truck("truck");
            this.addChild(this._truck);
            //add selected category finalProject
            this._word = new finalProject.Word(true); // collectibe word
            this.addChild(this._word);
            //add enemy finalProject
            for (var antiWord = 0; antiWord < finalProject.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord] = new finalProject.Word(false); // antogonist finalProject
                this.addChild(this._antiWords[antiWord]);
            }
            //add all objects to the stage
            stage.addChild(this);
            scoreboard = new finalProject.Scoreboard;
            collision = new finalProject.Collision;
        };
        //private method
        /*
        private _checkIfExists(x: number): number {
        //    console.log("this.nextItem " + this.nextItem );
         //   console.log("this.wordOrder.length " + this.wordOrder.length);
        //    console.log("this.wordOrder[0] " + this.wordOrder[0] );
            while (this.wordOrder.length < 10) {
                if (this.wordOrder.length == 1) {
                    this.wordOrder[0] = this.nextItem;
                } else {
                    for (var i = 0; i <= this.wordOrder.length; i++) {
                        console.log("this.wordOrder.length " + this.wordOrder.length);
                        console.log("this.nextItem " + this.nextItem);
                        console.log("this.wordOrder[i] " + this.wordOrder[i]);

                        if (this.nextItem == this.wordOrder[i]) {
                            this.numExists = true;
                            break;
                        } else {
                            this.numExists = false;
                            if (i == this.wordOrder.length) {
                                this.wordOrder[i + 1] = this.nextItem;
                            }
                        }
                    }

                }

            }
            return this.nextItem;
        }
        */
        //determine categories for collectible finalProject and the antagonist finalProject
        Level1.prototype._determineCategories = function () {
            console.log("wordCategory " + wordCategory);
            if (wordCategory == "foodBtn") {
                finalProject.currentCategory = finalProject.foodWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
                console.log("this._currentCategory " + finalProject.currentCategory);
                console.log("this._antagonistWords " + finalProject.antagonistWords);
            }
            else if (wordCategory == "furnitureBtn") {
                finalProject.currentCategory = finalProject.furnitureWords;
                finalProject.antagonistWords = finalProject.foodWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
            }
            else if (wordCategory == "clothesBtn") {
                finalProject.currentCategory = finalProject.clothesWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
            }
            else if (wordCategory == "animalsBtn") {
                finalProject.currentCategory = finalProject.animalsWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
            }
        };
        Level1.prototype.update = function () {
            this._truck.update();
            this._word.update();
            for (var antiWord = 0; antiWord < finalProject.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord].update();
                collision.check(this._antiWords[antiWord], this._truck);
            }
            collision.check(this._word, this._truck);
            scoreboard.update();
            if (scoreboard.lives <= 0) {
                outcome = 2;
                numOfCollectedWords = scoreboard.score / 100;
                numOfLivesLost = 3;
                changeState(finalProject.OVER_STATE);
            }
            if (scoreboard.score == 1000) {
                outcome = 1;
                numOfCollectedWords = 10;
                numOfLivesLost = 3 - scoreboard.lives;
                changeState(finalProject.OVER_STATE);
            }
        };
        return Level1;
    })(finalProject.Scene);
    finalProject.Level1 = Level1;
})(finalProject || (finalProject = {}));
