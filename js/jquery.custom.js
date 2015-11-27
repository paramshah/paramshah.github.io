/* <![CDATA[ */
(function($){
	
	"use strict";
	
    $(document).ready(function(){
		
		/* Parallax Effect
		================================================== */
		$('.parallax .parallax-banner-1').parallax("50%", 0.2);
		$('.newsletter').parallax("50%", 0.2);
		
        $(document).on("scroll", onScroll);
		/* Scroll to Main
		================================================== */
		$('.site-branding a[href*=#]').click( function(event) { 
				
				event.preventDefault();
				
				$('#ut-navigation a').removeClass('selected');
				$('#ut-navigation li:first-child a').addClass('selected');
				
				$.scrollTo( $(this).attr('href') , 650, { easing: 'swing' , offset: -80} );			
			
		});
		
		
		$('#ut-navigation a[href*=#]').click( function(event) { 
				
				event.preventDefault();
				
				$('#ut-navigation a').removeClass('selected');
				$(this).addClass('selected');
				
				$.scrollTo( $(this).attr('href') , 650, { easing: 'swing' , offset: -80} );			
			
		});
		
		
		$('#learn-more').click( function(event) {
			
			event.preventDefault();
			$.scrollTo( $('#information-section') , 650, { easing: 'swing' , offset: -80} );
			
		});
		
		
		/* Flexslider with Video
		================================================== */		
		$(window).load(function(){
			
			// Vimeo API nonsense
		  	var player = document.getElementById('player_1');
		  
			function addEvent(element, eventName, callback) {
				(element.addEventListener) ? element.addEventListener(eventName, callback, false) : element.attachEvent(eventName, callback, false);
			}
			
			$('.flexslider').fitVids().flexslider({
				animation: "slide",
				controlNav: "thumbnails",
				smoothHeight: true,
				start: function(slider){
			  		$('body').removeClass('loading');
				},
				before: function(slider){
					$f(player).api('pause');
			  	}
		  	});
			
		});
		
		 function onScroll(event){
        
            var scrollPos = $(document).scrollTop();
            $('#ut-navigation a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos + 80 && refElement.position().top + refElement.height() > scrollPos+ 80) {
                    $('#ut-navigationli a').removeClass("selected");
                    currLink.addClass("selected");
                }
                else{
                    currLink.removeClass("selected");
                }
            });

        }
	});

})(jQuery);

new cbpScroller( document.getElementById( 'mainsite' ) );

 /* ]]> */	