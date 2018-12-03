$(document).ready(function() {

	var start = false;
	$('._06.d').click('click touchstart', function() {
		if (start == false) {
			$("#welcome").css({
				"opacity": "0",
				"z-index": "0"
			});
			$(this).css({
				"z-index": "1"
			});
			start = true;
		}
	});

	$('.box').click('click touchstart', function() {
		if ($(window).width() > 800) {
			$( this ).css("opacity", "0.5");
		}
		else {
			$( this ).css("opacity", "1");
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
				$(".display").css({
		      'filter': 'grayscale(100%) brightness(12)'
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
				 'filter': 'hue-rotate(90deg) brightness(1)'
			 });
			 $(".display").css({
				 'filter': 'brightness(0)'
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
		  else if (scheme == 3) {
				$(".box").css({
					'filter': 'grayscale(100%) brightness(0)'
				});
				$(".display").css({
					'filter': 'hue-rotate(35deg) brightness(1.3)'
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
		  }
			else if (scheme == 4) {
		    $(".box").css({
					'filter': 'grayscale(100%) brightness(10)'
		    });
				$(".display").css({
					'filter': 'none'
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
		  else {
				$(".box").css({
					'filter': 'hue-rotate(340deg) brightness(6)'
		    });
				$(".display").css({
					'filter': 'hue-rotate(250deg) brightness(7)'
		    });
				$(".container, body").css({
					'background': '#FF00CB'
				});
				$(".text").css({
					'background': 'lime',
					'color': 'navy'
				});
				$(".nav").css({
					'color': 'lime'
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
			$(".display").delay(750).animate({
    		opacity: 0,
  		}, 250, function() {
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
			$(".display").delay(750).animate({
    		opacity: 0,
  		}, 250, function() {
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
			$(".display").delay(750).animate({
    		opacity: 0,
  		}, 250, function() {
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
			$(".display").delay(750).animate({
				opacity: 0,
			}, 250, function() {
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
			$(".display").delay(750).animate({
    		opacity: 0,
  		}, 250, function() {
  		});
		}
		else {
			$("#vowels").animate({
    		'left': '-77px',
  		}, 0, function() {
  		});
			$("#vowels").delay(2000).animate({
    		'left': '-116px',
  		}, 0, function() {
  		});
		}
	});

});
