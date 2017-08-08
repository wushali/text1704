/*侧边导航*/
$(function(){
	$("#partNav ul").on("mouseenter","li",function(){
		console.log("aa");
		$(".navCon").show();
		var index = $(this).index();
		$.get("nav_data.json",function(data){
			var html = template("navCon",data[index]);
			$("#partNav .navCon").html(html);
		})
	})
	$("#partNav").on("mouseleave",function(){
		$(".navCon").hide();
	})
	
	$.get("nav.json",function(data){
		var html = template("nav",data);
		$("#partNav ul").html(html);
	})
});

$(".header-tem").hover(
        function(){
           $(this).find("#partNav ").show();
        },function(){
           $(this).find("#partNav ").hide();
        }
    );
    
     /*悬浮导航*/
$(document).ready(function () {
    var topH=$("header").height();//获取头部高度，top指导航栏上面的部分
    var navbg=$(".cart");//获取导航栏对象
    $(window).scroll(function () {
        if($(window).scrollTop()>topH){//对比滚动的距离与导航栏上面部分的高度大小来动态添加css样式
            navbg.addClass("scrollNav")//对导航栏添加样式
        }else{
            navbg.removeClass("scrollNav")//去掉导航栏添加的样式
        }
    });
});


/*top切换区*/
$(".nav-tem").hover(
				function() {
					$(this).find("div").stop().slideDown();

				},
				function() {
					$(this).find("div").stop().slideUp("slow");
				}
			);

