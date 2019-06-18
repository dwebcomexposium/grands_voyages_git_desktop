'use strict';


$(document).ready(function(){

/*HOME*/
	/*MAP*/
	$('.custom_fk ul li').hover(function(){
                $('.custom_fk ul li.active').removeClass('active');
                $('.map img').removeClass('active');
                $('.custom_fk .state').removeClass('active');
                var pays = $( this ).attr('data-item');
                $(this).addClass('active');
                $('.map .'+pays+'').addClass('active');
                $('.state.'+pays+'').addClass('active');
	});

});

