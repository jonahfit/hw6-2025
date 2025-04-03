var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = this.document.querySelector("#player1");
	video.autoplay = false;
	console.log("autoplay is " + video.autoplay);
	video.loop = false;
	console.log("loop is " + video.loop);

});

 document.querySelector("#play").addEventListener("click", function() {
	 	console.log("Play Video");
		video.play();
		video.volume = document.querySelector("#slider").value/100;
		document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";
 });
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow Video");
	
	video.playbackRate = video.playbackRate - 0.1;

	console.log("new speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("fast Video");
	
	video.playbackRate = video.playbackRate + 0.1;

	console.log("new speed is" + video.playbackRate );
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip Video");

	


	
	
	video.currentTime = video.currentTime + 10;

	if (video.currentTime >= 60.4033) {

		video.currentTime = 0;
	}
	
	console.log("current location is" + video.currentTime );

});

document.querySelector("#mute").addEventListener("click", function() {
	
	
	if (video.muted == false){

		video.muted = true;
		console.log("mute Video");
		document.querySelector("#mute").textContent = "Unmute"


	}
	else{
		video.muted = false;
		console.log("unmute Video");
		document.querySelector("#mute").textContent = "Mute"
	}
	
	




});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("volume change");
	
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";

	console.log("new volume is" + video.volume + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("style change to vintage");
	


		video.classList.add("oldSchool");

	

});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("style change to original");
	
	

		video.classList.remove("oldSchool");
	
	


});