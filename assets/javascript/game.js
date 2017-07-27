//capitals of the states and random value
var capitals = ["montgomery", "juneau", "phoenix", "little rock", "sacramento", "denver", "hartford", "dover",
               "tallahassee", "atlanta", "honolulu", "boise","springfield", "indianapolis", "des moines", "topeka",
               "frankfort", "baton rouge", "augusta", "annapolis", "boston", "lansing", "saint paul", "jackson",
               "jefferson city", "helena", "lincoln", "carson city", "concord", "trenton", "santa fe", "albany",
               "raleigh", "bismarck", "columbus", "oklahoma city", "salem", "harrisburg", "providence", "columbia",
               "pierre", "nashville", "austin", "salt lake city", "montpelier", "richmond", "olympia", "charleston",
               "madison", "cheyenne"];
var randomword = capitals[Math.floor(capitals.length * Math.random())];

//counters
var vwins = 0;
var dwins = document.getElementById("dwins");
dwins.textContent = vwins;
var vlosses = 0;
var dlosses = document.getElementById("dlosses");
dlosses.textContent = vlosses;
var vgamesleft = 9;
var dgamesleft = document.getElementById("dgamesleft");
dgamesleft.textContent = vgamesleft;
var vletterplay = "";
var dletterplay = document.getElementById("dletterplay");
dletterplay.textContent = vletterplay;
var vWonGame = 0;

// Let's start by grabbing a reference to the <span> below.
var vunderscore = "_";
var userText = document.getElementById("user-text");
var vrandomwordlength = randomword.length;
userText.textContent = vunderscore.repeat(vrandomwordlength);
var incompleteword = userText.textContent;
console.log("Current ramdom value " + randomword);

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {

	//userText.textContent = event.key;
	vletterplay = vletterplay + "  " + event.key;
	dletterplay.textContent = vletterplay;

	if (vgamesleft >= 1) {

		if (randomword.search(event.key.toLowerCase()) >= 0) {

        var playPromise = document.getElementById("playb").play();
        if (playPromise !== undefined) {
           playPromise.then(_ => {
           // Automatic playback started!
           // Show playing UI.
           })
           .catch(error => {
           // Auto-play was prevented
           // Show paused UI.
           });
         }

        createword();

        userText.textContent = incompleteword;

        if (incompleteword == randomword) {
          vwins++;
          dwins.textContent = vwins;
          vWonGame = 1;
          var playPromise = document.getElementById("playw").play();
            if (playPromise !== undefined) {
              playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
              })
              .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
              });
            }

          alert("You won the game");
        }

		}
			else {
				
				vgamesleft--;
				dgamesleft.textContent = vgamesleft;

  				var playPromise = document.getElementById("playl").play();
  				if (playPromise !== undefined) {
    				playPromise.then(_ => {
      				// Automatic playback started!
      				// Show playing UI.
    				})
    				.catch(error => {
      				// Auto-play was prevented
      				// Show paused UI.
    				});
  				}

				//alert("You loose this time");
			}

	}
		else {

			var playPromise = document.getElementById("playf").play();
  			if (playPromise !== undefined) {
    			playPromise.then(_ => {
      			// Automatic playback started!
      			// Show playing UI.
    			})
    			.catch(error => {
      			// Auto-play was prevented
      			// Show paused UI.
    			});
  			}
      vlosses++;
      dlosses.textContent = vlosses;
      vWonGame = 2;
			alert("You loose this time");

		}

  if (vWonGame == 1 || vWonGame == 2) {

    vWonGame = 0;
    vgamesleft = 9;
    dgamesleft.textContent = vgamesleft;
    vletterplay = "";
    dletterplay.textContent = vletterplay;
    randomword = capitals[Math.floor(capitals.length * Math.random())];
    vrandomwordlength = randomword.length;
    userText.textContent = vunderscore.repeat(vrandomwordlength);
    incompleteword = userText.textContent;
    console.log("Next Random Value " + randomword);
  }


};

function createword() {

  var vlettersinword = randomword;
  var vlettersinpage = userText.textContent;
  var incomplete1 = "";
  for (var i = 0; i < vrandomwordlength; i++) {
    if (vlettersinword.substr(i,1) == event.key.toLowerCase()) {
      incomplete1 = incomplete1 + event.key.toLowerCase();
    }
      else if (vlettersinword.substr(i,1) == " ") {
        incomplete1 = incomplete1 + " ";
      }
      else {
        incomplete1 = incomplete1 + "*";
      }
  }
  var incomplete2 = "";
  for (var i = 0; i < vrandomwordlength; i++) {
    if (vlettersinpage.substr(i,1) == event.key.toLowerCase()) {
      incomplete2 = incomplete2 + event.key.toLowerCase();
    }
      else if (vlettersinpage.substr(i,1) == " ") {
        incomplete2 = incomplete2 + " ";
      }
      else if (vlettersinpage.substr(i,1) != "_") {
        incomplete2 = incomplete2 + vlettersinpage.substr(i,1);
      }
      else {
        incomplete2 = incomplete2 + "_";
      }
  }
  vlettersinword = incomplete1;
  vlettersinpage = incomplete2;
  incompleteword = "";
  for (var i = 0; i < vrandomwordlength; i++) {
    if (vlettersinpage.substr(i,1) == vlettersinword.substr(i,1)) {
      incompleteword = incompleteword + vlettersinpage.substr(i,1);
    }
      else if (vlettersinpage.substr(i,1) == "_" && vlettersinword.substr(i,1) == "*") {
        incompleteword = incompleteword + "_";
      }
      else if (vlettersinpage.substr(i,1) == "_" && vlettersinword.substr(i,1) != "*") {
        incompleteword = incompleteword + vlettersinword.substr(i,1);
      }
      else if (vlettersinpage.substr(i,1) != "_" && vlettersinword.substr(i,1) == "*") {
        incompleteword = incompleteword + vlettersinpage.substr(i,1);
      }
  }

};

