   /*热门、电视影音、电脑。家居切换*/
	   	   $(function(){
	   	        $(".more_Nav .tab-li").mouseover(function(){
	   	           
	   	           $(".more_Nav .tab-li").removeClass("tab-active");
	   	           $(this).addClass("tab-active");
	   	           
	   	            var index = $(this).index();
	   	           
	   	           $(".span16 ul").hide();
	   	           
	   	           
	   	           $(".span16 ul").eq(index).show();
	   	          
	   	           
	   	       })
	   	       
	   	   });