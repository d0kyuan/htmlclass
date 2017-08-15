

function control_page(){
    if(change_page!=1){save_ed_div_postion();Init();} 
    change_page=1;
    document.title = localStorage.getItem("account")+"的空間";
    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var word = xmlhttp.responseText;    
                $('#body').html(word);
                $('#center').css({left:user_width+"px"});
                $('#body').css({overflow:"hidden"});
                // $('#center').animate({left:"0px"},2000);
                $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});
                $('#creater_name').html(localStorage.getItem("account"));

                $('#left_bar').css({position:"fixed"})

                show_setting_page();



            }
        };
        xmlhttp.open("GET","php/ajaxhtml/control_use/control_page.html",true);
        xmlhttp.send();
    });
}


function show_friend_req_list(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var word = xmlhttp.responseText;    
            $('#right_bar').html(word);
        }
    };
    xmlhttp.open("GET","php/friend_req_list_maker.php?member_name="+localStorage.getItem("account"),true);
    xmlhttp.send();
}
function show_friend_list(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var word = xmlhttp.responseText;    
            $('#right_bar').html(word);
        }
    };
    xmlhttp.open("GET","php/friend_list_maker.php?member_name="+localStorage.getItem("account"),true);
    xmlhttp.send(); 
}





function go_back_homepage(){
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
                document.title = "程式語言教學網";

                change_page = 0;
                move_dive_backtopostion();
                re_ed();  
                show_hotpoint_list();
                check_reload();
            }
        };
        xmlhttp.open("GET","php/ajaxhtml/all_page.html",true);
        xmlhttp.send();
    });





}


/* friend control*/
function accept_friend(friend_name){
    $('#right_bar').html("");
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","php/accept_friend.php?member_name="+localStorage.getItem("account")+"&friend_name="+friend_name,true);
    xmlhttp.send(); 
    sleep(0.5);
    var xmlhttp1=new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
        if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
            var word = xmlhttp1.responseText;  
            $('#right_bar').html("");
            $('#right_bar').html(word);
        }
    };
    xmlhttp1.open("GET","php/friend_req_list_maker.php?member_name="+localStorage.getItem("account"),true);
    xmlhttp1.send(); 

}

function deny_friend(friend_name){
    $('#right_bar').html("");
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","php/deny_friend_req.php?member_name="+localStorage.getItem("account")+"&friend_name="+friend_name,true);
    xmlhttp.send(); 
    sleep(0.5);
    var xmlhttp1=new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
        if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
            var word = xmlhttp1.responseText;  
            $('#right_bar').html("");
            $('#right_bar').html(word);
        }
    };
    xmlhttp1.open("GET","php/friend_req_list_maker.php?member_name="+localStorage.getItem("account"),true);
    xmlhttp1.send(); 

}

function delete_friend(friend_name){

    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","php/delete_friend.php?member_name="+localStorage.getItem("account")+"&friend_name="+friend_name,true);
    xmlhttp.send(); 
    $('#right_bar').html("");
    sleep(0.5);
    var xmlhttp1=new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
        if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
            var word = xmlhttp1.responseText;  
            $('#right_bar').html("");
            $('#right_bar').html(word);
        }
    };
    xmlhttp1.open("GET","php/friend_list_maker.php?member_name="+localStorage.getItem("account"),true);
    xmlhttp1.send(); 
}
function show_setting_page(){
    $.get("php/ajaxhtml/control_use/setting_page.html",function(data){
         $('#right_bar').html(data);
    });
}
function open_show_page(creater_name,page_name){
    alert(123);
    $.post("php/get_member_name.php",{account:creater_name},function(data){
    alert(data);
    if(creater_name=="|notmember|"){
        
        
        show_page1(page_name,data,'./user_web/'+page_name+'.html');
        
    }else{
        
         show_page1(page_name,data,'./member_web/'+data+"/"+ page_name +'.html');
        
    }
    });

}
function show_page1(page_name,member_name,url_str){
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
                $('#back').replaceWith('<p class="open_page_btn" id="back" onclick="control_page()">返回</p>');
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


function open_like_page_list(){
    var xmlhttp1=new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
        if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
            var word = xmlhttp1.responseText;
            $('#right_bar').html(word);
        }
    };
    xmlhttp1.open("GET","php/like_page_list_maker.php?member_name="+localStorage.getItem("account"),true);
    xmlhttp1.send(); 
}
function remove_like_page( creater_name,page_name){

    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","php/delete_like_page.php?creater_name="+creater_name+"&member_name="+localStorage.getItem("account")+"&page_name="+page_name,true);
    xmlhttp.send();
    $('#right_bar').html("");
    sleep(0.5);
    open_like_page_list()
}

function go_back_control(){
    if(change_page!=1){save_ed_div_postion();Init();} 
    change_page=1;
    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var word = xmlhttp.responseText;    
                $('#body').html(word);
                $('#center').css({left:user_width+"px"});
                $('#body').css({overflow:"hidden"});
                // $('#center').animate({left:"0px"},2000);
                $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});
                $('#creater_name').html(localStorage.getItem("account"));



                show_friend_list();


            }
        };
        xmlhttp.open("GET","php/ajaxhtml/control_use/control_page.html",true);
        xmlhttp.send();
    });
}

function open_msg_list(){
    member_name_temp = localStorage.getItem("account");
    send_msg();

}






function change_password(){
    var newpass = document.getElementById('new_password').value;
    var agpass = document.getElementById('again_new_password').value;
   if(newpass==""){
       alert("密碼不得空白!!");
   }else if(agpass==""){
        alert("請記得再次輸入密碼!!");
   }else {
        if(newpass!=agpass){
            alert("兩次輸入不相同 !");
        }else{
            alert("請保管好您的新密碼");
        }
    }
}