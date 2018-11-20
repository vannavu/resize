$(document).ready(function() {

	var on = false;
	$('.box').click('click touchstart', function() {
		if (on == false) {
			$( this ).css("opacity", "1"),
			on = true;
		}
		else {
			$( this ).css( "opacity", "0.3"),
			on = false;
		}
	});

	$(document).keydown(function(keyPressed) {
		if (keyPressed.keyCode == 65) {
	    $(".box").css(
				"background-image", "url(images/a_blue.svg)"
	    );
			$(".display").css(
				"background", "url(images/a_blue.svg)"
	    );
	  }
		else if (keyPressed.keyCode == 69) {
	    $(".box").css(
				"background-image", "url(images/e_blue.svg)"
	    );
			$(".display").css(
				"background", "url(images/e_blue.svg)"
	    );
	  }
		else if (keyPressed.keyCode == 79) {
			$(".box").css(
				"background", "url(images/o_blue.svg)");
			$(".display").css(
				"background", "url(images/o_blue.svg)"
	    );
		}
	});

});
