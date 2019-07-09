$(window).load(function() {

	/*轮播*/

	$("#flexiselDemo1").flexisel({
		visibleItems: 1,
		animationSpeed: 1000,
		autoPlay: false,
		autoPlaySpeed: 3000,
		pauseOnHover: true,
		enableResponsiveBreakpoints: true,
		responsiveBreakpoints: {
			portrait: {
				changePoint: 480,
				visibleItems: 1
			},
			landscape: {
				changePoint: 640,
				visibleItems: 1
			},
			tablet: {
				changePoint: 768,
				visibleItems: 1
			}
		}
	});

})