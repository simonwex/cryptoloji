;(function (window, OnBoardingAnimations, $, undefined) {

	var oo = OnBoardingAnimations

	oo.scene_07 = {}

	var prep = '#s7 '

	var tt = [1,2,3,4,5,6,7,8,9]
	var timer

	function enter(clb){
		
		clearTimeout(timer);

		tt.forEach(function(d){
			$(prep + '#tt'+d).css('display', 'none')
		});

		tt.forEach(function(d){
			var e = $(prep + '#tt'+d).css({display:'block'})
			TweenLite.set(e, {opacity:1, y:0})
			TweenLite.from(e, 1, {delay:d*.15, opacity:0, y:40, transformOrigin:'center center', ease:Expo.easeInOut})
		});

		timer = setTimeout(function(){
			clb()
		}, 1500)

	}




	function exit(clb){

		clearTimeout(timer);

		tt.forEach(function(d, i){
			var e = $(prep + '#tt'+d)
			TweenLite.to(e, .4, {delay:.2 + i*.1, opacity:0})
		});

		timer = setTimeout(function(){
			clb()
		}, 1000)
	}

	oo.scene_07.enter = enter
	oo.scene_07.exit = exit

})(window, window.OnBoardingAnimations, window.jQuery); 
