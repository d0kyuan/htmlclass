var temp_search_str = "";
function search_page(){
       
    if(change_page!=1){save_ed_div_postion();Init();}
    document.title="搜尋";
    temp_title="search_page";
	change_page=1;
      $('#center').animate({left:"-"+user_width+"px"},600,function(){
            var xmlhttp=new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var word = xmlhttp.responseText;    
                            $('#center').html(word);
                            $('#center').css({left:user_width+"px"});
                            $('#body').css({overflow:"hidden"});
                           // $('#center').animate({left:"0px"},2000);
                            $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});
                            show_hotpoint_list();
                        }
                    };
                	xmlhttp.open("GET","php/ajaxhtml/search.html",true);
	           xmlhttp.send();
    });

}
function show_search(){
     temp_search_str = document.getElementById('key_word_input').value;
    var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var word = xmlhttp.responseText;
                var word_temp = word.split("||");
                var str_show= "";
                if(word_temp.length>5){
                    for(var i = 0;i<4;i++){
                        str_show+=word_temp[i];
                    }
                    str_show+='<div id="search_page_number_area">';
                    str_show+='<p class="page_number"  style ="color:red"onclick="change_search_number(1)">1</p>';
                    for(var i =2;i<Math.floor(word_temp.length/5);i++){
                         str_show+='<p class="page_number" onclick="change_search_number('+i+')">'+i+'</p>';
                    }
                    str_show+='</div>';
                    
                }else{
                    str_show = word;
                }
                
                document.getElementById('search_showbox').innerHTML=str_show;					
				}
			};
	xmlhttp.open("GET","php/search.php?key_word="+temp_search_str,true);
	xmlhttp.send();
 
}
var temp_page_number =0;
function change_search_number(page_number){
    temp_page_number=page_number;
    var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var word = xmlhttp.responseText;
                var word_temp = word.split("||");
                var str_show= "";
                if(word_temp.length>5){
                    for(var i = (0+(page_number*5));i<(4+(page_number*5));i++){
                        if(i>word_temp.length-1){break;}
                        str_show+=word_temp[i];
                    }
                }
                str_show+='<div id="search_page_number_area">';
                for(var i =1;i<Math.floor(word_temp.length/5);i++){
                    
                    if(i==page_number){
                         str_show+='<p class="page_number" style="color:red" onclick="change_search_number('+i+')">'+i+'</p>';
                    }else{
                         str_show+='<p class="page_number" onclick="change_search_number('+i+')">'+i+'</p>';
                    }
                    
                }
                str_show+='</div>';
                document.getElementById('search_showbox').innerHTML=str_show;					
				}
			};
	xmlhttp.open("GET","php/search.php?key_word="+temp_search_str,true);
	xmlhttp.send();
}
function show_hotpoint_list(){
    var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var word = xmlhttp.responseText;         
                document.getElementById('hotlist_area').innerHTML=word;					
				}
			};
	xmlhttp.open("GET","php/show_hotpoint_list.php",true);
	xmlhttp.send(); 
}
function open_search_page(page_name,member_name){
    var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","php/hot_point.php?page_name="+page_name+"&member_name="+member_name,true);
	xmlhttp.send();
    $.post("php/get_member_name.php",{account:member_name},function(data){
           if(member_name=="|notmember|"){
        
        
        show_page(page_name,member_name,'./user_web/'+page_name+'.html');
        
    }else{
        
         show_page(page_name,member_name,'./member_web/'+data+"/"+ page_name +'.html');
        
    }

    show_hotpoint_list();
    });
 
  
}
