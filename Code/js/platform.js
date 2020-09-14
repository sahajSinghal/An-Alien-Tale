//making the class for the platform
class Platform
{
    //making constructor which accepts x, y, width and height
    constructor(x,y,width,height)
    {
        this.regularImage = loadImage("../Images/platform.png");
        this.specialImage = loadImage("../Images/platform_special.png");

        var options = 
        {
            //making the friction 1 and making the platform a static body
            isStatic: true,
            friction: 1
        }

        //making the platform body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adding the platform to the world
        World.add(world,this.body);
    }
}