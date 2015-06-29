 $(document).ready(function() {

// Animate when visible
   
    var win = $(window);
    var allMods = $(".scroll");

// Already visible modules
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible"); 

        if (el.hasClass('counter')) {
            statCountUp();
        }
      } 
    }); 

    win.scroll(function(event) {
      
      allMods.each(function(i, el) {
        var el = $(el);
       
        if (el.visible(true)) {
            setTimeout( function(){
                el.addClass("visible");
        
            }, 50*i );
        } 
      });
    });
});