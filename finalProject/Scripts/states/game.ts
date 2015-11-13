    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module states {
    // menu class
    export class Game extends objects.Scene {
        // private instance variables
        _textLabel: objects.Label;
       _truck: objects.Truck;
        _word: objects.Word;
        _antiWords: objects.Word[] = [];
        _currentWord: string;
        _wordOrder: number[] = [0];
        _category: string;
        _numExists: boolean;
        _currentCategory: string[];
        _antagonistWords: string[];


        //constructor
        constructor() {
            super();
        }

        //public methods
        public start(): void {
            this._determineCategories();
            this.addChild(background);


            //add truck/collector to the game
            this._truck = new objects.Truck("truck");
            this.addChild(this._truck);

            //add selected category finalProject
            this._word = new objects.Word(true);// collectibe word
            this.addChild(this._word);

            //add enemy finalProject
            for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord] = new objects.Word(false);// antogonist finalProject
                this.addChild(this._antiWords[antiWord]);
            }


            //add all objects to the stage
            stage.addChild(this);

            scoreboard = new objects.Scoreboard;
            collision = new managers.Collision; 
        }


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
     private  _determineCategories(): void {
        console.log("wordCategory " + wordCategory);
        if (wordCategory == "foodBtn") {
            config.currentCategory = config.foodWords;
            config.antagonistWords = config.furnitureWords;
            Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
            Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
            console.log("this._currentCategory " + config.currentCategory);
            console.log("this._antagonistWords " + config.antagonistWords);
        } else if (wordCategory == "furnitureBtn") {
            config.currentCategory = config.furnitureWords;
            config.antagonistWords = config.foodWords;
            Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
            Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
        } else if (wordCategory == "clothesBtn") {
            config.currentCategory = config.clothesWords;
            config.antagonistWords = config.furnitureWords;
            Array.prototype.push.apply(config.antagonistWords, config.foodWords);
            Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
        } else if (wordCategory == "animalsBtn") {
            config.currentCategory = config.animalsWords;
            config.antagonistWords = config.furnitureWords;
            Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
            Array.prototype.push.apply(config.antagonistWords, config.foodWords);
        }
    }

        


        public update(): void {
            this._truck.update();
            this._word.update();
            for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord].update();
                collision.check(this._antiWords[antiWord], this._truck);
            }
            collision.check(this._word, this._truck);
            scoreboard.update();
            if (scoreboard.lives <= 0) {
                outcome = 2;
                numOfCollectedWords = scoreboard.score / 100;
                numOfLivesLost = 3;
                changeState(config.OVER_STATE);
            }
                if(scoreboard.score == 1000) {
                    outcome = 1;
                    numOfCollectedWords = 10;
                    numOfLivesLost = 3 - scoreboard.lives;
                    changeState(config.OVER_STATE);
            }
        }
    }
}