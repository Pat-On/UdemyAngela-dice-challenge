
var randomNumber1 =(Math.floor(Math.random() * 6)+1);

var strToNumber1 = ("images/dice" + randomNumber1 + ".png");
document.querySelector(".img1").setAttribute("src", strToNumber1);

var randomNumber2 = (Math.floor(Math.random()*6)+1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")


// console.log(randomNumber1 + "and" + randomNumber2);

// alert(strToNumber1+ " and " + randomNumber2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent="Player 1 Won";
  // alert("Player 1 Won");
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent="Player 2 Won";
  // alert("Player 2 Won");
} else {
  document.querySelector("h1").textContent="Draw";
  // alert("Draw");
}
