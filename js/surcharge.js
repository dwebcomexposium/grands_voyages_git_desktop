/*!
 * charlie
 * 
 * 
 * @author charlie
 * @version 1.0.0
 * Copyright 2019. ISC licensed.
 */
'use strict';


$(document).ready(function(){

/*HOME*/
	/*MAP*/
        $('li.state').click(function(){
                console.log("éeae");
        });

	$('li.state').hover(function(){
                console.log("ese");

                $('li.state').each(function(){
                        $(this).removeClass('active');
                });
                $('.map img').removeClass('active');
                $('.custom_fk p.state').removeClass('active');
                var pays = $( this ).attr('data-item');
                console.log(pays);
                $(this).addClass('active');
                $('.map .'+pays+'').addClass('active');
                $('.custom_fk p.'+pays+'').addClass('active');
	});

});

