var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imageSource1 = "images/dice" + randomNumber1 + ".png";
var imageSource2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
// var image1 = document.querySelector(".img1");  another way to select the image1
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",imageSource1);
image2.setAttribute("src",imageSource2);

var refreshButton = document.querySelector(".btn");
refreshButton.addEventListener("click",function(){
    var heading = document.querySelector("h1").innerHTML = "processing..."
     this.classList.add("invisible");
    setTimeout(() => {
        window.location.reload();
       
    }, 1000);
})

if(randomNumber1>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Won by player 2";
}else{
    document.querySelector("h1").innerHTML = "Draw ! 😪" ;
}

// on pressing r or s pagee should reload
