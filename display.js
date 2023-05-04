function pacmanStyles(direction){ //Pacman Direction Faces
    document.getElementById("pacman").style.background = "url('images/"+direction+".gif')";
    document.getElementById("pacman").style.backgroundRepeat = "no-repeat";
    document.getElementById("pacman").style.backgroundPosition = "center";
    document.getElementById("pacman").style.backgroundSize = "cover";
    document.getElementById("pacman").style.position = "absolute";

    document.getElementById("pacman").style.height = "15px";
    document.getElementById("pacman").style.width = "15px";
    document.getElementById("pacman").style.margin = "2px";
  
}
function displayPacman(){ //Display Pacman on board
   
    document.getElementById("pacman").style.top= pacman.y*20+"px";
    document.getElementById("pacman").style.left=pacman.x*20+"px";
}
function displayCrewmate(){ //Display Crewmate on board
   
    document.getElementById("Crewmate").style.top="200px";
    document.getElementById("Crewmate").style.left="300px";

    document.getElementById("Crewmate2").style.top="150px";
    document.getElementById("Crewmate2").style.left="190px";

    document.getElementById("Crewmate3").style.top="250px";
    document.getElementById("Crewmate3").style.left="410px";

    document.getElementById("Crewmate4").style.top="250px";
    document.getElementById("Crewmate4").style.left="190px";

    document.getElementById("Crewmate5").style.top="150px";
    document.getElementById("Crewmate5").style.left="410px";
}


function CrewMateDance(button,d2,d3,d4,d5){ //Crewmate
    document.getElementById("Crewmate").style.background = "url('images/"+button+".gif')";
    document.getElementById("Crewmate").style.backgroundRepeat = "no-repeat";
    document.getElementById("Crewmate").style.backgroundPosition = "center";
    document.getElementById("Crewmate").style.backgroundSize = "cover";
    document.getElementById("Crewmate").style.position = "absolute";
    document.getElementById("Crewmate").style.height = "20px";
    document.getElementById("Crewmate").style.width = "20px";
    document.getElementById("Crewmate").style.margin = "0px";

    //Crewmate 2
    document.getElementById("Crewmate2").style.background = "url('images/"+d2+".gif')";
    document.getElementById("Crewmate2").style.backgroundRepeat = "no-repeat";
    document.getElementById("Crewmate2").style.backgroundPosition = "center";
    document.getElementById("Crewmate2").style.backgroundSize = "cover";
    document.getElementById("Crewmate2").style.position = "absolute";
    document.getElementById("Crewmate2").style.height = "20px";
    document.getElementById("Crewmate2").style.width = "20px";
    document.getElementById("Crewmate2").style.margin = "0px";
//Crewmate 3
    document.getElementById("Crewmate3").style.background = "url('images/"+d3+".gif')";
    document.getElementById("Crewmate3").style.backgroundRepeat = "no-repeat";
    document.getElementById("Crewmate3").style.backgroundPosition = "center";
    document.getElementById("Crewmate3").style.backgroundSize = "cover";
    document.getElementById("Crewmate3").style.position = "absolute";
    document.getElementById("Crewmate3").style.height = "20px";
    document.getElementById("Crewmate3").style.width = "20px";
    document.getElementById("Crewmate3").style.margin = "0px";
//Crewmate 4
    document.getElementById("Crewmate4").style.background = "url('images/"+d4+".gif')";
    document.getElementById("Crewmate4").style.backgroundRepeat = "no-repeat";
    document.getElementById("Crewmate4").style.backgroundPosition = "center";
    document.getElementById("Crewmate4").style.backgroundSize = "cover";
    document.getElementById("Crewmate4").style.position = "absolute";
    document.getElementById("Crewmate4").style.height = "20px";
    document.getElementById("Crewmate4").style.width = "20px";
    document.getElementById("Crewmate4").style.margin = "0px";
//Crewmate 5
    document.getElementById("Crewmate5").style.background = "url('images/"+d5+".gif')";
    document.getElementById("Crewmate5").style.backgroundRepeat = "no-repeat";
    document.getElementById("Crewmate5").style.backgroundPosition = "center";
    document.getElementById("Crewmate5").style.backgroundSize = "cover";
    document.getElementById("Crewmate5").style.position = "absolute";
    document.getElementById("Crewmate5").style.height = "20px";
    document.getElementById("Crewmate5").style.width = "20px";
    document.getElementById("Crewmate5").style.margin = "0px";
}

    //AUDIO
    let audio = document.getElementById("DanceAudio"); 
    let death = document.getElementById("DeathAudio"); 
    let beep = document.getElementById("BeepAudio"); 
    let time = document.getElementById("TimesUp"); 
    function playAudio() { 
    audio.play(); 
    audio.loop=true;
    audio.volume=0.4;

    } 
    function pauseAudio() { 
    audio.pause(); 
    }
    function deathAudio(){
    death.play();
    death.volume=0.3;
    }
    function beepAudio(){
    beep.play();
    beep.volume=0.3;
    }
    function TimesUp(){
        time.play();
        time.volume=0.3;
        }


//TIMER
function countdown(minutes) {
    let seconds = 60;
    let mins = minutes
    function Tick() {
       
        let counter = document.getElementById("counter");
        let current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        counter.style.color="yellow";
        if( seconds > 0 ) {
            setTimeout(Tick, 1000);
        } 
        else if(mins>1){
                countdown(mins-1);           
        }
        else{
            alert("Times up! GAME OVER\n Your Score is : "+sum+"!", TimesUp(),pauseAudio());
            location.reload(); 
        }
    }
    Tick();
}