window.onload = function() {
	document.querySelector("#roll1").onclick = function() {
		document.querySelector("#roll_top").scrollIntoView(false);
	};
	document.querySelector("#roll2").onclick = function() {
		document.querySelector("#roll_top").scrollIntoView(true);
	};
}

//滚动监测
$(function() {
	$(window).scroll(function() { //为页面添加页面滚动监听事件
		var wst = $(window).scrollTop(); //滚动条距离顶端值
		for(var i = 1; i < 6; i++) { //加循环
			if($("#f" + i).offset().top <= wst + 10) { //判断滚动条位置
				$('#nav div').css("background-color", "white");
				$(".f" + i).css("background-color", "red");
			}
		}
	});
	$('#nav div').click(function() {
		$('html,body').animate({
			scrollTop: $("#" + this.className).offset().top
		}, 500);
		//          $("#" + this.className)[0].scrollIntoView(true);//h5 scrollIntoView()

	});
});