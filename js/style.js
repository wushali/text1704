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
		$(this).find("div").stop().slideDown();
	},
	function() {
		$(this).find("div").stop().slideUp("slow");
	}
);

/*无縫轮播图*/


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
	
	var index3 = 0;
	var prev3 = document.getElementById('prev3');
	var next3 = document.getElementById('next3');
	var list3 = document.getElementById('tushu3');
	
	var index4 = 0;
	var prev4 = document.getElementById('prev4');
	var next4 = document.getElementById('next4');
	var list4 = document.getElementById('tushu4');
	
	
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
	prev3.onclick = function() {
		
		index3 = index3 - 1;
		clickPrev3(index3);

	}
	next3.onclick = function() {
		index3 = index3 + 1;
		clickNext3(index3);
	}
	prev4.onclick = function() {
		
		index4 = index4 - 1;
		clickPrev4(index4);

	}
	next4.onclick = function() {
		index4 = index4 + 1;
		clickNext4(index4);
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
$(function() {
	changeDian3();
});

function changeDian3() {
	$(".yuan3 .tab").click(function() {
		$(".yuan3 .tab").removeClass("u-active");
		$(this).addClass("u-active");
		var index = $(this).index();
        
		$(".tushu2 li").hide();
		$(".tushu2 .hali2").eq(index).show();

	})
}
$(function() {
	changeDian4();
});

function changeDian4() {
	$(".yuan4 .tab").click(function() {
		$(".yuan4 .tab").removeClass("u-active");
		$(this).addClass("u-active");
		var index = $(this).index();
        
		$(".tushu3 li").hide();
		$(".tushu3 .hali3").eq(index).show();

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
function clickPrev3(index) {
	console.log("left-----" + index);
	if(index < 0) {
		index = 0;
		return;
	}
	if(index <= 3 && index >= 0) {
		animate3(index);
	}
}
function clickPrev4(index) {
	console.log("left-----" + index);
	if(index < 0) {
		index = 0;
		return;
	}
	if(index <= 3 && index >= 0) {
		animate4(index);
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
function clickNext3(index) {
	if(index >= 3) {
		index = 2;
		return;
	}
	console.log("right-----" + index);
	if(index < 3 && index >= 0) {
		animate3(index);
	}

}
function clickNext4(index) {
	if(index >= 3) {
		index = 2;
		return;
	}
	console.log("right-----" + index);
	if(index < 3 && index >= 0) {
		animate4(index);
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

/*三列*/

function animate3(index) {
	$(".yuan3 .tab").removeClass("u-active");
	switch(index) {
		case 0:
			//alert("index="+index);
			$(".tushu2 li").hide();
			$(".yuan3 .d1").addClass("u-active");
			$(".tushu2 .hali2").eq(0).show();
			break;
		case 1:
			$(".tushu2 li").hide();
			$(".yuan3 .d2").addClass("u-active");
			$(".tushu2 .hali2").eq(1).show();
			break;
		case 2:
			$(".tushu2 li").hide();
			$(".yuan3 .d3").addClass("u-active");
			$(".tushu2 .hali2").eq(2).show();
			break;
	}

}
/*四列*/


function animate4(index) {
	$(".yuan4 .tab").removeClass("u-active");
	switch(index) {
		case 0:
			//alert("index="+index);
			$(".tushu3 li").hide();
			$(".yuan4 .t1").addClass("u-active");
			$(".tushu3 .hali3").eq(0).show();
			break;
		case 1:
			$(".tushu3 li").hide();
			$(".yuan4 .t2").addClass("u-active");
			$(".tushu3 .hali3").eq(1).show();
			break;
		case 2:
			$(".tushu3 li").hide();
			$(".yuan4 .t3").addClass("u-active");
			$(".tushu3 .hali3").eq(2).show();
			break;
	}

}





/*电视影音引用json区域  */
$(window).load(function(){
	$.ajax({
		type:"GET",
		url:"index.json",
		async:true,
		success:function(data){
			console.log(data);
			var html="";
			for(var i in data){
				
			
			html += "<li class='brick-item'><a href='detail.html?id='"+data[i].id+"'><img src=' "+data[i].src +" '><b class='box-i'>"+data[i].title+"</b></a><b class='box-span'>"+data[i].details+"</b><p class='box-p'>"+data[i].price+"</p><p class='pos'>"+data[i].name +"</p></li>"
		}
			
			$(" .tab-content  ").html(html);
			$(" .tab-cont2  ").html(html);
			$(" .tab-cont4  ").html(html);
			$(" .tab-cont-4  ").html(html);
		},
		error:function(res){
			console.log(res);
		}
	})
});
/*电视影音引用json区域  */
$(window).load(function(){
	$.ajax({
		type:"GET",
		url:"dome.json",
		async:true,
		success:function(data){
			console.log(data);
			var html="";
			for(var i in data){
				
			
			html += "<li class='brick-item'><a href='detail.html?id='"+data[i].id+"'><img src=' "+data[i].src +" '><b class='box-i'>"+data[i].title+"</b></a><b class='box-span'>"+data[i].details+"</b><p class='box-p'>"+data[i].price+"</p><p class='pos'>"+data[i].name +"</p></li>"
		}
			$(" .tab-cont-2  ").html(html);
			$(" .tab-content2  ").html(html);
			
		},
		error:function(res){
			console.log(res);
		}
	})
});
	
	
 /*购物车滑过效果*/
    var timer = "";
    $(".top-cart").mouseover(function(){
        $(".empty_cart").show();
    });
    $(".toop-cart").mouseout(function(){
            timer = setTimeout(function(){
            $(".empty_cart").hide();
        },1000); 
    });
    $(".empty_cart").mouseover(function(){
        clearTimeout(timer);
        $(".empty_cart").show();
    });
    $(".empty_cart").mouseout(function(){
        $(".empty_cart").hide();
    });	





