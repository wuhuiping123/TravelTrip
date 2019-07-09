$(window).load(function() {
		/*数字滚动增加*/
	function numScr() {

		var options = {
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.',
		};
		var demo1 = new CountUp('counter1', 0, 1568, 0, 1.5, options);
		var demo2 = new CountUp('counter2', 0, 14345, 0, 1.5, options);
		var demo3 = new CountUp('counter3', 0, 563, 0, 1.5, options);
		var demo4 = new CountUp('counter4', 0, 2874, 0, 1.5, options);
		if(!demo1.error) {
			demo1.start();
		} else {
			console.error(demo1.error);
		}
		if(!demo2.error) {
			demo2.start();
		} else {
			console.error(demo2.error);
		}
		if(!demo3.error) {
			demo3.start();
		} else {
			console.error(demo3.error);
		}
		if(!demo4.error) {
			demo4.start();
		} else {
			console.error(demo4.error);
		}
		//调用一次后清空函数，让函数只有一次有效调用
		numScr = function() {};
	}
	$(window).scroll(function() {
		//			console.log($(window).scrollTop());
		//			console.log($('#counter1').offset().top);
		if($(window).scrollTop() > ($('#counter1').offset().top - $(window).height())) {
			numScr();
		}
	})

})
