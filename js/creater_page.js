function goback_show_page(){
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
                xmlhttp2.open("GET",url_str_temp,true);
                xmlhttp2.send();
                if(member_name_temp=="|notmember|"){
                    $('#creater_name').html("路人甲");
                    $('#friend_req').remove();
                    $('#show_creater').remove();
                }else{
                    $('#creater_name').html(member_name_temp);
                    $('#friend_req').replaceWith('<p class="open_page_btn" id="friend_req" onclick="friend_req(\''+member_name_temp+'\')">申請好友</p>');
                    $('#show_creater').replaceWith('<p class="open_page_btn" id="show_creater" onclick="show_creater(\''+member_name_temp+'\')">查看作者</p>');
                    if(member_check==1){
                        if(member_name_temp==localStorage.getItem("account")){
                            $('#friend_req').remove();
                            $('#show_creater').remove();
                        }else{
                            $('#creater_name').html(member_name_temp);
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
                            xmlhttp1.open("GET","php/check_friend_req.php?friend_name="+member_name_temp+"&member_name="+localStorage.getItem("account"),true);
                            xmlhttp1.send();
                        }
                    }else{
                        $('#friend_req').remove();
                    }
                }
            }
        };
        xmlhttp.open("GET","php/ajaxhtml/open_save_page.html",true);
        xmlhttp.send();
    });
}

var temp_msg_list_str ;
function send_msg(){
    $('#left_bar').css("position","fixed");
    $('#left_bar').css("top","0");
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var word = xmlhttp.responseText;
            $('#right_bar').html(word);
            $.get("php/msg_list_maker.php?member_name="+member_name_temp+"&myaccount="+localStorage.getItem("account"), function(data){
                var temp_msg_list = data.split("||");
                temp_msg_list_str = new Array(temp_msg_list.length);
                for(var i = 1;i<temp_msg_list.length;i++){
                    temp_msg_list_str[i]= temp_msg_list[i];
                }
                $('#msg_wall').html(temp_msg_list[0]);

            });
        }
    };
    xmlhttp.open("GET","php/ajaxhtml/control_use/send_msg_page.html",true);
    xmlhttp.send();
}
function check_input_count(){
    var temp_word  = document.getElementById('msg_input_area').value;
    if(temp_word.length>200){
        alert('最多只能輸入200個字');
        var temp_input_val = "";
        for(var i = 0; i <200;i++){
            temp_input_val += temp_word[i];
        }
        document.getElementById('msg_input_area').value=temp_input_val;
    }
}

function send_msg_to_wall(){
    alert(123);
    var temp_word = document.getElementById('msg_input_area').value;
    if(temp_word!=""){
        $.post("php/send_msg.php", { msg: temp_word, member_name :localStorage.getItem("account"),friend_name : member_name_temp,msg:temp_word },
               function(data){
            switch(data){
                case "|addmsgsess|":
                    document.getElementById('msg_input_area').value ="";
                    send_msg();
                    break;
                case "|addmsgfail|":
                    alert("訊息未送出!!請檢查是否有錯誤");
                    break;
            }
        });
    }else{
        alert("不允許空白!!");
        $('#msg_input_area').focus();
    }
}
function get_nice(msg_id){
    $.post("php/add_nice.php", 
           { member_name :localStorage.getItem("account"),friend_name : member_name_temp,id:msg_id,msg_pr_code:temp_msg_list_str[msg_id] },
           function(data){
        $('#temp_nice'+msg_id).html("");
        $('#temp_nice'+msg_id).html(data);
    });
}

function rep_msg(msg_id){
    $('#feed_back'+msg_id).html('<textarea id="rep_msg_input_area" onkeydown="check_input_count()"></textarea> <p class="action-button shadow animate red msg_btn" onkeydown="check_input_count()" onclick="send_msg_rep(\''+msg_id+'\')">留言</p>');
}
function send_msg_rep(msg_id){
    var temp_word =  document.getElementById('rep_msg_input_area').value;
    $.post("php/rep_msg.php",
           {member_name :localStorage.getItem("account"),friend_name : member_name_temp,id:msg_id,msg_pr_code:temp_msg_list_str[msg_id],msg :temp_word },
           function(data){
        var temp_str = data.split("|");
        $('#feed_back'+msg_id).html("");
        $('#msg_rep'+msg_id).append('<div id="req_msg'+msg_id+'" class="msg_rep"><p class="member_name">'+temp_str[0]+' <span>說 : </span></p><p id="msg_context'+msg_id+'" class="msg">'+temp_str[1]+'</p></div>');
    });
}