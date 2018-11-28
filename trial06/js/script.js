$(document).ready(function() {

	var start = false;
	$('.box').click('click touchstart', function() {
		if (start == false) {
			$(".box").css("opacity", "1");
			start = true;
		}
		else {
			if ($(window).width() > 800) {
				$( this ).css("opacity", "0.5");
			}
			else {
				$( this ).css("opacity", "1");
			}
		}
	});

	var scheme = 1
	$(document).keydown(function(keyPressed) {
		if (keyPressed.keyCode == 32) {
			scheme = scheme + 1;
		  if (scheme == 1) {
		    $(".box").css({
		      'filter': 'hue-rotate(0deg)'
		    });
				$(".container, body").css({
					'background': 'red'
				});
				$(".text").css({
					'background': 'white',
					'color': 'blue'
				});
				$(".nav").css({
					'color': 'white'
				});
		  }
		  else if (scheme == 2) {
		    $(".box").css({
					'filter': 'grayscale(100%) brightness(10)'
		    });
				$(".container, body").css({
					'background': 'black'
				});
				$(".text").css({
					'background': 'blue',
					'color': 'white'
				});
				$(".nav").css({
					'color': 'blue'
				});
		  }
		  else if (scheme == 3) {
		    $(".box").css({
					'filter': 'hue-rotate(70deg) brightness(2.5)'
		    });
				$(".container, body").css({
					'background': '#006DFF'
				});
				$(".text").css({
					'background': 'lime',
					'color': 'navy'
				});
				$(".nav").css({
					'color': 'lime'
				});
		  }
		  else if (scheme == 4) {
				$(".box").css({
					'filter': 'hue-rotate(90deg) brightness(2.25)'
		    });
				$(".container, body").css({
					'background': 'rgba(0,0,0,0.1)'
				});
				$(".text").css({
					'background': 'black',
					'color': '#FF0054'
				});
				$(".nav").css({
					'color': 'black'
				});
		  }
		  else {
				$(".box").css({
					'filter': 'grayscale(100%) brightness(0)'
				});
				$(".container, body").css({
					'background': 'yellow'
				});
				$(".text").css({
					'background': '#D100FF',
					'color': 'black'
				});
				$(".nav").css({
					'color': '#D100FF'
				});
				scheme = 0;
		  }

	  }
		else if (keyPressed.keyCode == 65) {
			$("#welcome").css("display", "none");
	    $(".box").css({
				"background-image": "url(images/a_blue.svg)",
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
			$("#welcome").css("display", "none");
	    $(".box").css({
				"background-image": "url(images/e_blue.svg)",
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
			$("#welcome").css("display", "none");
	    $(".box").css({
				"background-image": "url(images/i_blue.svg)",
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
			$("#welcome").css("display", "none");
			$(".box").css({
				"background-image": "url(images/o_blue.svg)",
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
			$("#welcome").css("display", "none");
			$(".box").css({
				"background-image": "url(images/u_blue.svg)",
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
	});

});
