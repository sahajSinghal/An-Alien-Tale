//making the class for the ground
class Ground
{
    //making the constructor which accepts x, y, width and height
    constructor(x,y,width,height)
    {
        var options = 
        {
            //making the friction 1 and making the ground a static body
            isStatic: true,
            friction: 1
        }

        //making the ground body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adding the ground to the world
        World.add(world,this.body);
    }
}