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

var player;
var playerSprite;

var ground, groundSprite;

var init = false;

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

    buttons = new startScreenButtons();

    // regularPlatform = new Platform(displayWidth/2,displayHeight/2,100,10);
    // regularPlatSprite = createSprite(regularPlatform.body.position.x,regularPlatform.body.position.y,100,10);
    // regularPlatSprite.visible = false;

    ground = new Ground(displayWidth,displayHeight*7/8,displayWidth*2,displayHeight/38);
    groundSprite = createSprite(ground.body.position.x,ground.body.position.y,ground.width,ground.height);
    groundSprite.visible = false;
            
    allPlatformsMade = false;

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

        buttons.start();
    }    

    if(gameState === "storyTimeScreen1")
    {
        background("white");

        buttons.hide();

        storyTime.displayScreen1();
        storyTime.displayButton();

        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen2";
        })
    }

    if(gameState === "storyTimeScreen2")
    {
        background("white");

        storyTime.displayScreen2();
        storyTime.displayButton();

        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen3";
        })
    }

    if(gameState === "storyTimeScreen3")
    {
        background("white");

        storyTime.displayScreen3();
        storyTime.displayButton();

        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen4";
        })
    }

    if(gameState === "storyTimeScreen4")
    {
        background("white");

        storyTime.displayScreen4();
        storyTime.displayButton();

        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen5";
        })
    }

    if(gameState === "storyTimeScreen5")
    {
        background("white");

        storyTime.displayScreen5();
        storyTime.displayButton();

        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "storyTimeScreen6";
        })
    }

    if(gameState === "storyTimeScreen6")
    {
        background("white");

        storyTime.displayScreen6();
        storyTime.displayButton();

        storyTime.nextButton.mousePressed(()=>
        {
            gameState = "forestOfFog";
        })
    }

    //following commands to be executed if game state is forestOfFog
    if(gameState === "forestOfFog")
    {
        background("white");

        storyTime.hide();

        if(!init)
        {
            playerInit();
            init = true; 
        }

        backgroundSprite.addImage("ForestOfFog",forestOfFog);
        backgroundSprite.visible = true;

        playerSprite.visible = true;
        groundSprite.visible = true;

        playerSprite.x = player.body.position.x;
        playerSprite.y = player.body.position.y;

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

function playerInit()
{
    player = new Player(displayWidth*2/3,displayHeight*2/3);
    playerSprite = createSprite(player.body.position.x,player.body.position.y,player.width,player.height);
    playerSprite.visible = false;
}
