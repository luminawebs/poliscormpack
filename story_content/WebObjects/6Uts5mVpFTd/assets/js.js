


let vid = document.getElementById("myVideo");

let playButton = document.getElementById("playButton");

function playVid() {
    vid.play();
    playButton2.style.display = "none";
} 





vid.addEventListener("ended", function() {
    // Show the div when the video ends
    playButton2.style.display = "block";
  });



  
var playButton2 = document.createElement("div");
// Set the ID for the new div
playButton2.id = "playButton2";
playButton2.onclick = playVid;    
 document.body.appendChild(playButton2);