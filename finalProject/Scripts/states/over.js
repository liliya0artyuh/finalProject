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
    var Over = (function (_super) {
        __extends(Over, _super);
        //constructor
        function Over(finalOutcome) {
            _super.call(this);
            this._outcomeText = "hello world";
        }
        //private method
        //callback function that allows to respond to button click events
        Over.prototype._buttonClicked = function (event) {
            changeState(finalProject.MENU_STATE);
        };
        //public methods
        Over.prototype.start = function () {
            this.addChild(background);
            scoreboard.reset();
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            // this._logo.regX = this._logo.getBounds().width * 0.5;
            this._logo.x = finalProject.centerX - (146 * 0.5);
            this._logo.y = 30;
            this.addChild(this._logo);
            if (outcome == 1) {
                this._outcomeText = "Well Done! You have collected 10 finalProject from the selected category";
            }
            if (outcome == 2) {
                this._outcomeText = "Good try! Study the finalProject and play the game again.";
            }
            this._outcomeLabel = new finalProject.Label(this._outcomeText, "18px Consolas", "#ffffff", finalProject.centerX, 140, true);
            this.addChild(this._outcomeLabel);
            this._finalScore = new finalProject.Label("collected finalProject: " + numOfCollectedWords + "\n\n lost lives: " + numOfLivesLost, "20px Consolas", "#FFF000", finalProject.centerX, 200, true);
            this.addChild(this._finalScore);
            this._endLabel = new finalProject.Label("The End", "30px Consolas", "#ffffff", finalProject.centerX, 260, true);
            this.addChild(this._endLabel);
            //instantiate and add a start button
            this._againButton = new finalProject.Button("againButton", finalProject.centerX, 360, true);
            this.addChild(this._againButton);
            this._againButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        };
        Over.prototype.update = function () {
        };
        return Over;
    })(finalProject.Scene);
    finalProject.Over = Over;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=over.js.map