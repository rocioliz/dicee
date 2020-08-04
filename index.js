var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;  //1-6

var randomeDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImagesSource = "images/" + randomeDiceImage; // imagesdice1.png - imagesdice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);


// Dice 2 //

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImagesSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
    else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
