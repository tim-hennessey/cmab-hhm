var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();

	var txt = document.getElementById('txt');
	var cta = document.getElementById('cta');
	var img = document.getElementById('img');
	var cover = document.getElementById('cover');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(cta, {transformOrigin:"55px 130px", opacity:0, scale:.5});
		t.set(txt, {x:-300, opacity:0});
		t.set(img, {y:-250, x:+150});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(cover, .75, {y:"+=250", ease:Circ.easeIn})
		.to(img, .75, {y:"+=295", x:0, ease:Circ.easeOut})

		.to(txt, 1.5, {x:"+=300", ease:Elastic.easeOut.config(.50,.95)}, "-=.5")
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
