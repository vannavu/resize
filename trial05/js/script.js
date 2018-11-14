$(document).ready(function() {

	var on = false;
	$('.box').click('click touchstart', function() {
		if (on == false) {
			$( this ).css( "opacity", "1" ),
			on = true;
		}
		else {
			$( this ).css( "opacity", "0.3" ),
			on = false;
		}
	});




});
