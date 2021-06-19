PennController.ResetPrefix(null) // Keep here
,

 DebugOff()   // Uncomment this line only when you are 100% done designing your experiment

Sequence( "instructions", "orange", "orange2", "selection1", "pumpkin", "selena","apple", "banana",  "betty", "cat", "coffee", "danish", "dog","egg","mango","omar","blockswitch", "orange3", "orange4", "selection5", "pumpkin2", "selena2", "pasta","pizza","pom","roses", "snakeplant","avocado","taylor","tom","tree","turtle", SendResults())
//Sequence( "consent-form", "instructions", "orange", "orange2", "selection", "apple", "banana",  "betty", SendResults())

,

//Consent Form
newTrial("consent-form",

    newHtml("consent.html")
        .print()
    ,
    newButton("I have read the consent statement and I agree to continue.")
        .center()
        .log()
        .print()
        .wait()
)

,

//Instructions
newTrial("instructions",

    newHtml("instructions.html")
        .print()
    ,
    newButton("Go")
        .center()
        .print()
        .wait()
)

,

//practice experiment

//practice experiment

newTrial("orange",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("orangemiddle", "orangemiddle.html")
        .print()
    ,
    newButton("I am ready to look at the next picture.")
        .center()
        .print()
        .wait()
)

newTrial("orange2",
    newHtml("orangeearlier","orangeearlier.html")
        .print()
    ,
    newButton("I am ready to make my selection.")
        .center()
        .print()
        .wait()
)

newTrial("selection1",
    newText("Remember, based on your opinion, if the second picture of the full orange takes place earlier than the first picture of the cut oranges, you will click the white square. If the second picture of the full orange takes place at a later point of time after the first picture of the cut oranges, you will click on the black square.")
        .center()
        .print()
    ,
    
    newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    
    ,
    newButton("I understand the task fully. I am ready to try some more practice examples. This time the first picture will appear for 2 seconds, and then the second picture will appear for two seconds. After this, you will make your selection")
        .print()
        .wait()
        
        
)

//practice2

newTrial("pumpkin",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("pumpkinmiddle", "pumpkinmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pumpkinmiddle")
        .remove()
    ,
    newHtml("pumpkinearlier","pumpkinearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pumpkinearlier")
        .remove()
    ,
    newText("Remember, based on your opinion, if the second picture of the full pumpkin takes place earlier than the first picture of the sliced pumpkin, you will click the white square. If the second picture of the full pumpkin takes place at a later point of time after the first picture of the sliced pumpkin, you will click on the black square.")
        .center()
        .print()
    ,
    
    newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    
)
//practice3
newTrial("selena",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("selenamiddle", "selenamiddle.html")
        .print()
    ,
    
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("selenamiddle")
        .remove()
    ,
    newHtml("selenalater","selenalater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("selenalater")
        .remove()
    ,
    newText("Remember, based on your opinion, if the second picture of the woman is earlier than the first picture of the child, you will click the white square. If the second picture of the woman takes place at a later point of time after the first picture of the child, you will click on the black square.")
        .center()
        .print()
    ,
    
    newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    newText("The practice items are over. Now we will move on to the actual experiment. Click on the button below when you are ready")
        .print()
    ,
    newButton("Enter the experiment")
        .print()
        .wait()
    
)
//first experiment

//first experiment


newTrial("apple",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("applemiddle", "applemiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("applemiddle")
        .remove()
    ,
    newHtml("applelater","applelater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("applelater")
        .remove()
    ,
    
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("banana",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("bananamiddle", "bananamiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("bananamiddle")
        .remove()
    ,
    newHtml("bananalater","bananalater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("bananalater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("betty",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("bettymiddle", "bettymiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("bettymiddle")
        .remove()
    ,
    newHtml("bettyearlier","bettyearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("bettyearlier")
        .remove()
        
    
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("cat",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("catmiddle", "catmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("catmiddle")
        .remove()
    ,
    newHtml("catearlier","catearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("catearlier")
        .remove()
        ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );
    


newTrial("coffee",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("coffeemiddle", "coffeemiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("coffeemiddle")
        .remove()
    ,
    newHtml("coffeelater","coffeelater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("coffeelater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("danish",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("danishmiddle", "danishmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("danishmiddle")
        .remove()
    ,
    newHtml("danishearlier","danishearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("danishearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("dog",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("dogmiddle", "dogmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("dogmiddle")
        .remove()
    ,
    newHtml("doglater","doglater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("doglater")
        .remove()
        
        ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );
    

newTrial("egg",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("eggmiddle", "eggmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("eggmiddle")
        .remove()
    ,
    newHtml("egglater","egglater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("egglater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("mango",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("mangomiddle", "mangomiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("mangomiddle")
        .remove()
    ,
    newHtml("mangoearlier","mangoearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("mangoearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("omar",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("omarmiddle", "omarmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("omarmiddle")
        .remove()
    ,
    newHtml("omarearlier","omarearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("omarearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

///newblock with the mixed instructions
newTrial("blockswitch",

    newHtml("blockswitchinstructions.html")
        .print()
    ,
    newButton("Go")
        .center()
        .print()
        .wait()
)
//practice experiment

//practice experiment

newTrial("orange3",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("orangemiddle", "orangemiddle.html")
        .print()
    ,
    newButton("I am ready to look at the next picture.")
        .center()
        .print()
        .wait()
)

newTrial("orange4",
    newHtml("orangeearlier","orangeearlier.html")
        .print()
    ,
    newButton("I am ready to make my selection.")
        .center()
        .print()
        .wait()
)

newTrial("selection5",
    newText("Remember, based on your opinion, if the second picture of the full orange takes place earlier than the first picture of the cut oranges, you will click the white square. If the second picture of the full orange takes place at a later point of time after the first picture of the cut oranges, you will click on the black square.")
        .center()
        .print()
    ,
    
    newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    
    ,
    newButton("I understand the task fully. I am ready to try some more practice examples. This time the first picture will appear for 2 seconds, and then the second picture will appear for two seconds. After this, you will make your selection")
        .print()
        .wait()
        
        
)

//practice2

newTrial("pumpkin2",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("pumpkinmiddle", "pumpkinmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pumpkinmiddle")
        .remove()
    ,
    newHtml("pumpkinearlier","pumpkinearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pumpkinearlier")
        .remove()
    ,
    newText("Remember, based on your opinion, if the second picture of the full pumpkin takes place earlier than the first picture of the sliced pumpkin, you will click the white square. If the second picture of the full pumpkin takes place at a later point of time after the first picture of the sliced pumpkin, you will click on the black square.")
        .center()
        .print()
    ,
    
    newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    
)
//practice3
newTrial("selena2",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("selenamiddle", "selenamiddle.html")
        .print()
    ,
    
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("selenamiddle")
        .remove()
    ,
    newHtml("selenalater","selenalater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("selenalater")
        .remove()
    ,
    newText("Remember, based on your opinion, if the second picture of the woman is earlier than the first picture of the child, you will click the white square. If the second picture of the woman takes place at a later point of time after the first picture of the child, you will click on the black square.")
        .center()
        .print()
    ,
    
    newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('white.png') , getImage('black.png') )
        .log()
        .wait()
    ,
    newText("The practice items are over. Now we will move on to the actual experiment. Click on the button below when you are ready")
        .print()
    ,
    newButton("Enter the second half of the experiment")
        .print()
        .wait()
    
)
//block2

newTrial("pasta",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("pastamiddle", "pastamiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pastamiddle")
        .remove()
    ,
    newHtml("pastalater","pastalater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pastalater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("pizza",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("pizzamiddle", "pizzamiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pizzamiddle")
        .remove()
    ,
    newHtml("pizzaearlier","pizzaearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pizzaearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("pom",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("pommiddle", "pommiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pommiddle")
        .remove()
    ,
    newHtml("pomearlier","pomearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("pomearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("roses",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("rosesmiddle", "rosesmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("rosesmiddle")
        .remove()
    ,
    newHtml("roseslater","roseslater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("roseslater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("snakeplant",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("snakeplantmiddle", "snakeplantmiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("snakeplantmiddle")
        .remove()
    ,
    newHtml("snakeplantlater","snakeplantlater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("snakeplantlater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("avocado",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("avocadomiddle", "avocadomiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("avocadomiddle")
        .remove()
    ,
    newHtml("avocadoearlier","avocadoearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("avocadoearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("taylor",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("taylormiddle", "taylormiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("taylormiddle")
        .remove()
    ,
    newHtml("taylorearlier","taylorearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("taylorearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("tom",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("tommiddle", "tommiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("tommiddle")
        .remove()
    ,
    newHtml("tomearlier","tomearlier.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("tomearlier")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("tree",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("treemiddle", "treemiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("treemiddle")
        .remove()
    ,
    newHtml("treelater","treelater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("treelater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );

newTrial("turtle",
    newHtml("fixiation", "fixiation.html")
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    getHtml("fixiation")
        .remove()
    ,
    
    newHtml("turtlemiddle", "turtlemiddle.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("turtlemiddle")
        .remove()
    ,
    newHtml("turtlelater","turtlelater.html")
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getHtml("turtlelater")
        .remove()
        
    ,
     newImage('white.png' , 'white.png' )
        .settings.size(282, 258)
    ,
    newImage('black.png' , 'black.png' )
        .settings.size(281, 251)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( -5, 242, getImage('white.png'), 0 )
        .settings.add( 420, 250, getImage('black.png'), 1 )
        .print()
    ,
    
    newVar("RT").global().set( v => Date.now())
    ,
    newSelector("shape")
        .settings.add( getImage('black.png') , getImage('white.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        
)

.log( "ReactionTime" , getVar("RT") );









