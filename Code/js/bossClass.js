class BossClass
{
    //making constructor which accepts x, y, width and height
    constructor(x,y,width,height)
    {
        //making the body non-static
        var options = 
        {
            isStatic:false
        }

        //creating the character body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adding it to the world
        World.add(world,this.body)
    }

    //display function
    display()
    {
        //making shortcuts for angle and position
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        //translating the x and y position
        translate(pos.x,pos.y);

        //rotating it equal to it's angle
        rotate(angle);

        //making rectMode = Center 
        rectMode(CENTER);

        //making the rectangular body
        rect(0,0,this.width,this.height);
        pop();
    }
}