var turn = true;
var turnCount = 0;
var gameOver = false;
var player1score = 0;
var player2score = 0;
var player1Array = [];
var player2Array = [];
var time = 5;
document.getElementById("score1").innerHTML = player1score;
document.getElementById("score2").innerHTML = player2score;

document.getElementById("two_player").onclick = function() {startGame()};
function startGame() {
    gameOver = false;
    turn = true;
    turnCount = 0;
    player1score = 0;
    player2score = 0;
    player1Array = [];
    player2Array = [];
    time = 5;
    document.getElementById("display").innerHTML = "It's your turn, Player 1.";
    document.getElementById("timer").innerHTML = 'Time remaining: <span id="timeRemaining"></span> seconds';
    document.getElementById("timeRemaining").innerHTML = time;
    var x = setInterval(function() {
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
    startGame();
    document.getElementById("score1").innerHTML = player1score;
    document.getElementById("score2").innerHTML = player2score;
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
    startGame();
}