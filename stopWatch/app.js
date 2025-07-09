window.onload=function(){
    var seconds=0;
    var tens=0;
    var appendTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");
    var startButton=document.getElementById("start");
    var stopButton=document.getElementById("stop");
    var resetButton=document.getElementById("reset");
    var lapButton=document.getElementById("lap");
    var lapsList=document.getElementById("laps");
    var Interval;

    startButton.onclick=function(){
        clearInterval(Interval); // clears the interval to 0 to avoid multiple intervals
        Interval=setInterval(startTimer, 10);
    };

    stopButton.onclick=function(){
        clearInterval(Interval);
    };

    resetButton.onclick=function(){
        clearInterval(Interval);
        tens=0;
        seconds=0;
        appendTens.innerHTML="00";
        appendSeconds.innerHTML="00";
        lapsList.innerHTML=""; // Clear laps on reset
    };

    lapButton.onclick=function(){
        var lapTime=(seconds <=9 ? "0" + seconds : seconds) + ":" + (tens <=9 ? "0" + tens : tens);
        var li= document.createElement("li");
        li.textContent=lapTime;
        lapsList.appendChild(li);
    };

   function startTimer(){
    tens++;
    if(tens<=9){
        appendTens.innerHTML="0" + tens;
    }else{
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        tens=0;
        appendTens.innerHTML="00";
    }
    if(seconds<=9){
        appendSeconds.innerHTML="0" + seconds;
   }else{
        appendSeconds.innerHTML=seconds;
    }
   }
};