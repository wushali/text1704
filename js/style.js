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
