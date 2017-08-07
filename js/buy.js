/*内容区图片翻页区*/
	
   window.onload = function() {
   	var list = document.getElementsByClassName('show-p')[0];
console.log(list);
var prev = document.getElementsByClassName('prev')[0];

var next = document.getElementsByClassName('next')[0];

function animate(offset) {
	
	
  console.log(next);

//获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
//且style.left获取的是字符串，需要用parseInt()取整转化为数字。
var newLeft = parseInt(list.style.left) + offset;


   console.log(newLeft);
list.style.left = newLeft + 'px';
}
prev.onclick = function() { 
	
animate(560);
}
next.onclick = function() { 
	console.log("--------------------");
animate(-560);
}
};



		/*收货地址选择*/
		 /*将关闭点击事件绑定到delete元素*/	
		
    

/*top切换区*/
$(".nav-tem").hover(
				function() {
					$(this).find("div").show();
				},
				function() {
					$(this).find("div").hide();
				}
			);
  /*点击修改显示选择地址区*/
 
//$("#city-click").click(function() {
//					$(this).find("#hide").show();
//				},
//				function() {
//					$(this).find("#hide").hide();
//				}
//			);
var city=document.getElementById("city-click");
console.log(city);
 city.onclick=function(){
 	console.log("---------------")
 	var hide=document.getElementById("hide");
 	hide.style.display="block";
 
 }
 
 
 
 /*加入购物车*/
//  
//			var aLi = oUl.getElementsByClassName("show-p");
//			var oNum = document.getElementById("num");
//			var aBtn = document.getElementsByClassName("join");	
//			
//var data = {"10001":{
//				"id":"10001",
//				"imgUrl":"images/show-1.jpg"
//			},
//		
//   // var html = "";
//			//for(var i in data){
//				//字符串拼接，对于不变的字符直接用引号引起来，对于可变用变量表示
//				//用自定义属性data-id去保存商品ID，方便使用
//			var oShow= document.getElementsClassName("show-p")[0];	
//			console.log(oShow);
//				oShow.innerHTML = "<p><a href='detail.html?id="+data[i].id+"'><img src='"+data[i].imgUrl+"'></a></p>"
//			   
//			//}
////			oUl.innerHTML = html;
//			
//			var str = getCookie("cart");
//			var obj = str ? JSON.parse(str) : {};//用来存商品ID（attr）和添加的数量（value）
//			
//			var sum = 0;//用来保存所有商品数量
//			for(var i in obj){ //for in 循环遍历     遍历数组  i 表示索引       遍历对象 i 表示对象属性
//				sum+=obj[i]; //obj[i]在这里表示的是存在cookie中的单个商品数量
//			}
//			
//			oNum.innerHTML = sum;
//			for(var i = 0; i < aBtn.length; i++){
//				aBtn[i].onclick = function(){
//
//					var id = this.getAttribute("data-id");
//					
//					obj[id] = obj[id] ? ++obj[id] : 1;
//					
//					//存cookie
//					
//					var objToStr = JSON.stringify(obj);
//					
//					setCookie("cart",objToStr,7);
//					
//					oNum.innerHTML = ++sum; //在已获取的商品数量的基础上进行递增
//					
//				}
//			}
//			
			
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

			
			
