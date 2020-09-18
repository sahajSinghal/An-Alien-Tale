//name-spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//creating the variables for engine and world
var engine, world;

//initializing gamestates
var gameState = "startPage";

//creating the variable for the start page
var startPage;

//creating the variable for the sprite on which the images of backgrounds will be displayed
var backgroundSprite;

//creating variable for storing forest of fog image
var forestOfFog;

//creating a variable for the buttons on the start screen
var buttons;

//creating the variables for sprite and body of the player
var player;
var playerSprite;

//creating the variables for sprite and body of the ground
var ground, groundSprite;

//defining the variable init
var init = false;

//variable for storyTime object
var storyTime;

function setup(){
    //creating a canvas whose size is equal to the displayWidth and DisplayHeight
    createCanvas(displayWidth,displayHeight);

    //creating the engine and world
    engine = Engine.create();
    world = engine.world;
   
    //creating the background sprite
    backgroundSprite = createSprite(displayWidth, displayHeight*1.5, displayWidth*2, displayHeight*3);
    backgroundSprite.visible = false;

    //creating the startScreenButtons
    buttons = new startScreenButtons();

    //creating the ground and its sprite
    ground = new Ground(displayWidth,displayHeight*7/8,displayWidth*2,displayHeight/38);
    groundSprite = createSprite(ground.body.position.x,ground.body.position.y,ground.width,ground.height);
    groundSprite.visible = false;
       
    //creating the storyTime object
    storyTime = new StoryTime();

    //running the engine
    Engine.run(engine);
}

function preload()
{
    //loading the startImage
    startPage = loadImage("../Images/CoverPage.png");

    //loading the forest of fog image
    forestOfFog = loadImage("../Images/forest of fog.png");
}

//function draw
function draw(){    

    //following commands to be executed if gameState is "startPage"
    if(gameState === "startPage");
    {
        // if the player has started the game then start page has to be displayed
        background(startPage);

        //starting the buttons
        buttons.start();
    }    

    //following commands to be executed if gameState is StoryTimeScreen1
    if(gameState === "storyTimeScreen1")
    {
        //changing the background to white
        background("white");

        //hiding the startButtons
        buttons.hide();

        //displaying the element and button
        storyTime.displayScreen1();
        storyTime.displayButton();

        //changing gameState to StoryTimeScreen2 if nextButton is pressed
        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen2";
        })
    }

    //following commands to be executed if gameState is StoryTimeScreen2
    if(gameState === "storyTimeScreen2")
    {
        //changing background to white
        background("white");

        //displaying the element and button
        storyTime.displayScreen2();
        storyTime.displayButton();

        //changing gameState to StoryTimeScreen3 if nextButton is pressed
        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen3";
        })
    }

    //following commands to be executed if gameState is StoryTimeScreen3
    if(gameState === "storyTimeScreen3")
    {
        //changing background to white
        background("white");

        //displaying the element and button
        storyTime.displayScreen3();
        storyTime.displayButton();

        //changing gameState to StoryTimeScreen4 if nextButton is pressed
        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen4";
        })
    }

    //following commands to be executed if gameState is StoryTimeScreen4
    if(gameState === "storyTimeScreen4")
    {
        //changing background to white
        background("white");

        //displaying the element and button
        storyTime.displayScreen4();
        storyTime.displayButton();

        //changing gameState to StoryTimeScreen5 if nextButton is pressed
        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen5";
        })
    }

    //following commands to be executed if gameState is StoryTimeScreen5
    if(gameState === "storyTimeScreen5")
    {
        //changing background to white
        background("white");

        //displaying the element and button
        storyTime.displayScreen5();
        storyTime.displayButton();

        //changing gameState to StoryTimeScreen6 if nextButton is pressed
        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen6";
        })
    }

    //following commands to be executed if gameState is StoryTimeScreen6
    if(gameState === "storyTimeScreen6")
    {
        //changing background to white
        background("white");

        //displaying the element and button
        storyTime.displayScreen6();
        storyTime.displayButton();

        //changing gameState to forestOfFog if nextButton is pressed
        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "forestOfFog";
        })
    }

    //following commands to be executed if game state is forestOfFog
    if(gameState === "forestOfFog")
    {
        //changing background to white
        background("white");

        //hiding the storyTime
        storyTime.hide();

        //if init is false then player should initialise
        if(!init)
        {
            playerInit();
            init = true; 
        }

        //adding the backgroundImage and making it visible
        backgroundSprite.addImage("ForestOfFog",forestOfFog);
        backgroundSprite.visible = true;

        //making player and ground visible
        playerSprite.visible = true;
        groundSprite.visible = true;

        //updating player's position
        playerSprite.x = player.body.position.x;
        playerSprite.y = player.body.position.y;

        //moving the player
        player.move();

        // for(var posY = displayHeight*2/3; posY>-3*displayHeight; posY-=displayHeight/11)
        // {
        // }

        // for(var posX = displayWidth/10; posX<displayWidth*2; posX+=displayWidth/11)
        // {
        //     var posY = displayHeight*2/3;
        //     if(posY>-3*displayHeight)
        //     {
        //         posY=posY-displayHeight/11;
        //     }
        //     var platform = new Platform(posX,posY,100,10);
        //     var platformSprite = createSprite(platform.body.position.x,platform.body.position.y,platform.width,platform.height);
        // }
    }

    //making sprites visible
    drawSprites();
}   

//creating the playerInit function
function playerInit()
{
    player = new Player(displayWidth*2/3,displayHeight*2/3);
    playerSprite = createSprite(player.body.position.x,player.body.position.y,player.width,player.height);
    playerSprite.visible = false;
}
