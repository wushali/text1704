window.onload=function(){
				
				var	tel=document.getElementById("txt").value;
				var oarea=document.getElementsByClassName("tits");
				
				var oerr=document.getElementById("error-num");
				var oernu=document.getElementById("error-nu");
				var bar=document.getElementsByClassName("chil");
				console.log(bar);
				var baro=document.getElementsByClassName("chi2");
				
			btn.onclick=function(){
				

//				var tel=document.getElementById("tel").value;
//				var check=document.getElementById("cb").value;
//				var odiv=document.getElementById("div1");
//				var ediv=document.getElementById("div2");
				//判断是否为空
				 if(!tel){
                  oerr.style.display="block";
                //  tel.style.borderColor="red"
                    return;
                }	
                
				var reg=/^[a-zA-Z_]\w{5,14}$/;
				//tel.onchange=function(){
					var str=tel+""
					if(!reg.test(str)){
						oernu.style.display="block";
						return;
				};
//			
								
//				//长度须大于6小于20
//				if(pw.length >20 || pw.length <6){
//                 ediv.style.display="block";
//                  return;
//              }				
//				 // 两次输入的密码必须一致
//              if(pw != cpw){
//                  alert('两次输入的密码必须一致');
//                  return;
//              }
                
			//手机号规则：11位数字，以1开头 表达式：/^1\d{10}$/
		//邮箱表达式：/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
		 //var email=oTxt.value.replace(/^\s+|\s+$/g,"").toLowerCase();//去除前后空格并转小写
			    var rgb=/^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i;
					var eml=email+""
			    if (!rgb.test(eml)) {
			      alert("请输入有效的邮箱地址");
			      return;
			    }
			    
		
		
			}
			
//			oarea.onclick=function(){
//				bar.style.dispaly="block";
//			}
		}
			