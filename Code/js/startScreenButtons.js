//creating the class for the buttons
class startScreenButtons
{
    //constructor function
    constructor()
    {
        //creating the buttons
        this.newGameButton = createButton('New Game');
        this.continueButton = createButton('Continue');
        this.resetButton = createButton('Reset');
    }

    hide()
    {
        //hiding the buttons
        this.continueButton.hide();
        this.resetButton.hide();
        this.newGameButton.hide();
    }

    start()
    {
        //defining position of the buttons
        this.newGameButton.position(displayWidth/2,displayHeight*5/7);
        this.continueButton.position(displayWidth/4,displayHeight*5/7);
        this.resetButton.position(displayWidth/1.33,displayHeight*5/7);

        //if the new game button is pressed and setting game state to "forestOfFog"
        this.newGameButton.mousePressed(()=>{            
            gameState = "storyTimeScreen1";
        })
    }
}