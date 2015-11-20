    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    export class Button extends createjs.Bitmap {
        //private instance variables
        _width: number;
        _height: number;
        //constructor
        constructor(pathString: string, x: number, y: number) {
            super(assets.loader.getResult(pathString));
            this._height = 69;

            this.x = x;
            this.y = y;

            this.on("mouseover", this.buttonOver, this);
            this.on("mouseout", this.buttonOut, this);

        }

        //public methods
        public getWidth(): number {
            return this._width;
        }

        public setWidth(width: number): void {
            this._width = width;
        }
        public getHeight(): number {
            return this._height;
        }

        public setHeight(height: number): void {
            this._height = height;
        }

        //private methods
        public centerAlongX(): void {
            this.regX = this._width * 0.5;
        }
        public centerAlongY(): void {
            this.regY = this._height * 0.5;
        }
        //callback function that change the apha transparency of the button
        //mousover event
        buttonOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.8;
        }

        //mouseout event
        buttonOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }
    }
}