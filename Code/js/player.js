//creating the class for the player
class Player
{
    //constructor which takes the x and y positions of the player
    constructor(x,y)
    {

        //creating options with friction as 1 and making the player a non-static body
        var options = 
        {
            friction:1,
            isStatic:false
        }

        //making the player body
        this.body = Bodies.rectangle(x,y,displayWidth/20,displayWidth/20,options);
        this.width = displayWidth/20;
        this.height = displayWidth/20;

        //adding the player to the world
        World.add(world,this.body);
    }

    //display function for the player
    display()
    {
        //making shortcuts for angle and position
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        //translating the x and y position of the player
        translate(pos.x,pos.y);

        //rotating it equal to it's angle
        rotate(angle);

        //making rectMode = Center 
        rectMode(CENTER);

        //making the rectangular body
        rect(0,0,this.width,this.height);
        pop();   
    }
};