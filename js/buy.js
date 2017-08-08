/*内容区图片翻页区*/
	
 
		/*收货地址选择*/
		 /*将关闭点击事件绑定到delete元素*/	
		
    

/*top切换区*/
$(".nav-tem").hover(
				function() {
					$(this).find("div").stop().slideDown();

				},
				function() {
					$(this).find("div").stop().slideUp("slow");
				}
			);
  /*点击修改显示选择地址区*/
 
/*$("#city-click").click(function() {
					$(this).find("#hide").show();
				},
				function() {
					$(this).find("#hide").hide();
				}
			);*/
var city=document.getElementById("city-click");
console.log(city);
 city.onclick=function(){
 	console.log("---------------")
 	var hide=document.getElementById("hide");
 	hide.style.display="block";
 
 }
 
 /*  收货地址选点击隐藏*/
var oHide=document.getElementById("hide");
			var  del=document.getElementsByClassName("delete");	
        //将点击事件绑定到tr元素
        oHide.onclick = function (e) {
        	console.log("------------")
            var e = e || window.event;
            var el = e.target || e.srcElement; //通过事件对象的target属性获取触发元素
            var cls = el.className; //触发元素的class
          
            //通过判断触发元素的class确定用户点击了哪个元素
            switch (cls) {
             
                case 'delete': //点击了删除
                  
                        this.parentNode.removeChild(this);
                
                    break;
            };
            }
 
 
 
 
 
 	/*为方便购买登录删除区*/
			
			var oli=document.getElementById("login");
			var  da=document.getElementsByClassName("del");	
        //将点击事件绑定到tr元素
        oli.onclick = function (e) {
        	console.log("------------")
            var e = e || window.event;
            var el = e.target || e.srcElement; //通过事件对象的target属性获取触发元素
            var cls = el.className; //触发元素的class
          
            //通过判断触发元素的class确定用户点击了哪个元素
            switch (cls) {
             
                case 'del': //点击了删除
                  
                        this.parentNode.removeChild(this);
                
                    break;
            };
            }

        
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



/*、电视影音、电脑。家居切换*/
	   	   $(function(){
	   	        $(".show-tow li").click(function(){
	   	           
	   	           $(".show-tow li").removeClass("li-active");
	   	           $(this).addClass("li-active");
	   	           
	   	            var index = $(this).index();
	   	           
	   	           $(".show-p img").hide();
	   	           
	   	           
	   	           $(".show-p img").eq(index).show();
	   	          
	   	           
	   	       })
	   	       
	   	   });
	   	   
	   	   
	   $(function(){
    //检查对象，#boxs是要随滚动条固定的ID
    var offset = $('.show-img').offset();
    var offset_f=$('footer').offset();//获取底部
    $(window).scroll(function () {
    //检查对象的顶部是否在游览器可见的范围内
        var scrollTop = $(window).scrollTop();
            if (offset.top <= scrollTop){
                $('.show-img').addClass('fixed');
            }
            else{
                $('.show-img').removeClass('fixed');
            } 
            //当底部进入可视区
            if($(window).height()+scrollTop>=offset_f.top)
            {console.log($(window).height()+'|'+scrollTop+'|'+offset_f.top+'|'+$(".show-img").offset().top);
                $('.show-img').css({bottom:$(window).height()+scrollTop-offset_f.top});//底部进入可视区，开始控制boxs
            }
        });
})	   




/*图片引用json区域  */
/*$(window).load(function(){
	$.ajax({
		type:"GET",
		url:"buyer.json",
		async:true,
		success:function(data){
			console.log(data);
			var html="";
			for(var i in data){
	
			   
			html += "<a href='detail.html?id='"+data[i].id+"'><img src=' "+data[i].src +" '>"+"<a href='detail.html?id='"+data[i].id+"'><img src=' "+data[i].src +" '>"+"<a href='detail.html?id='"+data[i].id+"'><img src=' "+data[i].src +" '>"+"<a href='detail.html?id='"+data[i].id+"'><img src=' "+data[i].src +" '>"
			   

		}
			$(" .show-p  ").html(html);

			
		},
		error:function(res){
			console.log(res);
		}
	})
});*/
   
 
 /*加入购物车*/
    
			/*var aLi = oUl.getElementsByClassName("show-img");
			console.log(aLi);
			var oNum = document.getElementById("num");
			var aBtn = document.getElementsByClassName("join");	
			
var data = {"10001":{
				"id":"10001",
				"imgUrl":"images/show-1.jpg"
			},
		
     // var html = "";
			//for(var i in data){
				//字符串拼接，对于不变的字符直接用引号引起来，对于可变用变量表示
				//用自定义属性data-id去保存商品ID，方便使用
			var oShow= document.getElementById("shol");	
			console.log(oShow);
				oShow.innerHTML = "<p><a href='detail.html?id="+data[i].id+"'><img src='"+data[i].imgUrl+"'></a></p>"
			   
			//}
//			oUl.innerHTML = html;
			
			var str = getCookie("cart");
			var obj = str ? JSON.parse(str) : {};//用来存商品ID（attr）和添加的数量（value）
			
			var sum = 0;//用来保存所有商品数量
			for(var i in obj){ //for in 循环遍历     遍历数组  i 表示索引       遍历对象 i 表示对象属性
				sum+=obj[i]; //obj[i]在这里表示的是存在cookie中的单个商品数量
			}
			
			oNum.innerHTML = sum;
			for(var i = 0; i < aBtn.length; i++){
				aBtn[i].onclick = function(){

					var id = this.getAttribute("data-id");
					
					obj[id] = obj[id] ? ++obj[id] : 1;
					
					//存cookie
					
					var objToStr = JSON.stringify(obj);
					
					setCookie("cart",objToStr,7);
					
					oNum.innerHTML = ++sum; //在已获取的商品数量的基础上进行递增
					
				}
			}*/
			
			

/*添加购物车*/
/*$(function(){
   $('.join-shop join').shoping({
		endElement:".top-cart",
		iconCSS:"",
		iconImg:"images/nav-tel2.jpg",
		endFunction:function(element){
			$("#num").html(parseInt($("#num").html())+1);
			console.log(element);
			return false;
		}
	})
});*/
	
	
	
	/*购物车*/
	
	//显示购物车的数量
	/*var str = $.cookie("cart");
	var obj = str ? JSON.parse(str) : {};
	var numberss = 0;
	for(var i in obj){
		console.log(obj[i])
		numberss +=obj[i]; 
	}
	$(".num").text(numberss);
	//购物车的显示
	$.ajax({
		type:"get",
		url:"buyer.json",
		async:true,
		success:function(data){
			var str = $.cookie("cart");
			var obj = str ? JSON.parse(str):{};
			console.log(obj)
			var amount = 0;
			//在购物车中显示
			for(var i in obj){		
				var html = "";	
				for(var k in data){
					
					if(data[k].id ==i ){
						html +=
						"<li>"+
							"<div class='hook'><input type='checkbox' /></div>"+
							"<img src='"+data[k].img11+"' alt='' />"+
							"<div class='information'>"+
								"<p>"+data[k].name+"</p>"+
								"<b>商品编号<span>"+data[k].id+"</span></b>"+
							"</div>"+
							"<b>"+data[k].price+"</b>"+
							"<div class='nums'>"+
								"<a href='#:;' class='readuce' id='"+data[k].id+"' many = '"+data[k].price+"' >-</a>"+
								"<p>"+obj[i]+"</p>"+
								"<a href='#:;' class='push'  id='"+data[k].id+"' many = '"+data[k].price+"'>+</a>"+
							"</div>"+
							"<span class='single'>"+ data[k].price.slice(1)*(obj[i]) +"</span>"+
							"<a href='#:;'>删除</a>"+
						"</li>"
						amount += data[k].price.slice(1)*(obj[i])
					}
				}
				$(".commodity").append(html);
				$(".amount").text("$"+amount);
					
			}
			//点击加减
			$(".readuce").each(function(){
				$(this).click(function(){
					var nb = $(this).next().text()-1;//在商品中获取
					if(nb<=1){
						nb =1;
					}
					var idss = $(this).attr("id");
					$(this).next().text(nb);//设置单个商品数量
					var strs = $.cookie("cart");
					var objs = JSON.parse(strs);
					  
					 obj[idss] = obj[idss] -1;
					 if(obj[idss]<1){
					 	obj[idss]=1;
					 	numberss=numberss;
					 }else{
					 numberss -=1;
					 }
					  var mountt = (obj[idss])*($(this).attr("many").slice(1));//计算单个商品金额
					 var json_str = JSON.stringify(obj);//转换成json形式存cookie；
					 $.cookie("cart",json_str);
					 $(".num").text(numberss);  
					$(this).parent().siblings(".single").text(mountt);
					 
				})
			})
			//点击增加
			$(".push").each(function(){
				$(this).click(function(){
					var nb = +$(this).prev().text()+1;
					var idss = $(this).attr("id");
					$(this).prev().text(nb);//
					var strs = $.cookie("cart");
					var objs = JSON.parse(strs);
					 numberss +=1; 
					 obj[idss] = obj[idss] +1;//加减之后的数量
					  var mountt = (obj[idss])*($(this).attr("many").slice(1));//计算单个商品金额
					 var json_str = JSON.stringify(obj);//转换成json形式存cookie；
					 $.cookie("cart",json_str);
					 $(".num").text(numberss);
					 $(this).parent().siblings(".single").text(mountt);
				})
			})
			
			
		}
	})*/
			
			
