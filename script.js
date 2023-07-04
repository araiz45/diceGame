var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
console.log(randomNumber1 + 1, randomNumber2 + 1);



function showingPointsOfPlayer(n, circleClass) {
  var dots = document.querySelectorAll(circleClass);
  if (n === 1) {
    dots.forEach((element) => {
      element.classList.add("hidden");
    });
    var dot = document.querySelectorAll(circleClass)[4];
    dot.classList.remove("hidden");
  } else if (n === 2) {
    dots.forEach((element) => {
      element.classList.add("hidden");
    });
    var dot2 = document.querySelectorAll(circleClass)[2];
    dot2.classList.remove("hidden");
    var dot6 = document.querySelectorAll(circleClass)[6];
    dot6.classList.remove("hidden");
  }

  else if (n === 3) {
    dots.forEach((element) => {
      element.classList.add("hidden");
    });
    var dot0 = document.querySelectorAll(circleClass)[0];
    dot0.classList.remove("hidden");
    var dot4 = document.querySelectorAll(circleClass)[4];
    dot4.classList.remove("hidden");
    var dot8 = document.querySelectorAll(circleClass)[8];
    dot8.classList.remove("hidden");
  }
  else if (n === 4) {
    dots.forEach((element) => {
      element.classList.add("hidden");
    });
    var dot0 = document.querySelectorAll(circleClass)[0];
    dot0.classList.remove("hidden");
    var dot2 = document.querySelectorAll(circleClass)[2];
    dot2.classList.remove("hidden");
    var dot6 = document.querySelectorAll(circleClass)[6];
    dot6.classList.remove("hidden");
    var dot8 = document.querySelectorAll(circleClass)[8];
    dot8.classList.remove("hidden");
  }
  else if (n === 5) {
    dots.forEach((element) => {
      element.classList.add("hidden");
    });
    var dot0 = document.querySelectorAll(circleClass)[0];
    dot0.classList.remove("hidden");
    var dot2 = document.querySelectorAll(circleClass)[2];
    dot2.classList.remove("hidden");
    var dot4 = document.querySelectorAll(circleClass)[4];
    dot4.classList.remove("hidden");
    var dot6 = document.querySelectorAll(circleClass)[6];
    dot6.classList.remove("hidden");
    var dot8 = document.querySelectorAll(circleClass)[8];
    dot8.classList.remove("hidden");
  }
  else if (n === 6) {
    dots.forEach((element) => {
      element.classList.add("hidden");
    });
    var dot0 = document.querySelectorAll(circleClass)[0];
    dot0.classList.remove("hidden");
    var dot2 = document.querySelectorAll(circleClass)[2];
    dot2.classList.remove("hidden");
    var dot3 = document.querySelectorAll(circleClass)[3];
    dot3.classList.remove("hidden");
    var dot5 = document.querySelectorAll(circleClass)[5];
    dot5.classList.remove("hidden");
    var dot6 = document.querySelectorAll(circleClass)[6];
    dot6.classList.remove("hidden");
    var dot8 = document.querySelectorAll(circleClass)[8];
    dot8.classList.remove("hidden");
  }
}

showingPointsOfPlayer(randomNumber1 + 1, ".circle-1");
showingPointsOfPlayer(randomNumber2 + 1, ".circle-2");



var heading3 = document.getElementsByTagName("h3")[0];
if (randomNumber1 + 1 > randomNumber2 +1){
    heading3.textContent = "Player 1 😎 has been won 🎉";
}
else if(randomNumber2 +1 > randomNumber1 + 1){
    heading3.textContent = "Player 2 😏 has been won 🎉";
}
else{
    heading3.textContent = "Match has been drawn 🚩";
}