/*Create variable for character that getsElement from HTML */
var character = document.getElementById("character");

/*Create variable for the block that getsElement from HTML */
var block = document.getElementById("block");

/*Create variable for score countering */
/*TO DO*/

/* Create a function for that when user press Space, the character jumps */
document.addEventListener("keydown", function(event) {
    /* Create the algorithm */
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
setInterval(function checkDeat() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=160){
		/* Change animation in CSS, create an alert that displays "Game Over + the score" and reset score to 0"
    }else{
        /* Add one point to the score counter */
    }
}, 10);
