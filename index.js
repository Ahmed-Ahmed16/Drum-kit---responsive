const drumClick = document.querySelectorAll(".drum");
//() immeditately call s the functions
// without () means the function is called as an input
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/tom-1.mp3');
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');

drumClick.forEach(function(drumClick){
    drumClick.addEventListener("click", function(){
        var drumbtn = this.innerHTML;
        makeSound(drumbtn)
        buttonAnimation(drumbtn)

       
        
})

drumClick.addEventListener("touchstart", function(){
    var drumbtn = this.innerHTML;
    makeSound(drumbtn);
    buttonAnimation(drumbtn);
})


});

document.addEventListener("keydown", function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
    });


function makeSound(key){
    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play(); 
            break;
        case "l":
            kickBass.play(); 
            break;
    
        default:
            document.querySelector('body').classList.add("game-over");
            document.getElementById('wrong').style.display = "block";
            setTimeout(function(){
                document.querySelector('body').classList.remove("game-over");
                document.getElementById('wrong').style.display = "none";
            },200)
            break;
    }
}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){

    activeButton.classList.remove("pressed");
},100)

}



/*
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

doesn't give any thing back
cant break out of loop



for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



n summary, forEach is a handy way to work with lists in JavaScript because it’s simple and easy to read. However, it has some limitations compared to other loops, like not allowing you to stop early or return values. As you learn more about programming, you’ll get to know when to use forEach and when to use other types of loops!

Feel free to ask if you have any more questions or if something isn’t clear!



*/