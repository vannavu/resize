$(document).ready(function() {

	var scheme = Math.random() * 5;
  if (0 < scheme && scheme <=1) {
    $(".box").css({
      'filter': 'hue-rotate(0deg)'
    });
		$(".container, body").css({
			'background': 'red'
		});
  }
  else if (1 < scheme && scheme <= 2) {
    $(".box").css({
			'filter': 'grayscale(100%) brightness(10)'
    });
		$(".container, body").css({
			'background': 'black'
		});
  }
  else if (2 < scheme && scheme <= 3) {
    $(".box").css({
			'filter': 'hue-rotate(70deg) brightness(2.25)'
    });
		$(".container, body").css({
			'background': '#266AFF'
		});
  }
  else if (3 < scheme && scheme <= 4) {
		$(".box").css({
			'filter': 'hue-rotate(90deg) brightness(2.25)'
    });
		$(".container, body").css({
			'background': 'rgba(0,0,0,0.1)'
		});
  }
  else {
		$(".box").css({
			'filter': 'grayscale(100%) brightness(0)'
		});
		$(".container, body").css({
			'background': 'yellow'
		});
  }

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

	var activated = false;
	$(document).keydown(function(keyPressed) {
		if (keyPressed.keyCode == 65) {
			activated = true;
			$("#welcome").css("display", "none");
	    $(".box").css({
				"background-image": "url(images/a_blue.svg)",
				"cursor": "pointer"
	    });
			$(".display").css({
				"background": "url(images/a_blue.svg)",
				"opacity": "1"
	    });
			$(".display").delay(1000).animate({
    		opacity: 0,
  		}, 1000, function() {
  		});
	  }
		else if (keyPressed.keyCode == 69) {
			activated = true;
			$("#welcome").css("display", "none");
	    $(".box").css({
				"background-image": "url(images/e_blue.svg)",
				"cursor": "pointer"
	    });
			$(".display").css({
				"background": "url(images/e_blue.svg)",
				"opacity": "1"
	    });
			$(".display").delay(1000).animate({
    		opacity: 0,
  		}, 1000, function() {
  		});
	  }
		else if (keyPressed.keyCode == 73) {
			activated = true;
			$("#welcome").css("display", "none");
	    $(".box").css({
				"background-image": "url(images/i_blue.svg)",
				"cursor": "pointer"
	    });
			$(".display").css({
				"background": "url(images/i_blue.svg)",
				"opacity": "1"
	    });
			$(".display").delay(1000).animate({
    		opacity: 0,
  		}, 1000, function() {
  		});
	  }
		else if (keyPressed.keyCode == 79) {
			activated = true;
			$("#welcome").css("display", "none");
			$(".box").css({
				"background-image": "url(images/o_blue.svg)",
				"cursor": "pointer"
	    });
			$(".display").css({
				"background": "url(images/o_blue.svg)",
				"opacity": "1"
	    });
			$(".display").delay(1000).animate({
    		opacity: 0,
  		}, 1000, function() {
  		});
		}
		else if (keyPressed.keyCode == 85) {
			activated = true;
			$("#welcome").css("display", "none");
			$(".box").css({
				"background-image": "url(images/u_blue.svg)",
				"cursor": "pointer"
	    });
			$(".display").css({
				"background": "url(images/u_blue.svg)",
				"opacity": "1"
	    });
			$(".display").delay(1000).animate({
    		opacity: 0,
  		}, 1000, function() {
  		});
		}
		else {
			if (activated == false) {
				$("#welcome").css("display", "block");
			}
		}
	});

});
