    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module objects {
    export class Button extends createjs.Bitmap {
        //private instance variables
        width: number;
        height: number;
        //constructor
        constructor(pathString: string, x: number, y: number, centered: boolean) {
            super(assets.loader.getResult(pathString));

            this.x = x;
            this.y = y;

            if (centered) {
                this.width = 208;
                this.height = 69;

                this.regX = this.width * 0.5;
                this.regY = this.height * 0.5;
            }
            this.on("mouseover", this.buttonOver, this);
            this.on("mouseout", this.buttonOut, this);

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