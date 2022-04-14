var turn = true;
var turnCount = 0;
var gameOver = false;
var player1score = 0;
var player2score = 0;
var player1Array = [];
var player2Array = [];
var time = 5;
var isSinglePlayer;
document.getElementById("score1").innerHTML = player1score;
document.getElementById("score2").innerHTML = player2score;
var myTimer;


document.getElementById("single_player").onclick = function() {startAIGame()};
document.getElementById("two_player").onclick = function() {startGame()};

function startAIGame() {
    isSinglePlayer = true;
    gameOver = false;
    turn = true;
    turnCount = 0;
    player1Array = [];
    player2Array = [];
    time = 5;
    document.getElementById("display").innerHTML = "It's your turn, Player 1.";
    document.getElementById("timer").innerHTML = 'Time remaining: <span id="timeRemaining"></span> seconds';
    document.getElementById("timeRemaining").innerHTML = time;
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        document.getElementById("timeRemaining").innerHTML = time--;
        if(time < 0) {
            time = 5;
            document.getElementById("timeout_display").innerHTML = "Timeout! Next players turn.";
            if(turn) {
                turn = false;
                document.getElementById("display").innerHTML = "It's your turn, Player 2.";
            } else {
                turn = true;
                document.getElementById("display").innerHTML = "It's your turn, Player 1.";

            }
        }
        if(isSinglePlayer && !turn && !gameOver) {
            var randomInt;
            var found_spot = false;
            while(!found_spot) {
                randomInt = Math.floor(Math.random() * 9 + 1)
                if(randomInt == 1 && !player1Array.includes("one") && !player2Array.includes("one")) {
                    document.getElementById("one").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("one");
                    found_spot = true;
                } else if(randomInt == 2 && !player1Array.includes("two") && !player2Array.includes("two")) {
                    document.getElementById("two").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("two");
                    found_spot = true;
                } else if(randomInt == 3 && !player1Array.includes("three") && !player2Array.includes("three")) {
                    document.getElementById("three").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("three");
                    found_spot = true;
                } else if(randomInt == 4 && !player1Array.includes("four") && !player2Array.includes("four")) {
                    document.getElementById("four").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("four");
                    found_spot = true;
                } else if(randomInt == 5 && !player1Array.includes("five") && !player2Array.includes("five")) {
                    document.getElementById("five").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("five");
                    found_spot = true;
                } else if(randomInt == 6 && !player1Array.includes("six") && !player2Array.includes("six")) {
                    document.getElementById("six").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("six");
                    found_spot = true;
                } else if(randomInt == 7 && !player1Array.includes("seven") && !player2Array.includes("seven")) {
                    document.getElementById("seven").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("seven");
                    found_spot = true;
                } else if(randomInt == 8 && !player1Array.includes("eight") && !player2Array.includes("eight")) {
                    document.getElementById("eight").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("eight");
                    found_spot = true;
                } else if(randomInt == 9 && !player1Array.includes("nine") && !player2Array.includes("nine")) {
                    document.getElementById("nine").innerHTML = '<span class="xo"> O</span>';
                    player2Array.push("nine");
                    found_spot = true;
                }
            }  
            turn = true;
            turnCount++;
            document.getElementById("display").innerHTML = "It's your turn, Player 1.";
            time = 5;

            if((player1Array.includes("one") && player1Array.includes("two") && player1Array.includes("three"))
                || (player1Array.includes("four") && player1Array.includes("five") && player1Array.includes("six"))
                || (player1Array.includes("seven") && player1Array.includes("eight") && player1Array.includes("nine"))
                || (player1Array.includes("one") && player1Array.includes("four") && player1Array.includes("seven"))
                || (player1Array.includes("two") && player1Array.includes("five") && player1Array.includes("eight"))
                || (player1Array.includes("three") && player1Array.includes("six") && player1Array.includes("nine"))
                || (player1Array.includes("one") && player1Array.includes("five") && player1Array.includes("nine"))
                || (player1Array.includes("three") && player1Array.includes("five") && player1Array.includes("seven"))) {
                    document.getElementById("display").innerHTML = "Player 1 wins!";
                    gameOver = true;
                    player1score++;
                    document.getElementById("score1").innerHTML = player1score;


            }

            if((player2Array.includes("one") && player2Array.includes("two") && player2Array.includes("three"))
                || (player2Array.includes("four") && player2Array.includes("five") && player2Array.includes("six"))
                || (player2Array.includes("seven") && player2Array.includes("eight") && player2Array.includes("nine"))
                || (player2Array.includes("one") && player2Array.includes("four") && player2Array.includes("seven"))
                || (player2Array.includes("two") && player2Array.includes("five") && player2Array.includes("eight"))
                || (player2Array.includes("three") && player2Array.includes("six") && player2Array.includes("nine"))
                || (player2Array.includes("one") && player2Array.includes("five") && player2Array.includes("nine"))
                || (player2Array.includes("three") && player2Array.includes("five") && player2Array.includes("seven"))) {
                    document.getElementById("display").innerHTML = "Player 2 wins!";
                    gameOver = true;
                    player2score++;
                    document.getElementById("score2").innerHTML = player2score;
            }

            if(turnCount >= 9 && !gameOver) {
                document.getElementById("display").innerHTML = "This game is a draw!";
            }
        }
        
    }, 1000);
}

function startGame() {
    isSinglePlayer = false;
    gameOver = false;
    turn = true;
    turnCount = 0;
    player1Array = [];
    player2Array = [];
    time = 5;
    document.getElementById("display").innerHTML = "It's your turn, Player 1.";
    document.getElementById("timer").innerHTML = 'Time remaining: <span id="timeRemaining"></span> seconds';
    document.getElementById("timeRemaining").innerHTML = time;
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        document.getElementById("timeRemaining").innerHTML = time--;
        if(time < 0) {
            time = 5;
            document.getElementById("timeout_display").innerHTML = "Timeout! Next players turn.";
            if(turn) {
                turn = false;
                document.getElementById("display").innerHTML = "It's your turn, Player 2.";
            } else {
                turn = true;
                document.getElementById("display").innerHTML = "It's your turn, Player 1.";

            }
        }
    }, 1000);
}



document.getElementById("one").onclick = function() {placeElement("one")};
document.getElementById("two").onclick = function() {placeElement("two")};
document.getElementById("three").onclick = function() {placeElement("three")};
document.getElementById("four").onclick = function() {placeElement("four")};
document.getElementById("five").onclick = function() {placeElement("five")};
document.getElementById("six").onclick = function() {placeElement("six")};
document.getElementById("seven").onclick = function() {placeElement("seven")};
document.getElementById("eight").onclick = function() {placeElement("eight")};
document.getElementById("nine").onclick = function() {placeElement("nine")};

document.getElementById("new_game").onclick = function() {newGame()};
document.getElementById("reset").onclick = function() {resetGame()};

function placeElement(elem) {
    document.getElementById("timeout_display").innerHTML = "";
    if(turn) {
        document.getElementById(elem).innerHTML = '<span class="xo"> X</span>';
        player1Array.push(elem);
        turn = false;
        turnCount++;
        document.getElementById("display").innerHTML = "It's your turn, Player 2.";
        time = 5;
    } else {
        document.getElementById(elem).innerHTML = '<span class="xo"> O</span>';
        player2Array.push(elem);
        turn = true;
        turnCount++;
        document.getElementById("display").innerHTML = "It's your turn, Player 1.";
        time = 5;
    }
    

    if((player1Array.includes("one") && player1Array.includes("two") && player1Array.includes("three"))
        || (player1Array.includes("four") && player1Array.includes("five") && player1Array.includes("six"))
        || (player1Array.includes("seven") && player1Array.includes("eight") && player1Array.includes("nine"))
        || (player1Array.includes("one") && player1Array.includes("four") && player1Array.includes("seven"))
        || (player1Array.includes("two") && player1Array.includes("five") && player1Array.includes("eight"))
        || (player1Array.includes("three") && player1Array.includes("six") && player1Array.includes("nine"))
        || (player1Array.includes("one") && player1Array.includes("five") && player1Array.includes("nine"))
        || (player1Array.includes("three") && player1Array.includes("five") && player1Array.includes("seven"))) {
            document.getElementById("display").innerHTML = "Player 1 wins!";
            gameOver = true;
            player1score++;
            document.getElementById("score1").innerHTML = player1score;


    }

    if((player2Array.includes("one") && player2Array.includes("two") && player2Array.includes("three"))
        || (player2Array.includes("four") && player2Array.includes("five") && player2Array.includes("six"))
        || (player2Array.includes("seven") && player2Array.includes("eight") && player2Array.includes("nine"))
        || (player2Array.includes("one") && player2Array.includes("four") && player2Array.includes("seven"))
        || (player2Array.includes("two") && player2Array.includes("five") && player2Array.includes("eight"))
        || (player2Array.includes("three") && player2Array.includes("six") && player2Array.includes("nine"))
        || (player2Array.includes("one") && player2Array.includes("five") && player2Array.includes("nine"))
        || (player2Array.includes("three") && player2Array.includes("five") && player2Array.includes("seven"))) {
            document.getElementById("display").innerHTML = "Player 2 wins!";
            gameOver = true;
            player2score++;
            document.getElementById("score2").innerHTML = player2score;
    }

    if(turnCount >= 9 && !gameOver) {
        document.getElementById("display").innerHTML = "This game is a draw!";
    }
  
}

function resetGame() {
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    document.getElementById("seven").innerHTML = "";
    document.getElementById("eight").innerHTML = "";
    document.getElementById("nine").innerHTML = "";
    player1score = 0;
    player2score = 0;
    document.getElementById("score1").innerHTML = player1score;
    document.getElementById("score2").innerHTML = player2score;
    if(isSinglePlayer) {
        startAIGame();
    } else {
        startGame();
    }
    
}

function newGame() {
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    document.getElementById("seven").innerHTML = "";
    document.getElementById("eight").innerHTML = "";
    document.getElementById("nine").innerHTML = "";
    if(isSinglePlayer) {
        startAIGame();
    } else {
        startGame();
    }
}