
window.addEventListener("load", (event) => {});

  var audioPlayer = document.getElementById('audioPlayer');
  
  // Get all elements with the class 'playButton'
  var playButtons = document.querySelectorAll('.playButton');
  
// Add click event listener to each play button
playButtons.forEach(function (playButton) {
  playButton.addEventListener('click', function () {
      // Get the data-audio attribute value
      var audioFile = playButton.getAttribute('data-audio');
      playAudio(audioFile);
      console.log("playing");
  });
});

function playAudio(audioFile) {
  if (audioPlayer.paused || audioPlayer.src !== audioFile) {
      // If paused or different audio file, load and play
      audioPlayer.src = audioFile;
      audioPlayer.play();
      updateButtonText('');
  } else {
      // If playing, pause
      audioPlayer.pause();
      updateButtonText('');
  }
}

function updateButtonText(text) {
  // Update the text of all play buttons
  playButtons.forEach(function (playButton) {
      playButton.innerText = text;
  });
}


function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0; // Reset the audio to the beginning
  updateButtonText('');
}

// You can also add an 'ended' event listener if needed
// audioPlayer.addEventListener('ended', function () {
//     // Perform any logic when the audio ends
// });

