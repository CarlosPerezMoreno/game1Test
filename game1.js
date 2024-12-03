var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

// MR CARLOS 3rd December, added the function for controlling the jump of the character when user presses Space
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});


function jump(){
    if(character.classList == "animate") {
        return
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

//MR CARLOS This is the function that, create two variables to check the position of the character and block on screen,
// check if position is the same (collision), if yes, ends the game and block the animation, and restart it
// if there is no collision it means that the user could jump over it, so we add 1 point to the counter and modify the scoreSpan
setInterval(function checkDeat() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=160){
	//MR CARLOS, animated the character when there is a collision between character and block.
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
	//mr carlos, adding points to the counter
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
