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
    var Menu = (function (_super) {
        __extends(Menu, _super);
        //constructor
        function Menu() {
            _super.call(this);
            this._instructionsVisible = false;
            this._aboutText = "This game is designed to help people learn English finalProject in a fun way. \n\nThe goal of the game is to collect 10 finalProject from selected category.";
            this._rulesText = "1. Select word category to practise. \n\n2. Move mouse up and down to control collector rectangle. \n\n3. Collect 10 finalProject from selected category to win. \n\n4. Collecting 3 wrong finalProject lead to a loss.";
        }
        //private method
        //callback function that allows to respond to start button click events
        Menu.prototype._startClicked = function (event) {
            console.log("event.target " + event.target);
            createjs.Sound.play("soundtrack");
            changeState(finalProject.INSTRUCTIONS_STATE);
        };
        //callback function that allows to respond to button click events
        Menu.prototype._menuClicked = function (event) {
            //check if lable is already displayed
            if (this._instructionsContainer.visible == true) {
                this._instructionsContainer.visible = false;
            }
            else {
                this._instructionsContainer.visible = true;
            }
            //check which button was clicked
            console.log("event.target.name " + event.target.name);
            if (event.target.name == "aboutBtn") {
                this._instructionsLable.text = this._aboutText;
            }
            else if (event.target.name == "rulesBtn") {
                this._instructionsLable.text = this._rulesText;
            }
        };
        Menu.prototype._categoryClicked = function (event) {
            wordCategory = event.target.name;
            //get the name of user
            name = document.getElementById("txtName").value;
            if (name == null || name == "") {
                name = "YOU";
            }
            console.log("check name after button is clicked " + name);
            document.getElementById("txtName").style.display = "none";
        };
        //public methods
        Menu.prototype.start = function () {
            this.addChild(background);
            //add buttons for about and rules
            this._rulesButton = new finalProject.Button("rulesButton", 200, 150, false);
            this._rulesButton.name = "rulesBtn";
            this._rulesButton.on("click", this._menuClicked, this);
            this.addChild(this._rulesButton);
            this._aboutButton = new finalProject.Button("aboutButton", 440, 150, false);
            this._aboutButton.name = "aboutBtn";
            this._aboutButton.on("click", this._menuClicked, this);
            this.addChild(this._aboutButton);
            //add instruction container
            this._instructionsContainer = new createjs.Container;
            this._instructionsContainer.x = 24;
            this._instructionsContainer.y = 200;
            this._rect = new createjs.Shape;
            this._rect.graphics.beginFill("red").drawRect(0, 0, 800, 150);
            this._instructionsContainer.addChild(this._rect);
            this._instructionsLable = new finalProject.Label("placeholder text", "20px Consolas", "#000000", 20, 20, false);
            this._instructionsContainer.addChild(this._instructionsLable);
            this.addChild(this._instructionsContainer);
            this._instructionsContainer.visible = false;
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            // this._logo.regX = this._logo.getBounds().width * 0.5;
            this._logo.x = finalProject.centerX - (146 * 0.5); //place in the middle along x axis
            this._logo.y = 30;
            //set regX so image is centered along x axis
            //add logo to game container
            this.addChild(this._logo);
            //instantiate and add a start button
            this._startButton = new finalProject.Button("startButton", finalProject.centerX, 420, true);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startClicked, this);
            //add this menu container to the stage
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        return Menu;
    })(finalProject.Scene);
    finalProject.Menu = Menu;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=menu.js.map