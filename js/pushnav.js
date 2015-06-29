jQuery(document).ready(function($) {
	
	 // Bind a click event to anything with the class "toggle-nav"
    $('.toggle-nav').click(function() {
    if ($('body').hasClass('show-nav')) {
        $('body').removeClass('show-nav').addClass('hide-nav');

        setTimeout(function() {
            $('body').removeClass('hide-nav');
        }, 500);

    } else {
        $('body').removeClass('hide-nav').addClass('show-nav');
    }

    return false;
	});

    $( document ).on( "mousemove", function( event ) {
        var winW = $( document ).width();

        if (event.pageX > (winW*0.75)) {
            $('.main-toggle').addClass('showme');
        } else {
            $('.main-toggle').removeClass('showme');
        }
        
    });

	// Toggle with hitting of ESC
	$(document).keyup(function(e) {
    	if (e.keyCode == 27) {
        	$('body').toggleClass('show-nav');
        	// $('body').removeClass('show-nav');
    	}
	});

	$('nav a').on('click', function() {
		var target = $(this).data('target');
		if (!$(this).parent().hasClass('selected')) {
			$('nav li').removeClass('selected');	
		}	
		if (!$(target).is(':visible')) {
			$(this).parent().addClass('selected');
			$('.view').stop(true).animate({'opacity': 0},500, function() {
				$(this).hide();				
				$(target).show().animate({'opacity':1});
			});
		}
	});		
});
