$.fn.isVisible = function(offset) {
	// Am I visible?
	// Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
	// essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
	// That is why either width or height have to be > 0.
	var rect = this[0].getBoundingClientRect();
	return (
		(rect.height > 0 || rect.width > 0) &&
		rect.bottom >= 0 &&
		rect.right >= 0 &&
		rect.top <= (window.innerHeight - offset || document.documentElement.clientHeight - offset) &&
		rect.left <= (window.innerWidth - offset || document.documentElement.clientWidth - offset)
	);
};

$.fn.timelify = function(options){

	var elem = this;

	// old scroll pos helps determine the 'scrolled' height between the
	// add-card-interaction and limit scroll event to trigger adding all
	// cards at once
	oldScrollPos = 0;
	window.addEventListener('scroll', function(){
		var scrollPos = $(window).scrollTop();
		if((scrollPos > $(elem).offset().top - 800)  && Math.abs(oldScrollPos - scrollPos) >  $(window).height()*0.4){
			oldScrollPos = scrollPos;
			addNextCard();
		}

	});

	return this;
};
