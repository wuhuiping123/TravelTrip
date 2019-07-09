$(window).load(function() {
//	console.log(1111)
//	console.log($('.navbar-nav>li').length)

	for(var i = 0; i < $('.navbar-nav>li').length; i++) {
		$('.navbar-nav>li').mouseenter(function() {
			var j = $(this).index();
			console.log(j);
			$('.navbar-nav>li').eq(j).addClass('active').siblings().removeClass('active')
		})
	}

	$('.navbar-nav').mouseleave(function() {
		$('.navbar-nav>li').removeClass('active')
	})

//	$('ul.dropdown-menu li').hover(function() {
//		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//	}, function() {
//		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//	});
	
})