    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    // menu class
    export class End extends finalProject.Scene {
        // private instance variables
        _endLabel: finalProject.Label;
        _againButton: finalProject.Button;
        _logo: createjs.Bitmap;
        _tooth: createjs.Bitmap;
        _outcomeLabel: finalProject.Label;
        _outcomeText: string="hello world";
        _arrayOutcome: Array<string>;
        _won: boolean;
        _finalScore: finalProject.Label;

        //constructor
        constructor(finalOutcome: number) {
            super();
           
        }

        //private method
        //callback function that allows to respond to button click events
        private _buttonClicked(event: createjs.MouseEvent): void {
            changeState(finalProject.START_STATE);
        }

        //public methods
        public start(): void {
            this.addChild(background);
            scoreboard.reset();
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            this._logo.x = finalProject.centerX -(146 *0.5);//position logo in the center of x axis
            this._logo.y = 30;//position logo at 30 below top (alog y axis)
            this.addChild(this._logo);

            if (outcome == 1) {
                this._outcomeText = "Well Done! You have collected 10 words from the selected category";
            }
            if (outcome == 2) {
                this._outcomeText = "Good try! Study the words and play the game again.";
            }

            this._outcomeLabel = new finalProject.Label(this._outcomeText, "18px Consolas", "#ffffff", finalProject.centerX, 140, true);
            this.addChild(this._outcomeLabel);

            this._finalScore = new finalProject.Label("collected words: " + numOfCollectedWords + "\n\nlost lives: " + numOfLivesLost, "20px Consolas", "#FFF000", finalProject.centerX, 200, true);
            this.addChild(this._finalScore);

            this._endLabel = new finalProject.Label("The End", "30px Consolas", "#ffffff", finalProject.centerX, 260, true);
            this.addChild(this._endLabel);
            //instantiate and add a start button
            this._againButton = new finalProject.Button("againButton", finalProject.centerX, 360);
            this._againButton.setWidth(206);
            this._againButton.centerAlongX();
            this.addChild(this._againButton);
            this._againButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        }

        public update(): void {
        }
    }

}