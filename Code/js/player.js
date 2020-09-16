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

    move()
    {
        if(keyCode === 39)
        {
            Matter.body.applyForce(this.body,{x:40,y:-30});
        }

        if(keyCode === 37)
        {
            Matter.body.applyForce(this.body,{x:-40,y:-30});
        }
    }
};