	window.onload=function(){											
			btn.onclick=function(){
				var	use=document.getElementById("username").value;
				var pw=document.getElementById("pw").value;
				var err=document.getElementById("error-num");
				var oerr=document.getElementById("error")
				//判断是否为空
				 if(!use || !pw){
                   err.style.display="block";
                    return;
                }								
				var reg=/^[a-zA-Z_]\w{5,14}$/;
				//use.onchange=function(){
					var str=use+""
					if(!reg.test(str)){
						oerr.style.display="block";
						return;
				};
			}
		}