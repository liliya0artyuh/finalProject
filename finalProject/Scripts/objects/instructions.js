var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var finalProject;
(function (finalProject) {
    //class instructions ++++++++++++++++++++++++++++++++++++++++++++
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        //constructor ++++++++++++++++++++++++++++++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
            //private properties
            this._rules = "";
            this._instructionsVisible = false;
            this._aboutText = "This game is designed to help people learn English finalProject in a fun way. \n\nThe goal of the game is to collect 10 finalProject from selected category.";
            this._rulesText = "1. Select word category to practise. \n\n2. Move mouse up and down to control collector rectangle. \n\n3. Collect 10 finalProject from selected category to win. \n\n4. Collecting 3 wrong finalProject lead to a loss.";
        }
        Instructions.prototype.setRules = function (rules) {
            this._rules = rules;
        };
        Instructions.prototype.getRules = function () {
            return this._rules;
        };
        //private method
        //callback function that allows to respond to start button click events
        Instructions.prototype._continueClicked = function (event) {
            console.log("event.target " + event.target);
            createjs.Sound.play("soundtrack");
            this.removeAllChildren();
            this._getDetails();
        };
        //callback function that allows to respond to button click events
        Instructions.prototype._menuClicked = function (event) {
            //check if lable is already displayed
            if (this._instructionsContainer.visible == true) {
                this._instructionsContainer.visible = false;
            }
            else {
                this._instructionsContainer.visible = true;
            }
            //check which button was clicked
            console.log("event.target.name " + event.target.name);
            this._instructionsLable.text = this._rulesText;
        };
        Instructions.prototype._categoryClicked = function (event) {
            wordCategory = event.target.name;
            //get the name of user
            name = document.getElementById("txtName").value;
            if (name == null || name == "") {
                name = "YOU";
            }
            console.log("check name after button is clicked " + name);
            document.getElementById("txtName").style.display = "none";
            changeState(finalProject.PLAY_STATE);
        };
        //public methods
        Instructions.prototype.start = function () {
            this.addChild(background);
            //add buttons for about and rules
            this._rulesButton = new finalProject.Button("rulesButton", 200, 150, false);
            this._rulesButton.name = "rulesBtn";
            this._rulesButton.on("click", this._menuClicked, this);
            this.addChild(this._rulesButton);
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
            //instantiate and add a start button
            this._continueButton = new finalProject.Button("startButton", finalProject.centerX, 420, true);
            this.addChild(this._continueButton);
            this._continueButton.on("click", this._continueClicked, this);
            //add this menu container to the stage
            stage.addChild(this);
        };
        Instructions.prototype._getDetails = function () {
            this._nameLabel = new finalProject.Label("What's your name?", "20px Consolas", "#000000", 181, 110, false);
            this.addChild(this._nameLabel);
            document.getElementById("txtName").style.display = "inline";
            console.log("check name " + name);
            this._selectCategoryLabel = new finalProject.Label("Select Category:", "20px Consolas", "#000000", 181, 170, false);
            this.addChild(this._selectCategoryLabel);
            //add category buttons and their labels
            this._foodBtn = new finalProject.Button("emptyButton", 181, 200, false);
            this._foodBtn.name = "foodBtn";
            this.addChild(this._foodBtn);
            this._foodBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new finalProject.Label("FOOD", "30px Consolas", "#000000", 272.5, 231, true);
            this.addChild(this._foodLabel);
            this._furnitureBtn = new finalProject.Button("emptyButton", 484, 200, false);
            this._furnitureBtn.name = "furnitureBtn";
            this.addChild(this._furnitureBtn);
            this._furnitureBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new finalProject.Label("FURNITURE", "30px Consolas", "#000000", 575.5, 231, true);
            this.addChild(this._foodLabel);
            this._clothesBtn = new finalProject.Button("emptyButton", 181, 300, false);
            this._clothesBtn.name = "clothesBtn";
            this.addChild(this._clothesBtn);
            this._clothesBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new finalProject.Label("CLOTHES", "30px Consolas", "#000000", 272.5, 331, true);
            this.addChild(this._foodLabel);
            this._animalsBtn = new finalProject.Button("emptyButton", 484, 300, false);
            this._animalsBtn.name = "animalsBtn";
            this.addChild(this._animalsBtn);
            this._animalsBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new finalProject.Label("ANIMALS", "30px Consolas", "#000000", 575.5, 331, true);
            this.addChild(this._foodLabel);
            stage.addChild(this);
        };
        Instructions.prototype.update = function () {
        };
        return Instructions;
    })(finalProject.Scene);
    finalProject.Instructions = Instructions;
})(finalProject || (finalProject = {}));
