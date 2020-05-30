// Created by Burey


var init = function(){
   //~~~~~~~~~~~~~~~~~~~~~~~~//
    // this is all that is needed to run the module!
    var options={
    // customize the following:
    // syntax is like css, but make sure:
    // key and value are both strings inside each option!
    "scoreboardWidth":"90%", //recommended
    "scoreboardHeight":"400", // recommended
    "submitDialogWidth":"auto", //recommended
    "submitDialogHeight":"auto", // recommended
    burey:{
// Scoreboard Module By Burey text
    "font-family":"Times New Roman",
    "font-style":"italic",
    "text-shadow": "5px 2px 4px grey",
    "color": "green",
    "background-color":"white",
    "border-radius": "25px"
    },
    dialogTitle:{
    // dialogs title bar
    "background":"black",
    "color":"white"
    },
    scoreboardContainer:{
    // scoreboard container dialog
    "background-color":"#97B5F5"
    },
    tableHeader:{
    // # Name Score Time
    "font-family":"Times New Roman",
    "color": "black"
    },
    scorePosition:{
    // #
    "font-family":"Times New Roman",
    "color": "blue"
    },
    scoreName:{
    // name of user
    "font-family":"'Press Start 2P', Times New Roman",
    "font-size":"10px",
    "color": "red",
    "word-wrap": "break-word",
    "max-width":"110px"
    },
    scoreValue:{
    // score value
    "font-family":"Times New Roman",
    "font-size": "15px",
    "color": "green"
    },
    scoreTime:{
    // time + date
    "font-family":"Times New Roman",
    "font-size":"12px",
    "color": "yellow"
    },
    newScoreContainer:{
    // submit new score dialog
    "background-color":"#97B5F5"
    },
    scoreYourScoreLabel:{
    // 'Your Score:' text in new score dialog
    "font-family":"Times New Roman",
    "color": "green"
    },
    scoreValueLabel:{
    // score value in new score dialog
    "font-family":"Times New Roman",
    "color": "blue",
    "margin-right":"25px"
    },
    scoreErrorLabel:{
    // error label in new score dialog
    "font-family":"Times New Roman",
    "color": "red"
    },
    scoreboardButtons:{
    // scoreboard dialog buttons
    "font-family":"Times New Roman",
    "text-shadow": "5px 2px 4px grey",
    "background":"red",
    "color": "white",
    "display":"block" // use "none" to hide button
    },
    newScoreButtons:{
    // new score dialog buttons
    "font-family":"Times New Roman",
    "text-shadow": "5px 2px 4px grey",
    "background":"black",
    "color": "white"
    },
    dialogButtonPanels:{
    "font-family":"Times New Roman",
    "text-shadow": "5px 2px 4px grey",
    "background":"#97B5F5",
    "color": "red"
    },
    sortDropDownList:{
    "font-family":"'Press Start 2P', Times New Roman",
    "font-size":"20px",
    "margin-left":"5px"
    },
    loaderOptions:{
    // scoreboard loading animation
    "border-bottom": "16px solid #888",
    "border-top": "16px solid #888",
    "border-right": "16px solid green",
    "border-left": "16px solid green",
    "margin-left": "auto",
    "margin-right": "auto"
    }
};
var options2={
    // customize the following:
    // syntax is like css, but make sure:
    // key and value are both strings!
    "scoreboardWidth":"90%", //recommended
    "scoreboardHeight":"400", // recommended
    "submitDialogWidth":"auto", //recommended
    "submitDialogHeight":"auto", // recommended
         burey:{
    // Scoreboard Module By Burey text
         "font-family":"Times New Roman",
         "font-style":"italic",
         "text-align":"center",
         "box-shadow":"0px 0px 3px #7710ff, inset 0px 0px 5px 1px black",
         "text-shadow": "5px 2px 4px grey",
         "color": "#9910ff",
         "background-color":"white",
         "border-radius": "25px"
         },
         dialogTitle:{
         // dialogs title bar
         "box-shadow":"0px 0px 3px #7710ff, inset 0px 0px 5px 1px white",
         "text-shadow": "0px 0px 1px #e0d0ff",
         'border':'1px solid #7710bb',
         "border-radius":"2%",
         "font-family":"Times New Roman",
         "text-align":"center",
         "background":"black",
         "color":"#9910ff"
         },
         scoreboardContainer:{
    // scoreboard container dialog
        "border":"1px solid grey",
         //"border-radius":"1%",
         "box-shadow":"0px 0px 3px #7710ff, inset 0px 0px 5px 1px white",
         "background-color":"black"
         },
         tableHeader:{
    // # Name Score Time
         "border-radius":"10px",
         "font-family":"Times New Roman",
         "text-align":"center",
         "border":"1px solid #7710bb",
"box-shadow":"0px 0px 2px #9910ff, inset 0px 0px 3px white",
"text-shadow": "0px 0px 1px #e0d0ff",
         "color": "#9910ff"
         },
         scorePosition:{
    // #
         "font-family":"Times New Roman",
         "color": "#9910ff"
         },
         scoreName:{
    // name of user
         "font-family":"Times New Roman",
         "color": "#9910ff",
         "word-wrap": "break-word",
         "max-width":"110px"
         },
         scoreValue:{
    // score value
         "font-family":"Times New Roman",
         "font-size": "15px",
         "color": "#9910ff"
         },
         scoreTime:{
    // time + date
         "font-family":"Times New Roman",
         "font-size":"12px",
         "color": "#9910ff"
         },
         newScoreContainer:{
    // submit new score dialog
         "background-color":"black"
         },
         scoreYourScoreLabel:{
    // 'Your Score:' text in new score dialog
         "font-family":"Times New Roman",
         "color": "#9910ff"
         },
         scoreValueLabel:{
    // score value in new score dialog
         "font-family":"Times New Roman",
         "color": "#9910ff",
         "margin-right":"25px"
         },
         scoreErrorLabel:{
    // error label in new score dialog
         "font-family":"Times New Roman",
         "color": "red"
         },
         scoreboardButtons:{
    // scoreboard dialog buttons
         "font-family":"Times New Roman",
         "text-shadow": "5px 2px 4px grey",
         "background":"black",
         "color": "#9910ff",
         "display":"block" // remove button
         },
         newScoreButtons:{
    // new score dialog buttons
        "font-family":"Times New Roman",
         "text-shadow": "5px 2px 4px grey",
         "background":"black",
         "color": "#9910ff"
         },
         dialogButtonPanels:{
         "font-family":"Times New Roman",
         "text-shadow": "5px 2px 4px grey",
         "background":"black",
         "color": "#9910ff"
         },
         sortDropDownList:{
            "font-family":"Times New Roman",
            "font-size":"20px",
            "margin-left":"5px"
         },
         loaderOptions:{
     // scoreboard loading animation
        "border-bottom": "25px solid #888", /* Light grey */
        "border-top": "25px solid #888", /* Light grey */
        "border-right": "25px solid #9910ff",
        "border-left": "25px solid #9910ff",
        "margin-left": "auto",
        "margin-right": "auto"
    }
};

    var scoreboard = null;
   $(document).ready(function() {
       // load the scoreboard only when done loading the script!!!
      scoreboard = new Scoreboard(options2);
   });
    
    
    //////// USAGE EXAMPLE //////////
    // method to open new score submition dialog (call this after game over)
    //scoreboard.submitNewScoreDialog(124);
    
    // method to show the scoreboard (call this after user submitted a new score)
    //scoreboard.showScoreBoard();
   
   ///////////////////////////////
   
   
 /// USAGE EXAMPLE WITH BUTTONS ///
  document.getElementById('show_scoreboard').onclick=function(){
     scoreboard.showScoreBoard();
 };
 document.getElementById('add_score').onclick=function(){
     score = document.getElementById('lbl_score').innerHTML;
     scoreboard.submitNewScoreDialog(score);
 };
 ///////////////////////////////
 
 
function randomizeScore(){
document.getElementById('lbl_score').innerHTML = String(Math.floor(Math.random()*1000));
}
 
  document.getElementById('randomize').onclick = randomizeScore;
 
randomizeScore();
    
    var rules={
            "rules": {
              ".read": false,
              ".write": false,
              "scores": {
                ".read": true,
                ".indexOn": ["score"],
                "$score": {
                  ".write":"newData.exists() || !newData.exists()",
                  ".validate": "newData.hasChildren(['name', 'score', 'time'])",
                  "name": {
                    ".validate": "newData.isString() && newData.val().length <= 30"
                    },
                    "score": {
                      ".validate": "newData.isNumber()"
                    },
                    "time": {
                      ".validate": "newData.isNumber() && newData.val() <= now"
                    }
                  }
                }
            }
        };
     
     strRules=JSON.stringify(rules,null,2);
        document.getElementById('rules').appendChild(document.createTextNode(strRules));
        strExampleOptions=JSON.stringify(options2,null,2);
        document.getElementById('example_options').appendChild(document.createTextNode(strExampleOptions));
        //document.getElementById('rules').innerHTML+=str;
};



$(init);