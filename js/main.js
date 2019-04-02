var start = document.querySelector("#strt-btn");
var ga2 = document.querySelector("#gameArea2");
var ga = document.querySelector(".gameArea");
var guessArea = document.querySelector(".guess");
var notLetters = document.querySelector(".not-letters2");


var level = document.querySelector("#lev");
var chances = document.querySelector("#chances");
var time = document.querySelector("#time");

var winLose = document.querySelector(".winLose");
var muteBtn = document.querySelector(".muteBtnI");
var mute = document.querySelector(".mute");

var list;
var val;


var backCategory = document.querySelector(".back")
var closeBtn = document.querySelector("#close");

start.addEventListener("click", function () {

    ga2.style.display = "flex";
    ga.style.display = "none";

});

backCategory.addEventListener("click", function () {

    ga.style.display = "flex";
    ga2.style.display = "none";

});

closeBtn.addEventListener("click", function () {

    showLetter();
    hangGifContainer.innerHTML = '<hr>';
    hangmanGifsIndex = 0;
    chances.innerHTML = "10"
    level.innerHTML = "0";

    ga.style.display = "flex";
    mainGA.style.display = "none";
    levels.style.display = "none";
    letters.style.display = "none";
    guessArea.style.display = "none";
    clearInterval(val);
    guessArea.innerHTML = "";

});

var rulesBtn = document.querySelector("#rules-btn");
var rules = document.querySelector(".rules");


rulesBtn.addEventListener("click", function () {

    rules.style.display = "block";
    ga.style.display = "none";

});


var backRules = document.querySelector(".back2");
backRules.addEventListener("click", function () {

    ga.style.display = "flex";
    rules.style.display = "none";

});


var sportsBtn = document.querySelector(".sports");
var moviesBtn = document.querySelector(".movies");
var techBtn = document.querySelector(".tech");

var mainGA = document.querySelector(".main-game");
var levels = document.querySelector(".levels");
var letters = document.querySelector(".letters");
var name;


sportsBtn.addEventListener("click", function () {

    clearInterval(val);
    time.innerHTML = "120";

    timeStart();

    ga2.style.display = "none";
    ga.style.display = "none";

    mainGA.style.display = "block";
    levels.style.display = "block";
    letters.style.display = "block";
    guessArea.style.display = "block";

    var sprt = ["football", "basketball", "baseball", "cricket", "ronaldo", "messi", "tennis", "golf", "chess", "table tennis", "rugby", "swimming", "badminton", "roger federer"];

    list = sprt;
    random(list);

});

moviesBtn.addEventListener("click", function () {

    clearInterval(val);
    time.innerHTML = "120";
    timeStart();

    ga2.style.display = "none";
    ga.style.display = "none";

    mainGA.style.display = "block";
    levels.style.display = "block";
    letters.style.display = "block";
    guessArea.style.display = "block";

    var movieList = ["interstellar", "avengers", "teenage mutant ninja turtles", "spiderman", "iron man", "escape plan", "wonder woman", "inception", "god father", "superman", "creed", "baywatch"];



    list = movieList;
    random(list);

});


techBtn.addEventListener("click", function () {

    clearInterval(val);
    time.innerHTML = "120";
    timeStart();

    ga2.style.display = "none";
    ga.style.display = "none";

    mainGA.style.display = "block";
    levels.style.display = "block";
    letters.style.display = "block";
    guessArea.style.display = "block";

    var techList = ["i mac", "windows seven", "elon musk", "google", "javascript", "one plus", "keyboard", "java", "python", "ruby", "windows", "adobe", "photoshop", "illustrator"];



    list = techList;
    random(list);

});


//dashes are created with this function
function chooseOption(name) {
    var j;

    for (j = 0; j < name.length; j++) {

        if (name[j + 1] != " ") {
            guessArea.innerHTML += "_";
            console.log(name[j]);

        } else {
            console.log(name.length);
            guessArea.innerHTML += "_ ";
            j += 1;
        }
    }
}

//randomised number is generated for random words

function random(list) {

    var randNum = Math.random() * list.length;
    randNum = Math.floor(randNum);
    console.log(randNum);
    name = list[randNum];
    list.splice(randNum, 1);

    chooseOption(name, randNum);
}


var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");
var d = document.querySelector(".d");
var e = document.querySelector(".e");
var f = document.querySelector(".f");
var g = document.querySelector(".g");
var h = document.querySelector(".h");
var i = document.querySelector(".i");
var j = document.querySelector(".j");
var k = document.querySelector(".k");
var l = document.querySelector(".l");
var m = document.querySelector(".m");
var n = document.querySelector(".n");
var o = document.querySelector(".o");
var p = document.querySelector(".p");
var q = document.querySelector(".q");
var r = document.querySelector(".r");
var s = document.querySelector(".s");
var t = document.querySelector(".t");
var u = document.querySelector(".u");
var v = document.querySelector(".v");
var w = document.querySelector(".w");
var x = document.querySelector(".x");
var y = document.querySelector(".y");
var z = document.querySelector(".z");

a.addEventListener("click", function () {

    a.style.visibility = "hidden";
    checkGuess(name, "a");


});

b.addEventListener("click", function () {

    b.style.visibility = "hidden";
    checkGuess(name, "b");

});

c.addEventListener("click", function () {

    c.style.visibility = "hidden";
    checkGuess(name, "c");

});

d.addEventListener("click", function () {

    d.style.visibility = "hidden";
    checkGuess(name, "d");

});

e.addEventListener("click", function () {

    e.style.visibility = "hidden";
    checkGuess(name, "e");

});

f.addEventListener("click", function () {

    f.style.visibility = "hidden";
    checkGuess(name, "f");

});

g.addEventListener("click", function () {

    g.style.visibility = "hidden";
    checkGuess(name, "g");

});

h.addEventListener("click", function () {

    h.style.visibility = "hidden";
    checkGuess(name, "h");

});

i.addEventListener("click", function () {

    i.style.visibility = "hidden";
    checkGuess(name, "i");

});

j.addEventListener("click", function () {

    j.style.visibility = "hidden";
    checkGuess(name, "j");

});

k.addEventListener("click", function () {

    k.style.visibility = "hidden";
    checkGuess(name, "k");

});

l.addEventListener("click", function () {

    l.style.visibility = "hidden";
    checkGuess(name, "l");

});

m.addEventListener("click", function () {

    m.style.visibility = "hidden";
    checkGuess(name, "m");

});

n.addEventListener("click", function () {

    n.style.visibility = "hidden";
    checkGuess(name, "n");

});

o.addEventListener("click", function () {

    o.style.visibility = "hidden";
    checkGuess(name, "o");

});

p.addEventListener("click", function () {

    p.style.visibility = "hidden";
    checkGuess(name, "p");
});

q.addEventListener("click", function () {

    q.style.visibility = "hidden";
    checkGuess(name, "q");

});

r.addEventListener("click", function () {

    r.style.visibility = "hidden";
    checkGuess(name, "r");
});

s.addEventListener("click", function () {

    s.style.visibility = "hidden";
    checkGuess(name, "s");
});

t.addEventListener("click", function () {

    t.style.visibility = "hidden";
    checkGuess(name, "t");
});

u.addEventListener("click", function () {

    u.style.visibility = "hidden";
    checkGuess(name, "u");
});

v.addEventListener("click", function () {

    v.style.visibility = "hidden";
    checkGuess(name, "v");
});

w.addEventListener("click", function () {

    w.style.visibility = "hidden";
    checkGuess(name, "w");

});


x.addEventListener("click", function () {

    x.style.visibility = "hidden";
    checkGuess(name, "x");
});


y.addEventListener("click", function () {

    y.style.visibility = "hidden";
    checkGuess(name, "y");

});

z.addEventListener("click", function () {

    z.style.visibility = "hidden";
    checkGuess(name, "z");
});




//put letters in place of dash if the letter exists in the word.

function checkGuess(name, letter) {
    var j;
    var i;

    var check = 0;
    var copy = guessArea.innerHTML;
    console.log(guessArea.innerHTML.length);
    for (j = 0; j < name.length; j++) {

        if (name[j] == letter) {
            guessArea.innerHTML = "";
            check += 1;

            for (i = 0; i < name.length; i++) {

                if (i == j) {

                    guessArea.innerHTML += letter;
                } else {

                    guessArea.innerHTML += copy[i];
                }
            }

            copy = guessArea.innerHTML;

        }
    }

    if (check == 0) {
        var chance = parseInt(chances.innerHTML);
        if (chance == 0) {
            chance = 0;

        } else {
            chance = chance - 1;
            notLetters.innerHTML += letter;

            if (hangmanGifsIndex == 0) {

                hangGifContainer.innerHTML = '<hr><img class="gameHangGif" src="images/one.gif" alt="hangman GIF">';
                gameHangGif = document.querySelector(".gameHangGif");

            } else if (hangmanGifsIndex < 9) {
                gameHangGif.src = hangmanGifs[hangmanGifsIndex];

            }

            hangmanGifsIndex += 1;

            if (chance == 0) {

                winLosefnc(level.innerHTML, "0", time.innerHTML);
            }

        }
        chances.innerHTML = chance;
    }

    if (chance != 0) {
        checkAnswer(guessArea.innerHTML);
    }
}

//checks Final answer if there is a dash or not.

function checkAnswer(innerHtml) {
    var i;
    var check = 0;
    for (i = 0; i < innerHtml.length; i++) {

        if (innerHtml[i] == "_") {
            check += 1;
            console.log("hello");
        }
    }

    if (check == 0) {

        console.log("bye");
        guessArea.innerHTML = "";
        var lev = parseInt(level.innerHTML);
        lev = lev + 1;
        level.innerHTML = lev;
        winLosefnc(level.innerHTML, chances.innerHTML, time.innerHTML);
        showLetter();
        time.innerHTML = "120";
        if (parseInt(level.innerHTML) <= 2) {
            random(list);
        }


    }

}


//show all letters back

function showLetter() {

    a.style.visibility = "visible";
    b.style.visibility = "visible";
    c.style.visibility = "visible";
    d.style.visibility = "visible";
    e.style.visibility = "visible";
    f.style.visibility = "visible";
    g.style.visibility = "visible";
    h.style.visibility = "visible";
    i.style.visibility = "visible";
    j.style.visibility = "visible";
    k.style.visibility = "visible";
    l.style.visibility = "visible";
    m.style.visibility = "visible";
    n.style.visibility = "visible";
    o.style.visibility = "visible";
    p.style.visibility = "visible";
    q.style.visibility = "visible";
    r.style.visibility = "visible";
    s.style.visibility = "visible";
    t.style.visibility = "visible";
    u.style.visibility = "visible";
    v.style.visibility = "visible";
    w.style.visibility = "visible";
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.visibility = "visible";


    notLetters.innerHTML = "";



}


function winLosefnc(level, chances, time) {


    if (chances == "0" || time == "0") {

        winLose.style.display = "block";
        winLose.innerHTML = '<img src="images/main.gif" alt="hangman GIF" class="lastGif"><p class="win">You Lost!!</p>'
        homeBtn.style.display = "block";

        guessArea.innerHTML = "";
        guessArea.style.display = "none";
        levels.style.display = "none";
        letters.style.display = "none";
        mainGA.style.display = "none";

        clearInterval(val);
        time.innerHTML = "120";

    } else if (level == "3") {

        winLose.style.display = "block";
        winLose.innerHTML = '<i class="far fa-smile icon-4x"></i> <p class="win">You Win!!</p>'
        homeBtn.style.display = "block";

        guessArea.innerHTML = "";
        guessArea.style.display = "none";
        levels.style.display = "none";
        letters.style.display = "none";
        mainGA.style.display = "none";
        clearInterval(val);
        time.innerHTML = "120";

    }
}

//Timer Function
function countDown() {
    timer = parseInt(time.innerHTML);
    timer--;
    time.innerHTML = timer;

    if (timer == 0) {
        winLosefnc(level.innerHTML, chances.innerHTML, 0);

    }


}

//Timer start condition

function timeStart() {

    val = setInterval(countDown, 1000);

}

//For Audio on the page

var audio = new Audio()
var songCheck = 0;
audio.src = "../audio/mp.mp3";

muteBtn.addEventListener("click", playAudio);

function playAudio() {

    if (songCheck == 0) {
        muteBtn.innerHTML = '<i class="fas fa-volume-up mute"></i>';
        audio.play();
        songCheck += 1;

    } else {

        muteBtn.innerHTML = '<i class="fas fa-volume-mute mute"></i>';
        audio.pause();
        songCheck = 0;

    }

}


var hangmanGifs = ["images/one.gif", "images/two.gif", "images/three.gif", "images/four.gif", "images/five.gif", "images/six.gif", "images/seven.gif", "images/eight.gif", "images/nine.gif"];


var hangmanGifsIndex = 0;

var gameHangGif;

var hangGifContainer = document.querySelector(".hangGif");

var homeBtn = document.querySelector(".homeBtn");

homeBtn.addEventListener("click", function () {

    winLose.style.display = "none";
    homeBtn.style.display = "none";

    showLetter();
    hangGifContainer.innerHTML = '<hr>';
    hangmanGifsIndex = 0;
    chances.innerHTML = "10"
    level.innerHTML = "0";


    ga.style.display = "flex";
    clearInterval(val);

})
