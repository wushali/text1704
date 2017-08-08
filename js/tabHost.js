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
	   	   

/*热门、电视影音、电脑。家居切换*/
	   	   $(function(){
	   	        $(".more_Nav .tab").mouseover(function(){
	   	           
	   	           $(".more_Nav .tab").removeClass("tab-active");
	   	           $(this).addClass("tab-active");
	   	           
	   	            var index = $(this).index();
	   	           
	   	           $(".span15 ul").hide();
	   	           
	   	           
	   	           $(".span15 ul").eq(index).show();
	   	          
	   	           
	   	       })
	   	       
	   	   });
	   	   
/*热门、电视影音、电脑。家居切换*/
	   	   $(function(){
	   	        $(".more_Nav .tab3").mouseover(function(){
	   	           
	   	           $(".more_Nav .tab3").removeClass("tab-active");
	   	           $(this).addClass("tab-active");
	   	           
	   	            var index = $(this).index();
	   	           
	   	           $(".span14 ul").hide();
	   	           
	   	           
	   	           $(".span14 ul").eq(index).show();
	   	          
	   	           
	   	       })
	   	       
	   	   });