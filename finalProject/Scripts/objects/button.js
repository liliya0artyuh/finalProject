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
    var Button = (function (_super) {
        __extends(Button, _super);
        //constructor
        function Button(pathString, x, y) {
            _super.call(this, assets.loader.getResult(pathString));
            this._height = 69;
            this.x = x;
            this.y = y;
            this.on("mouseover", this.buttonOver, this);
            this.on("mouseout", this.buttonOut, this);
        }
        //public methods
        Button.prototype.getWidth = function () {
            return this._width;
        };
        Button.prototype.setWidth = function (width) {
            this._width = width;
        };
        Button.prototype.getHeight = function () {
            return this._height;
        };
        Button.prototype.setHeight = function (height) {
            this._height = height;
        };
        //private methods
        Button.prototype.centerAlongX = function () {
            this.regX = this._width * 0.5;
        };
        Button.prototype.centerAlongY = function () {
            this.regY = this._height * 0.5;
        };
        //callback function that change the apha transparency of the button
        //mousover event
        Button.prototype.buttonOver = function (event) {
            event.currentTarget.alpha = 0.8;
        };
        //mouseout event
        Button.prototype.buttonOut = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return Button;
    })(createjs.Bitmap);
    finalProject.Button = Button;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=button.js.map