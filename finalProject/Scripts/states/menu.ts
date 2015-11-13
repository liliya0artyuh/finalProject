    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >


module states {
    // menu class
    export class Menu extends objects.Scene {
        // private instance variables
        _introLabel: objects.Label;
        _startButton: objects.Button;
        _logo: createjs.Bitmap;
        _nameLabel: objects.Label;
        _selectCategoryLabel: objects.Label;
        _foodBtn: objects.Button;
        _furnitureBtn: objects.Button;
        _clothesBtn: objects.Button;
        _animalsBtn: objects.Button;
        _foodLabel: objects.Label;
        _furnitureLabel: objects.Label;
        _clothesLabel: objects.Label;
        _animalsLabel: objects.Label;
        _instructionsContainer: createjs.Container;
        _instructionsLable: objects.Label;
        _rulesButton: objects.Button;
        _aboutButton: objects.Button;
        _rect: createjs.Shape;
        _instructionsVisible: boolean = false;
        _aboutText: string = "This game is designed to help people learn English finalProject in a fun way. \n\nThe goal of the game is to collect 10 finalProject from selected category.";
        _rulesText: string = "1. Select word category to practise. \n\n2. Move mouse up and down to control collector rectangle. \n\n3. Collect 10 finalProject from selected category to win. \n\n4. Collecting 3 wrong finalProject lead to a loss.";

        //constructor
        constructor() {
            super();
        }

        //private method
        //callback function that allows to respond to start button click events
        private _startClicked(event: createjs.MouseEvent): void {
            console.log("event.target " + event.target);
            createjs.Sound.play("soundtrack");
            this.removeAllChildren();
            this._getDetails();
        }

        //callback function that allows to respond to button click events
        private _menuClicked(event: createjs.MouseEvent): void {
            //check if lable is already displayed
            if (this._instructionsContainer.visible == true) {
                this._instructionsContainer.visible = false;
            } else {
                this._instructionsContainer.visible = true;
            }
            //check which button was clicked
            console.log("event.target.name " + event.target.name);
            if (event.target.name == "aboutBtn") {
                this._instructionsLable.text = this._aboutText;
            } else if (event.target.name == "rulesBtn"){
                this._instructionsLable.text = this._rulesText;
            }
        }

        private _categoryClicked(event: createjs.MouseEvent): void {
            wordCategory = event.target.name;
            //get the name of user
            name = (<HTMLInputElement>document.getElementById("txtName")).value;
            if (name == null || name == "") {
                name = "YOU";
            }
            console.log("check name after button is clicked " + name);
            document.getElementById("txtName").style.display = "none";
            changeState(config.PLAY_STATE);
        }


        //public methods
        public start(): void {
            this.addChild(background);

            //add buttons for about and rules
            this._rulesButton = new objects.Button("rulesButton", 200, 150, false);
            this._rulesButton.name = "rulesBtn";
            this._rulesButton.on("click", this._menuClicked, this);
            this.addChild(this._rulesButton);
            this._aboutButton = new objects.Button("aboutButton", 440, 150, false);
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
            this._instructionsLable = new objects.Label("placeholder text", "20px Consolas", "#000000", 20, 20, false);
            this._instructionsContainer.addChild(this._instructionsLable);
            this.addChild(this._instructionsContainer);
            this._instructionsContainer.visible = false;

            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            
           // this._logo.regX = this._logo.getBounds().width * 0.5;
            this._logo.x = config.centerX - (146 * 0.5);//place in the middle along x axis
            this._logo.y = 30;
            //set regX so image is centered along x axis

            //add logo to game container
            this.addChild(this._logo);


            //instantiate and add a start button
            this._startButton = new objects.Button("startButton", config.centerX, 420, true);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startClicked, this);

            //add this menu container to the stage
            stage.addChild(this);
        }



        private _getDetails(): void {
  
            this._nameLabel = new objects.Label("What's your name?", "20px Consolas", "#000000", 181, 110, false);
            this.addChild(this._nameLabel);

            document.getElementById("txtName").style.display = "inline";
            console.log("check name " + name);

            this._selectCategoryLabel = new objects.Label("Select Category:", "20px Consolas", "#000000", 181, 170, false);
            this.addChild(this._selectCategoryLabel);

            //add category buttons and their labels
            this._foodBtn = new objects.Button("emptyButton", 181, 200, false);
            this._foodBtn.name = "foodBtn";
            this.addChild(this._foodBtn);
            this._foodBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("FOOD", "30px Consolas", "#000000", 272.5, 231, true);
            this.addChild(this._foodLabel);

            this._furnitureBtn = new objects.Button("emptyButton", 484, 200, false);
            this._furnitureBtn.name = "furnitureBtn";
            this.addChild(this._furnitureBtn);
            this._furnitureBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("FURNITURE", "30px Consolas", "#000000", 575.5, 231, true);
            this.addChild(this._foodLabel);

            this._clothesBtn = new objects.Button("emptyButton", 181, 300, false);
            this._clothesBtn.name = "clothesBtn";
            this.addChild(this._clothesBtn);
            this._clothesBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("CLOTHES", "30px Consolas", "#000000", 272.5, 331, true);
            this.addChild(this._foodLabel);

            this._animalsBtn = new objects.Button("emptyButton", 484, 300, false);
            this._animalsBtn.name = "animalsBtn";
            this.addChild(this._animalsBtn);
            this._animalsBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("ANIMALS", "30px Consolas", "#000000", 575.5, 331, true);
            this.addChild(this._foodLabel);

            stage.addChild(this);
        }

        public update(): void {
        }
    }
}