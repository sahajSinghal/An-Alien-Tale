//the storyTime class
class StoryTime
{
    //constructor
    constructor()
    {
        this.screen1 = createElement('h1');
        this.screen2 = createElement('h1');
        this.screen3 = createElement('h1');
        this.screen4 = createElement('h1');
        this.screen5 = createElement('h1');
        this.screen6 = createElement('h1');
        this.nextButton = createButton('Next');
    }

    //function hide
    hide()
    {
        this.nextButton.hide();
        this.screen6.hide();
    }

    //displaying the elements and buttons
    displayButton()
    {
        this.nextButton.position(displayWidth/2,displayHeight*5/6);
    }

    displayScreen1()
    {
        this.screen1.html("Once upon a time, <br> there was a huge rebellion in a place called Alien City <br> against the evil succesor to the throne <br> Draco");
        this.screen1.position(displayWidth/3,displayHeight/3);
    } 

    displayScreen2()
    {
        this.screen1.hide();
        this.screen2.html("Three Brave Warriors fought against this dangerous creature <br> making it a spirit in the process");
        this.screen2.position(displayWidth/3,displayHeight/3);
    } 

    displayScreen3()
    {
        this.screen2.hide();
        this.screen3.html("However, <br> They knew that Draco will return");
        this.screen3.position(displayWidth/3,displayHeight/3);
    } 

    displayScreen4()
    {
        this.screen3.hide();
        this.screen4.html("So they made a prophecy <br> A brave hero called the legendary hero will come some day");
        this.screen4.position(displayWidth/3,displayHeight/3);
    } 

    displayScreen5()
    {
        this.screen4.hide();
        this.screen5.html("He will have two options <br> One to save everyone which will destroy Draco forever <br> And the other darker option, to kill everyone and get revenge for Draco");
        this.screen5.position(displayWidth/3,displayHeight/3);
    } 

    displayScreen6()
    {
        this.screen5.hide();
        this.screen6.html("What would you have chosen?");
        this.screen6.position(displayWidth/3,displayHeight/3);
    } 
}