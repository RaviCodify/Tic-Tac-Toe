console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let audioGameover = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;

// function to change the turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check for win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 3, 7.5, 0],
    [3, 4, 5, 3, 22.5, 0],
    [6, 7, 8, 3, 37.5, 0],
    [0, 3, 6, -12, 22.5, 90],
    [1, 4, 7, 3, 22.5, 90],
    [2, 5, 8, 18, 22.5, 90],
    [0, 4, 8, 3, 22.5, 45],
    [2, 4, 6, 3, 22.5, -45],
  ];
  wins.forEach(e => {
    if (
      (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
      (boxtext[e[0]].innerText !== "")
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      gameover = true;
      document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '200px';
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = '39vw';
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});


// Add onclick listener to reset button
reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
    element.innerText = ""
  });
  turn = 'X';
  gameover = false;
  document.getElementsByClassName("info")[0].innerText =
    "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '0';
  document.querySelector(".line").style.width = '0vw';
})