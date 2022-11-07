var video;

// page load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");

	// changing autoplay and loop to false
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

// play button: Play the video and update the volume information. 
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	// playing video and adjusting setting volume txt
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});


// pause button Pause the video.
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video")

	// pausing video
	video.pause();
});

// slow down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow down the video");

	// slowing down by 10 percent and logging speed to console
	video.playbackRate *= .90;
	console.log("Speed is", video.playbackRate);
})

// speed up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed up the video");

	// speeding up by 10 percent and logging speed to console
	video.playbackRate = video.playbackRate / 0.90; 
	console.log("Speed is", video.playbackRate);
});

// skip ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.getElementById("skip").addEventListener("click", function(){
	console.log("Skipping ahead")

	// going back to start of video if 10s skip is over duration
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	} else {
		// skipping 10s
		video.currentTime += 10;
	}
	// logging current time
	console.log("The current time is " + video.currentTime);
});

// mute: Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {

	// variables for things to change
	let muteButton = document.querySelector("#mute");
	let volumeButton = document.querySelector("#volume");
	let slider = document.querySelector("#slider");

	// adjusting slider, mute button text, volume, and volume text when mute button is toggled:
	if (muteButton.innerHTML == "Mute") {
		video.volume = 0;
		muteButton.innerHTML = "Unmute";
		volumeButton.innerHTML = video.volume + "%";
		slider.value = 0;
	} else {
		video.volume = 1;
		muteButton.innerHTML = "Mute";
		volumeButton.innerHTML = video.volume * 100 + "%";
		slider.value = 100;
	}
});

// volume slider: Change the volume based on the slider and update the volume information.
var slider = document.querySelector("#slider");
slider.addEventListener("input", function(){
	console.log("Changing video volume");

	// adjusting video volume and adjusting volume text
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = slider.value + "%";
});

// styled: Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Changing video to vintage")
	document.querySelector("#player1").classList.add("oldSchool");
})

// original: Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function(){
	// Try and catch because oldSchool may already be removed from classList
	try {
		document.querySelector("#player1").classList.remove("oldSchool");
		console.log("Changing video to original");
	} catch {
		console.log("Already on original");
	}
});

