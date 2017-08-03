 //window.onload = function (){
//搜索---------
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
		}
	

//tab切换----------------------------------
 	var div1=document.getElementById("box");
 	var div2=document.getElementById("div2");
 	var imgs=div1.getElementsByClassName("box-li");
  //初始化页面图片的位置
 window.onload=function(){
  for(var i=0; i<imgs.length; i++){
   imgs[i].style.left = i*1226 +'px'
  }
 };
 //轮播移动的函数
 function imgMove(){
  var b1 = false;
  for(var i = 0; i < imgs.length; i++) {
   imgs[i].style.left = imgs[i].offsetLeft-1 + 'px';
   if(imgs[i].offsetLeft==0){
    b1=true;
    if(i==0)
    imgs[imgs.length-1].style='1226px';
    else
    imgs[i-1].style.left='1226px'
   }
  }
  if(!b1)
   setTimeout(imgMove,20);
  else
   setTimeout(imgMove,2000);
 }
 setTimeout(imgMove,3000);
           