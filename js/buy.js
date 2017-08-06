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