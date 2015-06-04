function pulsate() {
    jQuery('.down-arrow').delay(150).fadeOut(1000).delay(150).fadeIn(1000, pulsate); 
};

// function goToByScroll(className){
//     jQuery('html,body').animate({scrollTop: jQuery("."+className).offset().top},'slow', function() {
// });

jQuery(document).ready(function(){
	pulsate();
	// jQuery('.down-arrow').click(function(){
	// 	goToByScroll('stills-whole-container');
	// });
});
