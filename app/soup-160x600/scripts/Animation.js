var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();

	var txt = document.getElementById('txt');
	var cta = document.getElementById('cta');
	var img1 = document.getElementById('img1');
	var img2 = document.getElementById('img2');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(cta, {transformOrigin:"55px 139px", opacity:0, scale:.5});
		t.set(txt, {x:-160, opacity:0});
		t.set(img1, {x:-160});
		t.set(img2, {x:+160});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(img1, .5, {x:0, ease:Circ.easeOut}, "+=.15")
		.to(img2, .5, {x:0, ease:Circ.easeOut}, "-=.4")

		.to(txt, 1.5, {x:0, ease:Elastic.easeOut.config(.50,.95)}, "-=.5")
		.to(txt, .5, {autoAlpha:1}, "-=1.35")

		.to(cta, 1, {autoAlpha:1, scale:1, ease:Elastic.easeOut.config(1.15,.75)}, "-=.25");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
