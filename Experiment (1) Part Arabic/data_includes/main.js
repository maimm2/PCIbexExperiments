PennController.ResetPrefix(null) // Keep here
,

//DebugOff()   // Uncomment this line only when you are 100% done designing your experiment

Sequence("instructions", "practice1", "practice2","1yesterday", "1tomorrow", "2longago", "2future", "3lastweek", "3nextweek", "4winter", "4summer", "5morning", "5evening", "6wakeup", "6goingtobed", "7tuesday", "7thursday", "8baby", "8old", "9lastmonth", "9nextmonth", "10lastyear", "10nextyear", "11sunrise", "11sunset", "12dusk", "12dawn", SendResults())
,

//Consent Form
newTrial("consent-form",

    newHtml("consent.html")
        .print()
    ,
    newButton("I have read the consent statement and I agree to continue.")
        .center()
        .print()
        .wait()
)


//Instructions
newTrial("instructions",

    newHtml("instructions.html")
        .print()
    ,
    newButton("التالي")
        .center()
        .print()
        .wait()
)

//practice

newTrial("practice1",
    newText(".سنقوم ببعض التمرينات البسيطة قبل التجربة. هذا اول تمرين")
        .center()
        .print()
    ,
    newText("ستمثل الدائرة في هذه الصورة نقطة الزمن التي سوف نطلب منك المقارنة بها في هذه التجربة، ولذلك اذا كانت الدائرة ترمز الى الظهر، فاي سهم سيرمز إلى الصباح بالنسبة لك؟ اضغط على السهم ثم اضغط على زر التالي اسفل الشاشة.")
        .center()
        .print()
    ,
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .wait()
    ,
    newButton("التالي")
        .center()
        .print()
        .wait()
)

newTrial("practice2",
    
    newText("ستمثل الدائرة في هذه الصورة نقطة الزمن التي سوف نطلب منك المقارنة بها في هذه التجربة، ولذلك اذا كانت الدائرة ترمز الى الليل، فاي سهم سيرمز إلى الصباح بالنسبة لك؟ اضغط على السهم ثم اضغط على زر التالي اسفل الشاشة.")
        .center()
        .print()

    ,
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .wait()
    ,
    newButton("التالي")
        .center()
        .print()
        .wait()
)

newTrial("warning",
    newText(" انتهت التمرينات والان سنبدأ التجربة. عندما تضغط على زر التالي، ستبدأالتجربة وسيتم تشغيل المقطع الصوتي تلقائياً.")
        .print()
    ,
    newButton("التالي")
        .center()
        .print()
        .wait()
)

//item 1
newTrial("1yesterday",
     newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()    
    ,
    newHtml("1yesterday","1yesterday.html")
        .print()
    ,
    newTimer("wait", 10000)
        .start()
        .wait()
    ,
    getHtml("1yesterday")
        .remove()
    ,
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("1tomorrow",
    
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()    
    
    ,
    newHtml("1tomorrow","1tomorrow.html")
        .print()
    ,
    newTimer("wait", 9000)
        .start()
        .wait()
    ,
    getHtml("1tomorrow")
        .remove()

    ,   
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item 2
newTrial("2longago",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("2longago","2longago.html")
        .print()
    ,
    newTimer("wait", 11000)
        .start()
        .wait()
    ,
    getHtml("2longago")
        .remove()
    
    ,
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("2future",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("2future","2future.html")
        .print()
    ,
    newTimer("wait", 10000)
        .start()
        .wait()
    ,
    getHtml("2future")
        .remove()
        
    ,
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );
    

//item3
newTrial("3lastweek",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("3lastweek","3lastweek.html")
        .print()
    ,
    newTimer("wait", 11000)
        .start()
        .wait()
    ,
    getHtml("3lastweek")
        .remove()
    
        
    ,
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );
    


newTrial("3nextweek",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    
    ,   
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("3nextweek","3nextweek.html")
        .print()
    ,
    newTimer("wait", 10000)
        .start()
        .wait()
    ,
    getHtml("3nextweek")
        .remove()
    
    ,
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item4
newTrial("4winter",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("4winter","4winter.html")
        .print()
    ,
    newTimer("wait", 9000)
        .start()
        .wait()
    ,
    getHtml("4winter")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("4summer",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("4summer","4summer.html")
        .print()
    ,
    newTimer("wait", 8000)
        .start()
        .wait()
    ,
    getHtml("4summer")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );
 //item5

newTrial("5morning",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("5morning","5morning.html")
        .print()
    ,
    newTimer("wait", 9000)
        .start()
        .wait()
    ,
    getHtml("5morning")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("5evening",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("5evening","5evening.html")
        .print()
    ,
    newTimer("wait", 8000)
        .start()
        .wait()
    ,
    getHtml("5evening")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );


//item6
newTrial("6wakeup",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("6wakeup","6wakeup.html")
        .print()
    ,
    newTimer("wait", 10000)
        .start()
        .wait()
    ,
    getHtml("6wakeup")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
)
.log( "ReactionTime" , getVar("RT") );

newTrial("6goingtobed",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("6goingtobed","6goingtobed.html")
        .print()
    ,
    newTimer("wait", 13000)
        .start()
        .wait()
    ,
    getHtml("6goingtobed")
        .remove()
    ,
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item7
newTrial("7tuesday",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("7tuesday","7tuesday.html")
        .print()
    ,
    newTimer("wait", 6500)
        .start()
        .wait()
    ,
    getHtml("7tuesday")
        .remove()
    ,

    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
        ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("7thursday",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("7thursday","7thursday.html")
        .print()
    ,
    newTimer("wait", 6500)
        .start()
        .wait()
    ,
    getHtml("7thursday")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item8
newTrial("8baby",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("8baby","8baby.html")
        .print()
    ,
    newTimer("wait", 9000)
        .start()
        .wait()
    ,
    getHtml("8baby")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("8old",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("8old","8old.html")
        .print()
    ,
    newTimer("wait", 9000)
        .start()
        .wait()
    ,
    getHtml("8old")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item9

newTrial("9lastmonth",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("9lastmonth","9lastmonth.html")
        .print()
    ,
    newTimer("wait", 10000)
        .start()
        .wait()
    ,
    getHtml("9lastmonth")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("9nextmonth",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("9nextmonth","9nextmonth.html")
        .print()
    ,
    newTimer("wait", 8000)
        .start()
        .wait()
    ,
    getHtml("9nextmonth")
        .remove()
    ,

    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item10

newTrial("10lastyear",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("10lastyear","10lastyear.html")
        .print()
    ,
    newTimer("wait", 8500)
        .start()
        .wait()
    ,
    getHtml("10lastyear")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("10nextyear",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("10nextyear","10nextyear.html")
        .print()
    ,
    newTimer("wait", 7500)
        .start()
        .wait()
    ,
    getHtml("10nextyear")
        .remove()
    ,
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item11

newTrial("11sunrise",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("11sunrise","11sunrise.html")
        .print()
    ,
    newTimer("wait", 10000)
        .start()
        .wait()
    ,
    getHtml("11sunrise")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
            ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("11sunset",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("11sunset","11sunset.html")
        .print()
    ,
    newTimer("wait", 6500)
        .start()
        .wait()
    ,
    getHtml("11sunset")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,

    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

//item12

newTrial("12dawn",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
        
    ,
    newTimer("wait", 1000)
        .start()
        .wait()
    ,
    newHtml("12dawn","12dawn.html")
        .print()
    ,
    newTimer("wait", 7500)
        .start()
        .wait()
    ,
    getHtml("12dawn")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("التالي")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );

newTrial("12dusk",
    newImage('left.png' , 'left.png' )
        .settings.size(359, 132)
    ,
    newImage('right.png' , 'right.png' )
        .settings.size(340, 132)
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 164, getImage('left.png'), 0 )
        .settings.add( 354, 162, getImage('right.png'), 1 )
        .print()
    ,
    
        newTimer("wait", 500)
        .start()
        .wait()
    ,
    newHtml("12dusk","12dusk.html")
        .print()
    ,
    newTimer("wait", 700)
        .start()
        .wait()
    ,
    getHtml("12dusk")
        .remove()
    ,
    
    newVar("RT").global().set( v => Date.now())    
    ,
    newSelector("shape")
        .settings.add( getImage('left.png') , getImage('right.png') )
        .log()
        .wait()
    ,
    getVar("RT").set( v => Date.now() - v )
    ,
    
    newButton("Next.")
        .center()
        .print()
        .wait()
    
)
.log( "ReactionTime" , getVar("RT") );



   