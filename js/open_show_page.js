var page_name_temp = "";
var member_name_temp = "";
var url_str_temp="";
var where_from = 0;
function show_page(page_name,member_name,url_str){
    temp_search_str= document.getElementById('key_word_input').value;
    if(change_page!=1){save_ed_div_postion();Init();}
    document.title="搜尋";
    temp_title="search_page";
    change_page=1;
    page_name_temp = page_name
    member_name_temp = member_name
    url_str_temp=url_str;
    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var word = xmlhttp.responseText;    
                $('#body').html(word);
                $('#center').css({left:user_width+"px"});
                $('#body').css({overflow:"hidden"});
                $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});

                var xmlhttp2=new XMLHttpRequest();
                xmlhttp2.onreadystatechange = function() {
                    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
                        var word = xmlhttp2.responseText;
                        var temp = word.split("<title>");
                        var temp2 = temp[1].split("</title>");
                        document.title = temp2[0];
                        $('#right_bar').html(word);
                    }
                };
                xmlhttp2.open("GET",url_str,true);
                xmlhttp2.send();


                /*  add  friend  btn change change*/
                live_check_friend_req(member_name);          
                /*  add  like_page  btn change change*/ 
                live_check_like_page(member_name);    

            }
        };
        xmlhttp.open("GET","php/ajaxhtml/open_save_page.html",true);
        xmlhttp.send();
    });


}







function live_check_friend_req(member_name){
    if(member_name=="|notmember|"){
        $('#creater_name').html("路人甲");
        $('#friend_req').remove();
        $('#show_creater').remove();
    }else{
        $('#creater_name').html(member_name);
        $('#friend_req').replaceWith('<p class="open_page_btn" id="friend_req" onclick="friend_req(\''+member_name+'\')">申請好友</p>');
        $('#show_creater').replaceWith('<p class="open_page_btn" id="show_creater" onclick="show_creater(\''+member_name+'\',0)">查看作者</p>');
        $('#like').replaceWith(' <p class="open_page_btn" id="like" onclick="get_like(\''+member_name+'\',\''+page_name_temp+'\')">收藏</p>');

        if(member_check==1){
            if(member_name==localStorage.getItem("account")){
                $('#friend_req').remove();
                $('#show_creater').remove();
            }else{
                $('#creater_name').html(member_name);
                var xmlhttp1=new XMLHttpRequest();
                xmlhttp1.onreadystatechange = function() {
                    if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
                        var word = xmlhttp1.responseText;
                        switch(word){
                            case "|same_req|":
                                $('#friend_req').replaceWith('<p class="dm_word" id="friend_req">已申請好友</p>');
                                break;
                            case "|friend|":
                                $('#friend_req').replaceWith('<p class="dm_word" id="friend_req">已是好友</p>');
                                break;
                            case "|noconnecct|":
                                break;
                        }

                    }
                };
                xmlhttp1.open("GET","php/check_friend_req.php?friend_name="+member_name+"&member_name="+localStorage.getItem("account"),true);
                xmlhttp1.send();
            }
        }else{
            $('#friend_req').remove();
        }
    }

}





function live_check_like_page(member_name){
    var xmlhttp1=new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
        if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
            var word = xmlhttp1.responseText;
            if(word =="|samelikepage|")
                $('#like').replaceWith('<p class="dm_word" id="like" onclick="">已列入收藏</p>');
        }
    };
    xmlhttp1.open("GET","php/check_like_page.php?creater_name="+member_name+"&member_name="+localStorage.getItem("account")+"&page_name="+page_name_temp,true);
    xmlhttp1.send();
}

function go_back_search(){

    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var temp_nav = xmlhttp.responseText;    
                $('#body').html(temp_nav);
                $('#center').css({left:user_width+"px"});
                $('#body').css({overflow:"hidden"});
                // $('#center').animate({left:"0px"},2000);
                $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});
                var xmlhttp1=new XMLHttpRequest();
                xmlhttp1.onreadystatechange = function() {
                    if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
                        var word = xmlhttp1.responseText;    
                        $('#center').html(word);
                        $('#center').css({left:user_width+"px"});
                        $('#body').css({overflow:"hidden"});
                        // $('#center').animate({left:"0px"},2000);
                        $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});
                        show_hotpoint_list();
                        document.title = "搜尋";
                        check_reload();
                        var search_keyword = temp_search_str;
                        if(search_keyword!=""){
                            var xmlhttp2=new XMLHttpRequest();
                            xmlhttp2.onreadystatechange = function() {
                                if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
                                    var word = xmlhttp2.responseText;         
                                    document.getElementById('search_showbox').innerHTML=word;
                                    document.getElementById('key_word_input').value = temp_search_str;                                 
                                    check_reload();
                                    change_search_number(temp_page_number);
                                    return false;
                                }
                            };
                            xmlhttp2.open("GET","php/search.php?key_word="+search_keyword,true);
                            xmlhttp2.send();
                        }

                    }};
                xmlhttp1.open("GET","php/ajaxhtml/search.html",true);
                xmlhttp1.send();


            }
        };
        xmlhttp.open("GET","php/ajaxhtml/all_page.html",true);
        xmlhttp.send();
    });

}
function friend_req(member_name){
 
    
    $.get("php/add_friend.php",{friend_name:member_name,member_name:localStorage.getItem("account")}).done(function(data){
        if(data=="|addfriendsess|"){
            alert("好友申請已送出");
            $('#friend_req').replaceWith('<p class="dm_word" id="friend_req">已申請好友</p>');
        }else{
            alert(data);
        }
    });
}
function show_creater(creater_name,from_control){
    $.get("php/ajaxhtml/creater_page.html",function(data){
        $('#body').html(data);
        $('#center').css({left:user_width+"px"});
        $('#body').css({overflow:"hidden"});
        $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});}); 
        if(creater_name=="|notmember|"){
            $('#creater_name').html("路人甲");
            $('#friend_req').remove();
        }else{
            $('#creater_name').html(creater_name);
            $('#friend_req').replaceWith('<p class="open_page_btn" id="friend_req" onclick="friend_req(\''+creater_name+'\')">申請好友</p>');
            if(member_check==1){
                if(creater_name==localStorage.getItem("account")){
                    $('#friend_req').remove();
                }else{
                    $('#creater_name').html(creater_name);
                    $.get("php/check_friend_req.php",
                          {friend_name:creater_name,member_name:localStorage.getItem("account")})
                        .done(function(data){
                        document.title = creater_name+"的空間";
                        member_name_temp=creater_name;
                        switch(data){
                            case "|same_req|":
                                $('#friend_req').replaceWith('<p class="dm_word" id="friend_req">已申請好友</p>');
                                $('#right_bar').html("沒有權限預覽");
                                break;
                            case "|friend|":
                                $('#friend_req').replaceWith('<p class="dm_word" id="friend_req">已是好友</p>');
                                $.get("php/showpage_maker.php",{account:creater_name}).done(function(data){
                                    $('#right_bar').html(data);
                                    $('.delete_btn').remove();
                                    $('#goback').remove();
                                });                       
                                break;
                            case "|noconnecct|":
                                $('#right_bar').html("沒有權限預覽");
                                break;
                        }
                    });


                }
            }else{
                $('#friend_req').remove();
            }
        }



        if(from_control==1){
            $('#back').replaceWith('<p class="open_page_btn" id="back" onclick="go_back_control()">返回</p>');
        } 


    });
}
function get_like(cearter_name,page_name){
    $.get("php/add_like_page.php",
          {creater_name:cearter_name,member_name:localStorage.getItem("account"),page_name:page_name})
        .done(function(data){
        if(data =="|add_like_done|")
            $('#like').replaceWith('<p class="dm_word" id="like" onclick="">已列入收藏</p>');
    });
}