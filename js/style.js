 //window.onload = function (){
  /*搜索*/
var oInput = document.getElementById("txt");
		var oList = document.getElementById("list");
		//var oDis = document.getElementById("dis");
		//var oDie = document.getElementById("die");
		var oHead = document.getElementsByTagName("head")[0];
		
		oInput.oninput = function(){
			var val = this.value;
			//oDis.style.display="none";
			//oDie.style.display="none";
			
			var oScript = document.createElement("script");
			oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=data1";
			oHead.appendChild(oScript);
			oHead.removeChild(oScript);
			//data([1,2,3,4])
		}
		
		function data1(data){
			
			data = data.s;
			var html = "";
			for(var i in data){
				html+="<li><a href='https://www.baidu.com/s?wd="+data[i]+"'>"+data[i]+"</a></li>";
			}
			oList.innerHTML = html;
			oList.style.display = "block";
		};
		
/*logo栏teb切换*/
$(".nav-tem").hover(
        function(){
           $(this).find("div").show();
        },function(){
           $(this).find("div").hide();
        }
    );
   
 
/*无蓬轮播图*/

  
   $(function(){
				var i =0;
				//var _this = this;
				var $liSit=$(".box-ul");
				var $liS=$liSit.find(".box-li");
				$liS.eq(0).clone(true).appendTo($liSit);
				//$.extend($liS,$liS.eq(0))
				//$liS.length += $liS.length;
				//var newlis = $.extend(true, {}, $liS.eq(0));
				//newlis.clone(true).appendTo($liSit);
				$liS=$liSit.find(".box-li");
				//console.log($liS)
				var len=$liS.length;
				/*console.log(len)*/
				var perWidth=$liS.eq(0).outerWidth();
				/*$liSit.css("width",len*perWidth);*/
				function move(){
					$liSit.find(".box-li").removeClass('hover')
					i++;
					if(i==len){
						i=1; 
						$liSit.css("left",0);
					}
					if(i==len-1){
						$("#sliderNav li").eq(0).addClass("hover").siblings().removeClass("hover");
					}else{
						$("#sliderNav li").eq(i).addClass("hover").siblings().removeClass("hover");
					}
					/*console.log(i)*/
					$liSit.stop().animate({"left":-i*perWidth},500);
					
				}
				var timer=setInterval(function(){
					move();
				},3000)
				
				$("#sliderNav li").hover(function(){
					clearInterval(timer);
					i=$(this).index()-1;
					console.log(this)
					move();
				},function(){
					timer = setInterval(move,3000);
					
				})
				
				$(".btn").last().click(function(){
					i=i;
					clearInterval(timer);
					move();
					timer=setInterval(move,3000);
				})
				$(".btn").first().click(function(){
					clearInterval(timer);
					if(i==0){
						i=len-8;
						$liSit.stop().css("left",-(len-1)*perWidth);
					}else{
						i=i-7;
					}
					move();
					timer=setInterval(move,3000);
				})
			});

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
	
	
})


	/*内容区图片翻页区*/
	
   window.onload = function() {

function animate(offset) {
	
	var list = document.getElementsByClassName('tushu')[0];
console.log(list);
var prev = document.getElementsByClassName('prev')[0];

var next = document.getElementsByClassName('next')[0];
  console.log(next);

//获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
//且style.left获取的是字符串，需要用parseInt()取整转化为数字。
var newLeft = parseInt(list.style.left) + offset;


   console.log(newLeft);
list.style.left = newLeft + 'px';
}
prev.onclick = function() { 
	
animate(296);
}
next.onclick = function() { 
	console.log("--------------------");
animate(-296);
}

//if(newLeft<-888){	
//list.style.left = -296 + 'px';
//}else if(newLeft>-296){
//list.style.left = -888 + 'px';
//}

};

 $(function(){
	   	        $(".yuan .tab").click(function(){
	   	           
	   	           $(".yuan .tab").removeClass("u-active");
	   	           $(this).addClass("u-active");
	   	           
	   	            var index = $(this).index();
	   	            console.log(index);
	   	             $(".tushu li").hide();
	   	            $(".tushu .hali").eq(index).show();
	   	          // $(".tushu .hali").eq(index).css("left","-296");
	   	          
	   	           console.log("tushu li")
	   	           
	   	          
	   	          
	   	           
	   	       })
	   	       
	   	   });
		