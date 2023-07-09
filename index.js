var numberofDrumbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofDrumbuttons;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleClick);

function handleClick(){
    var buttonINNERhtml =this.innerHTML;
    buttonAnimation(buttonINNERhtml);

    switch(buttonINNERhtml){
        case "w":
            var kick = new Audio('sounds/kick-bass.mp3' );
            kick.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-1.mp3' );
            audio.play(); 
            break;
        case "s":
            var audio = new Audio('sounds/tom-2.mp3' );
            audio.play(); 
            break;
        case "d":
            var audio = new Audio('sounds/tom-3.mp3' );
            audio.play(); 
            break;
        case "j":
            var audio = new Audio('sounds/tom-4.mp3' );
            audio.play(); 
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3' );
            audio.play(); 
            break;
        case "l":
            var audio = new Audio('sounds/snare. mp3' );
            audio.play(); 
            break;
        default: 
            console.log(buttonINNERhtml);
    }
}
}

document.addEventListener("Keypress",function(){
    console.log(Event);
});

function buttonAnimation(currentKey){
   var activebutton= document.querySelector("."+currentKey);

   activebutton.classList.add("pressed");

   setTimeout(function(){
    activebutton.classList.remove("pressed");
   }, 100);
}


/*var audio = new Audio('sounds/snare.mp3' );
    audio.play();*/
