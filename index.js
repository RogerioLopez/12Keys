var numberOfPianoNotesButtons = document.querySelectorAll(".piano").length;

// where the fuction for clicking is called
for (var i = 0; i < numberOfPianoNotesButtons; i++)
{
    document.querySelectorAll(".piano")[i].addEventListener("click", clickHandler);
}

// makes sound when button is clicked
function clickHandler() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
}

// makes sound when the key is pressed
document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
} );

function makeSound(key) {
    switch (key) {
        case "s":
            var c = new Audio('Sounds/piano-c.wav');
            c.play();
        break;

        case "d":
            var d = new Audio('Sounds/piano-d.wav');
            d.play();
        break;

        case "f":
            var e = new Audio('Sounds/piano-e.wav');
            e.play();
        break;

        case "j":
            var f = new Audio('Sounds/piano-f.wav');
            f.play();
        break;

        case "k":
            var g = new Audio('Sounds/piano-g.wav');
            g.play();
        break;

        case "l":
            var a = new Audio('Sounds/piano-a.wav');
            a.play();
        break;

        case "p":
            var b = new Audio('Sounds/piano-b.wav');
            b.play();
        break;

        case "e":
            var c_sharp = new Audio('Sounds/piano-c_sharp.wav');
            c_sharp.play();
        break;

        case "r":
            var d_sharp = new Audio('Sounds/piano-d_sharp.wav');
            d_sharp.play();
        break;

        case "u":
            var f_sharp = new Audio('Sounds/piano-f_sharp.wav');
            f_sharp.play();
        break;

        case "i":
            var g_sharp = new Audio('Sounds/piano-g_sharp.wav');
            g_sharp.play();
        break;

        case "o":
            var a_sharp = new Audio('Sounds/piano-a_sharp.wav');
            a_sharp.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}