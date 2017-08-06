//window.onload = function (){
/*搜索*/
var oInput = document.getElementById("txt");
var oList = document.getElementById("list");
//var oDis = document.getElementById("dis");
//var oDie = document.getElementById("die");
var oHead = document.getElementsByTagName("head")[0];

oInput.oninput = function() {
	var val = this.value;
	//oDis.style.display="none";
	//oDie.style.display="none";

	var oScript = document.createElement("script");
	oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=data1";
	oHead.appendChild(oScript);
	oHead.removeChild(oScript);
	//data([1,2,3,4])
}

function data1(data) {

	data = data.s;
	var html = "";
	for(var i in data) {
		html += "<li><a href='https://www.baidu.com/s?wd=" + data[i] + "'>" + data[i] + "</a></li>";
	}
	oList.innerHTML = html;
	oList.style.display = "block";
};

/*logo栏teb切换*/
$(".nav-tem").hover(
	function() {
		$(this).find("div").show();
	},
	function() {
		$(this).find("div").hide();
	}
);

/*无縫轮播图*/

$(function() {
	var i = 0;
	//var _this = this;
	var $liSit = $(".box-xd");
	var $liS = $liSit.find(".box-ul");
	//$liS.eq(0).clone(true).appendTo($liSit);
	//$.extend($liS,$liS.eq(0))
	//$liS.length += $liS.length;
	//var newlis = $.extend(true, {}, $liS.eq(0));
	//newlis.clone(true).appendTo($liSit);
	//$liS = $liSit.find(".box-ul");
	//console.log($liS)
	var len = $liS.length;
	
	console.log("img----------"+len);
	var perWidth = $liS.eq(0).outerWidth();
	/*$liSit.css("width",len*perWidth);*/
	function move() {
		$liSit.find(".box-ul").removeClass('box-active')
		i++;
		if(i == len) {
			i = 1;
			$liSit.css("left", 0);
		}
		//if(i == len - 1) {
//			$("#sliderNav li").eq(0).addClass("hover").siblings().removeClass("hover");
//		} else {
//			$("#sliderNav li").eq(i).addClass("hover").siblings().removeClass("hover");
//		}
		/*console.log(i)*/
		$liSit.stop().animate({ "left": -1 * perWidth }, 500);

	}
	var timer = setInterval(function() {
		move();
	}, 500)

//	$("#sliderNav li").hover(function() {
//		clearInterval(timer);
//		i = $(this).index() - 1;
//		console.log(this)
//		move();
//	}, function() {
//		timer = setInterval(move, 3000);
//
//	})

	$(".bto").click(function() {
		i = i;
		clearInterval(timer);
		move();
		timer = setInterval(move, 3000);
	})
	$(".btn").click(function() {
		clearInterval(timer);
		if(i == 0) {
			i = len - 2;
			$liSit.stop().css("left", -(len - 1) * perWidth);
		} else {
			i = i - 1;
		}
		move();
		timer = setInterval(move, 3000);
	})
});




//$(function() {
//
//	$(".box-xd .box-ul .box-li").mouseover(function() {
//		$(this).addClass(".box-active").siblings(".box-i").removeClass(".box-active");
//	}).mouseout(function() {
//		$(this).removeClass(".box-active").siblings(".box-i");
//	})
//
//	var index = 0;
//	Swidth =1266;
//	timer = null;
//	//len = $(".Div1_title span a").length;
//
//	function NextPage() {
//		if(index > 2) {
//			index = 0;
//		}
//		//$(".Div1_title span a").removeClass("Div1_title_a1").eq(index).addClass("Div1_title_a1");
//		$(".box-xd").stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
//	}
//
//	function PrevPage() {
//		if(index < 0) {
//			index = 2;
//		}
//		//$(".Div1_title span a").removeClass("Div1_title_a1").eq(index).addClass("Div1_title_a1");
//		$(".box-xd").stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
//	}
//
////	$(".Div1_title span a").each(function(a) {
////		$(this).mouseover(function() {
////			index = a;
////			NextPage();
////		});
////	});
//	//下一页
//	$(".sliderBtns .btn").click(function() {
//		index++;
//		NextPage();
//	});
//	//上一页
//	$(".sliderBtns .bto").click(function() {
//		index--;
//		PrevPage();
//	});
//	//自动滚动
//	var timer = setInterval(function() {
//		index++;
//		NextPage();
//	}, 4000);
//
//	$(".btn , .box-xd").mouseover(function() {
//		clearInterval(timer);
//	});
//	$(".bto .box-xd").mouseleave(function() {
//		timer = setInterval(function() {
//			index++;
//			NextPage();
//		}, 4000);
//	});
//
//}) //建站套餐












/*侧边导航*/
$(function() {
	$("#partNav ul").on("mouseenter", "li", function() {
		console.log("aa");
		$(".navCon").show();
		var index = $(this).index();
		$.get("nav_data.json", function(data) {
			var html = template("navCon", data[index]);
			$("#partNav .navCon").html(html);
		})
	})
	$("#partNav").on("mouseleave", function() {
		$(".navCon").hide();
	})

	$.get("nav.json", function(data) {
		var html = template("nav", data);
		$("#partNav ul").html(html);
	})

})

/*内容区图片翻页区*/

window.onload = function() {
	var index1 = 0;
	var prev1 = document.getElementById('prev1');
	var next1 = document.getElementById('next1');
	var list1 = document.getElementById('tushu1');

	var index2 = 0;
	var prev2 = document.getElementById('prev2');
	var next2 = document.getElementById('next2');
	var list2 = document.getElementById('tushu2');
	console.log(prev2);
	prev1.onclick = function() {
		index1 = index1 - 1;
		clickPrev1(index1);
	}
	next1.onclick = function() {
		index1 = index1 + 1;
		clickNext1(index1);
	}

	prev2.onclick = function() {
		
		index2 = index2 - 1;
		clickPrev2(index2);

	}
	next2.onclick = function() {
		index2 = index2 + 1;
		clickNext2(index2);

	}
};

//单独点圆点事件
$(function() {
	changeDian1();

});

function changeDian1() {
	$(".yuan .tab").click(function() {
		$(".yuan .tab").removeClass("u-active");
		$(this).addClass("u-active");
		var index = $(this).index();

		$(".tushu li").hide();
		$(".tushu .hali").eq(index).show();

	})
}
$(function() {
	changeDian2();
});

function changeDian2() {
	$(".yuan1 .tab").click(function() {
		$(".yuan1 .tab").removeClass("u-active");
		$(this).addClass("u-active");
		var index = $(this).index();
        
		$(".tushu1 li").hide();
		$(".tushu1 .hali1").eq(index).show();

	})
}

function clickPrev1(index) {
	console.log("left-----" + index);
	if(index < 0) {
		index = 0;
		return;
	}
	if(index <= 3 && index >= 0) {
		animate1(index);
	}
}

function clickPrev2(index) {
	console.log("left-----" + index);
	if(index < 0) {
		index = 0;
		return;
	}
	if(index <= 3 && index >= 0) {
		animate2(index);
	}
}

function clickNext1(index) {
	if(index >= 3) {
		index = 2;
		return;
	}
	console.log("right-----" + index);
	if(index < 3 && index >= 0) {
		animate1(index);
	}

}

function clickNext2(index) {
	if(index >= 3) {
		index = 2;
		return;
	}
	console.log("right-----" + index);
	if(index < 3 && index >= 0) {
		animate2(index);
	}

}

function animate1(index) {
	$(".yuan .tab").removeClass("u-active");
	switch(index) {
		case 0:
			$(".tushu li").hide();
			$(".yuan .u1").addClass("u-active");
			$(".tushu .hali").eq(0).show();
			break;
		case 1:
			$(".tushu li").hide();
			$(".yuan .u2").addClass("u-active");
			$(".tushu .hali").eq(1).show();
			break;
		case 2:
			$(".tushu li").hide();
			$(".yuan .u3").addClass("u-active");
			$(".tushu .hali").eq(2).show();
			break;
	}

}
/*二列*/
function animate2(index) {
	$(".yuan1 .tab").removeClass("u-active");
	switch(index) {
		case 0:
			//alert("index="+index);
			$(".tushu1 li").hide();
			$(".yuan1 .c1").addClass("u-active");
			$(".tushu1 .hali1").eq(0).show();
			break;
		case 1:
			$(".tushu1 li").hide();
			$(".yuan1 .c2").addClass("u-active");
			$(".tushu1 .hali1").eq(1).show();
			break;
		case 2:
			$(".tushu1 li").hide();
			$(".yuan1 .c3").addClass("u-active");
			$(".tushu1 .hali1").eq(2).show();
			break;
	}

}