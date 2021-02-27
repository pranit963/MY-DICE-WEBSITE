var randomNumber1 = Math.floor((Math.random() * 6) + 1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1)


var player1 = randomNumber1
var player2 = randomNumber2

console.log(player1)
console.log(player2)

// document.querySelector(".img2").setAttribute("src", "images/dice2.png")
// document.querySelector("h1").innerText = "PLAYER 2 WINS"

if(player1 === 1 && player2 === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png")
  document.querySelector(".img2").setAttribute("src", "images/dice1.png")
  document.querySelector("h1").innerText = "DRAW!"
} else if(player1 === 2 && player2 === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png")
  document.querySelector(".img2").setAttribute("src", "images/dice2.png")
  document.querySelector("h1").innerText = "DRAW!"
} else if(player1 === 3 && player2 === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png")
  document.querySelector(".img2").setAttribute("src", "images/dice3.png")
  document.querySelector("h1").innerText = "DRAW!"
} else if(player1 === 4 && player2 === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png")
  document.querySelector(".img2").setAttribute("src", "images/dice4.png")
  document.querySelector("h1").innerText = "DRAW!"
} else if(player1 === 5 && player2 === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png")
  document.querySelector(".img2").setAttribute("src", "images/dice5.png")
  document.querySelector("h1").innerText = "DRAW!"
} else if(player1 === 6 && player2 === 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png")
  document.querySelector(".img2").setAttribute("src", "images/dice6.png")
  document.querySelector("h1").innerText = "DRAW!"
}  else {
  check()
}

function check() {
  if(player1 === 1 && player2 > 1 && player2 < 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 1 && player1 > 1 && player1 < 3 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 === 1 && player2 > 2 && player2 < 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 1 && player1 > 2 && player1 < 4 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 === 1 && player2 > 3 && player2 < 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 1 && player1 > 3 && player1 < 5 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 === 1 && player2 > 4 && player2 < 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 1 && player1 > 4 && player1 < 6 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 === 1 &&  player2 > 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 1 && player1 > 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else {
    check2()

  }
}

function check2() {
  if(player1 === 2 && player2 > 2 && player2 < 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 2 && player1 > 2 && player1 < 4 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 === 2 && player2 > 3 && player2 < 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 2 && player1 > 3 && player1 < 5 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 === 2 && player2 > 4 && player2 < 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 2 && player1 > 4 && player1 < 6 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 === 2 && player2 > 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 2 && player1 > 5 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else {
    check3()
  }
}

function check3() {
  if(player1 ===3 && player2 > 3 && player2 < 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 3 && player1 > 3 && player1 < 5 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 ===3 && player2 > 4 && player2 < 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 3 && player1 > 4 && player1 < 6 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 ===3 && player2 > 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 3 && player1 > 5 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else {
    check4()
  }
}

function check4() {
  if(player1 ===4 && player2 > 4 && player2 < 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 4 && player1 > 4 && player1 < 6 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else if(player1 ===4 && player2 > 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 4 && player1 > 5 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  } else {
    check5()
  }
}

function check5() {
  if(player1 ===5 && player2 > 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    document.querySelector("h1").innerText = "PLAYER 2 WINS"
  } else if(player2 === 5 && player1 > 5 ) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    document.querySelector("h1").innerText = "PLAYER 1 WINS"
  }
}
