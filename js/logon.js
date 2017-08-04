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
				 else{
                	err.style.display="none";
                };	
                
				var reg=/^[a-zA-Z_]\w{5,14}$/;
				//use.onchange=function(){
					var str=use+""
					if(!reg.test(str)){
						oerr.style.display="block";
						return;
				}else{
                	oerr.style.display="none";
                };	
			}
		}
	

/*tab切换效果*/

   $(function(){
	   	        $(".numb a").click(function(){
	   	          
	   	           $(".numb a").removeClass("active");
	   	           $(this).addClass("active");
	   	           
	   	            var index = $(this).index();
	   	          
	   	           $(".zhili div").hide();
	   	         
	   	           
	   	           $(".zhili div").eq(index).show();
	   	         
	   	      
	   	           
	   	       })
	   	       
	   	   });
	   	   

