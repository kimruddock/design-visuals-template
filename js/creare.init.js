 $(document).ready(function() {

 // Copyright Notice
	
    $('#copyright i').on('click', function() { 
		$('.overlay').addClass('fadeOut');
		setTimeout(function() {
           
            $('.overlay').hide();
          
      }, 1000);

		$('#copyright').addClass('fadeOutUp');
	});
 });