// ResponsiveVideoThing.js: Makes video player iframes responsive using brute force
// Like FitVids.js but without jQuery
// With thanks to https://github.com/chriscoyier/Fluid-Width-Video

document.addEventListener('DOMContentLoaded', function () {

// Find all YouTube and Vimeo video embed
var allVideos = document.querySelectorAll('iframe[src*=youtube], iframe[src*=vimeo], iframe[src*=kickstarter]')

// The element that is fluid width
var article = document.getElementsByTagName("h1").item(0);

// Figure out and save aspect ratio for each video
for(i = 0;i < allVideos.length; i++) {
	var videoThing = allVideos.item(i);
	videoThing.setAttribute('data-aspect-ratio', videoThing.height / videoThing.width);
	videoThing.removeAttribute('height');
	videoThing.removeAttribute('width');
}

function resizeVideoThings() {
	var newWidth = article.offsetWidth;
	// Resize all videos according to their own aspect ratio
	for(i = 0;i < allVideos.length; i++) {
		var aspectRatio = allVideos.item(i).getAttribute('data-aspect-ratio');
		allVideos.item(i).setAttribute('width', newWidth);
		allVideos.item(i).setAttribute('height', newWidth * aspectRatio);
	};
}

// When the window is resized, do the ResponsiveVideoThing
window.onresize=function() {
	resizeVideoThings();
}

// Fix the videoThings on the first page load
resizeVideoThings();

});
