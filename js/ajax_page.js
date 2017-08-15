var temp ="";
var userheight = window.innerHeight-150;
var member_check=0;
var membername = "";
var is_login_talkroom=true;
var btn_tmp = "";
var user_height = window.innerHeight;
var user_width = window.innerWidth;



check_first_open();

/*

var oTimerId;
function Timeout(){
alert("您已經離開一段時間囉!! 是否還在繼續學習呢?!");
}
function ReCalculate(){
clearTimeout(oTimerId);
oTimerId = setTimeout('Timeout()', 1 * 120 * 1000);
}
document.onmousedown = ReCalculate;
document.onmousemove = ReCalculate;
ReCalculate();*/


function check_first_open(){
    var a = localStorage.getItem("tips_show");
    if(a=="1"){
        $.get("php/ajaxhtml/all_page.html",function(data){
            document.getElementById('body').innerHTML = data;
            start_page();
            Init();
        });
    }else{
        $.get("php/ajaxhtml/pic_change.html",function(data){
            $('#body').html(data);
            $("#tips_pic").html('<img id="tips_pic_changer" width="'+user_width+'" height="'+user_height+'"  src="tips_pic/tips1.png"/>');
        });
    }
}




var onloadCallback = function() {
       login_test =  grecaptcha.render('html_element', {
          'sitekey' : '6Lf6IyETAAAAAAUu955FyJcNB314srUS68pAfgL-'
        });
      };



window.onbeforeunload = function (e) {
    var e = e || window.event;


    if (e) {
        localStorage.setItem("have_reload", 1);

    }

}
window.addEventListener("dragover",function(e){
    e = e || event;
    e.preventDefault();
},false);
window.addEventListener("drop",function(e){
    e = e || event;
    e.preventDefault();
},false);	
/* cant click right and shift */
function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
    if( event.altKey) {
        window.event.returnValue=false;
        iEsc();}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if (typeof document.onselectstart !="undefined")
    document.onselectstart=iEsc;
else{
    document.onmousedown=iEsc;
    document.onmouseup=iRec;
}
function DisableRightClick(qsyzDOTnet){
    if (window.Event){
        if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
            iEsc();}
    else
        if (event.button == 2 || event.button == 3){
            event.cancelBubble = true
            event.returnValue = false;
            iEsc();}
}



function check_reload(){
    var reload = localStorage.getItem("have_reload");
    var local_member_check = localStorage.getItem("member_check");
    if(reload==1&&local_member_check==1){
        member_check = localStorage.getItem("member_check");
        account = localStorage.getItem("account");
        hello_user();
    }
}
function send(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var word = xmlhttp.responseText;
            check_page_count(word);
        }
    };
    xmlhttp.open("GET","php/check_count.php",true);
    xmlhttp.send();	


}
function re_ed(){
    editor = CodeMirror.fromTextArea(document.getElementById("codeinput"), {
        lineNumbers: true,
        mode: "text/html",
        matchBrackets: true
    });
}
function sleep(seconds){
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
}
var count=0;
function check_page_count(word){
    var d = editor.getDoc().getValue();
    $.get("php/create.php",{ip:word,word:d,member:localStorage.getItem("member_check"),membername:localStorage.getItem("account")});
    sleep(0.5);
    window.open('user_web/'+ word +'.html');

}
function send_to_ed(newword){
    if(editor.getDoc().getValue().length<3)
        var temp = editor.getDoc().getValue()+newword;
    else
        var temp = editor.getDoc().getValue()+"\r\n"+newword;  

    editor.getDoc().setValue(temp);
}
function selectionclass(str){
    if(temp!=""){
        document.getElementById(''+str+'').className="";
        document.getElementById(''+str+'').className+="classbutton btn_click";
        if(temp!=str){
            document.getElementById(''+temp+'').className="classbutton";
        }
    }else{
        document.getElementById(''+str+'').className="";
        document.getElementById(''+str+'').className+="classbutton btn_click";
    }
    temp = str;
    $.get(""+btn_tmp+"_class/"+str+".txt",function(word){
        if(word.length <8){
            document.getElementById('centerRL_word').innerHTML = "<p>暫無內容 ! </p>";
        }else{
            document.getElementById('centerRL_word').innerHTML = String(word);
            if(temp_title=="HTML5"){
                document.getElementById('centerRL_title').innerHTML = "<p>&lt;"+String(str)+"&gt;</p>";
                document.getElementById('centerRL_title1').innerHTML = "<p>&lt;"+String(str)+"&gt;</p>";
            }else{
                document.getElementById('centerRL_title').innerHTML = "<p>"+String(str)+"</p>";
                document.getElementById('centerRL_title1').innerHTML =  "<p>"+String(str)+"</p>";
            }
            if(temp_title!=""){
                if(temp_title=="HTML5"){
                    document.title=temp_title+"-<"+str+">";
                }else{
                    document.title=temp_title+"-"+str+"";
                }
            }
        }
    });
}
var temp_title="";
function callclass(str){
    if(change_page==1){
        goback_btn_click();
        change_page=0;
    }
    temp = "";
    if(btn_tmp!=""){
        document.getElementById(''+str+'').style.backgroundColor = 'red';
        if(btn_tmp!=str){
            document.getElementById(''+btn_tmp+'').style.backgroundColor = '#ffffff';
        }
    }else{
        document.getElementById(''+str+'').style.backgroundColor = 'red';
    }
    btn_tmp = str;
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var word = xmlhttp.responseText;

            document.getElementById('cls_L_btn').innerHTML = String(word);
            document.getElementById('centerRL_title').innerHTML ="<p>"+String(str)+"</p>" ;
            switch(str){
                case "html5":
                    document.getElementById('centerRL_word').innerHTML ="<p>您現在選擇的是HTML5(HyperText Markup Language)</p><p>請點選左方按鈕選擇標籤進行學習</p>" ;
                    document.title="您正在學習HTML5";
                    temp_title="HTML5";
                    break;
                case "css3":
                    document.getElementById('centerRL_word').innerHTML ="<p>您現在選擇的是CSS3(Cascading Style Sheets )</p><p>請點選左方按鈕選擇標籤進行學習</p>" ;
                    document.title="您正在學習CSS3";
                    temp_title="CSS3";
                    break;
                case "javascript":
                    document.getElementById('centerRL_word').innerHTML ="<p>您現在選擇的是JavaScript </p><p>請點選左方按鈕選擇標籤進行學習</p>" ;
                    document.title="您正在學習javascript";
                    temp_title="javascript";
                    break;
            }
        }
    };
    xmlhttp.open("GET","php/getclass.php?name="+str+"",true);
    xmlhttp.send();
}

function pview(){
    $(".inline").colorbox({inline:true, width:"50%"});	
    var d = editor.getDoc().getValue();
    var context_width = 0;
    document.getElementById('inline_content').innerHTML = "<div id='box_title' style='display:block;background-color:blue;padding:5px;'><p style='display:block;marging:10px;color:white;'>預覽網頁</p></div>"+String(d);
    if(d!=""){     
        var temp_max_img_width=0;
        if(d.indexOf("<img")>=0){
            for(var i=0;i<=tmp_img_count;i++){
                var img = document.getElementById('img_show'+i+'');
                if(temp_max_img_width<img.width)temp_max_img_width= img .width;
            }

            $('#box_title').css("width",temp_max_img_width+"px");
        }else{
            context_width= document.getElementById("word").offsetWidth;
            $('#box_title').css("width",context_width+"px");
        }
    }


}
function clear_text(){
    editor.getDoc().setValue('');
}

//呼叫登入畫面
function login(){
    if(change_page!=1){save_ed_div_postion();Init();}
    change_page=1;
    callpage("php/ajaxhtml/login.html");
}

var change_page = 0;

//登入頁面的按鈕事件
function goback_btn_click(){
    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        $.get("php/ajaxhtml/edtion.html",function(data){
            for_anmt(data);

            change_page = 0;
            move_dive_backtopostion();
            re_ed();
        });
    });

}

function btn_login_click(){
    var user_account = document.getElementById('account').value;
    var user_password = document.getElementById('password').value;
     var test_resp=grecaptcha.getResponse(login_test);
    if(test_resp==""){
        alert("請先驗證");
        document.getElementById('html_element').focus();
        return false;	
    }else if(user_account==""){
        alert("帳號不得為空白");
        document.getElementById('account').focus();
        return false;	
    }else if(user_password==""){
        alert("密碼不得為空白");
        document.getElementById('password').focus();
        return false;
    }else{

        $.post("php/login.php",{ account : user_account ,password :user_password },function(data){
            if(data=="noaccount"){
                alert("此帳戶不存在");
                document.getElementById('account').value="";
                document.getElementById('password').value="";
                document.getElementById('account').focus();
                return false;
            }else if(data=="|loginfail|"){
                alert("您的輸入密碼錯誤");
                document.getElementById('password').value="";
                document.getElementById('password').focus();
                return false;
            }else if(data=="|loginss|"){
                member_check=1;
                membername =user_account;
                localStorage.setItem("member_check", 1);
                localStorage.setItem("account", user_account);
                $.get("php/ajaxhtml/control_use/login_use.html",function(data){
                    $('#sigh_login').remove();
                    $('#nav').append(data);
                    $('#hellouser').html("歡迎使用者 : "+user_account);
                    
                })
                goback_btn_click();

            }else{
                alert("錯誤"+data);
                return false;
            }

        });

    }

}
function hello_user(){
    if(member_check==1){
         $.get("php/ajaxhtml/control_use/login_use.html",function(data){
            $('#sigh_login').remove();
            $('#nav').append(data);
           

        }).done(function(){
              $('#hellouser').html("歡迎使用者 : "+account);
         });
    }
}
function logout(){
    localStorage.setItem("have_reload", 0);
    localStorage.setItem("member_check", 0);
    localStorage.setItem("account", "");
    member_check=0;
    
     $.get("php/ajaxhtml/control_use/logout_use.html",function(data){
                    $('#username').remove();
                    $('#nav').append(data);
                    
                })
    
    if(is_talkroom_conncet==1){
        ws.onclose = function () {};
        ws.close();
        is_login_talkroom = true;
        is_talkroom_conncet=0;  
    }
    goback_btn_click();
}


function showpage(){
    if(change_page!=1){save_ed_div_postion();Init();}
    change_page=1;
    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        $.get("php/showpage_maker.php",{account:localStorage.getItem("account")}).done(function(data){
            for_anmt(data);
        });
    });
}
function open_page(name){
    $.post("php/change_to_md5.php",{account:localStorage.getItem("account")},function(data){
        window.open('member_web/'+data+"/"+ name +'.html');
    });



}

function callpage(url){
    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        $.get(url,function(data){
            for_anmt(data);
        });   
    });
}

function for_anmt(data){
    $('#center').html(data);
    $('#center').css({left:user_width+"px"});
    $('#body').css({overflow:"hidden"});
    // $('#center').animate({left:"0px"},2000);
    $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});
}    

function delete_page(name){
    $.post("php/change_to_md5.php",{account:localStorage.getItem("account")},function(data){
        /*delete page*/
        $.get("php/delete.php",{ name:name ,account:data});

        $('#center').html("");
        if(change_page!=1){save_ed_div_postion();Init();}
        change_page=1;
        sleep(0.5);

        /*reflash page*/

        $.get("php/showpage_maker.php",{account:localStorage.getItem("account")}) .done(function( data ) {
            $('#center').html(data);
        });   
    });



}
function download_file(name){
    $.post("php/change_to_md5.php",{account:localStorage.getItem("account")},function(data){
        var link = document.createElement("a");
        link.download = name;
        link.href = './member_web/'+data+'/'+name+'.html';
        link.click();
    });
}
function show_page_count(){
    var  t = setTimeout(show_page_count, 500);
    if(change_page==0){
      
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
              
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var word = xmlhttp.responseText;
                document.getElementById('show_page_count').innerHTML="目前已有:"+word+"份練習網頁";
            }
        };
        xmlhttp.open("GET","php/check_count.php",true);
        xmlhttp.send();	
    }
}
var timer_count=0;
var timer_dm = 0;
function  pre_view_box_timer(){

    var  t = setTimeout(pre_view_box_timer, 500);

    if(small_box_temp[3]==0){
        pre_box();
    }


}
function talk_room_close(){

    document.getElementById('room_close').style.display="block";
    document.getElementById('room_open').style.display="none";
    temp = document.getElementById('room_side').innerHTML;
    talk_room_get_small = 1;
}

var talk_room_get_small=0;
var temp="";
//--------------------------------------聊天室--------------------------------------//



if (typeof console == "undefined") {    this.console = { log: function (msg) {  } };}
WEB_SOCKET_DEBUG = true;
var ws, name, client_list={},is_talkroom_conncet=0;

//連接伺服器
function connect() {
    ws = new WebSocket("ws://"+document.domain+":7272");

    ws.onopen = onopen;

    ws.onmessage = onmessage; 
    ws.onclose = function() {
        console.log("連線中斷,嘗試連線.....");
        connect();
    };
    ws.onerror = function() {
        console.log("出現錯誤");
    };
}

//新連線
function onopen()
{
    show_prompt();
    var login_data = '{"type":"login","client_name":"'+name.replace(/"/g, '\\"')+'","room_id":"1"}';
    console.log("連線成功:"+login_data);
    is_talkroom_conncet =1;
    ws.send(login_data);
}

//接收訊息
function onmessage(e)
{
    console.log(e.data);
    var data = eval("("+e.data+")");
    switch(data['type']){

        case 'ping':
            ws.send('{"type":"pong"}');
            break;;

        case 'login':
            if(localStorage.getItem("have_reload")==0){
                say(data['client_id'], data['client_name'],  data['client_name']+'加入了聊天室', data['time']);
            }
            if(data['client_list'])
            {
                client_list = data['client_list'];
            }
            else
            {
                client_list[data['client_id']] = data['client_name']; 
            }
            flush_client_list();
            console.log(data['client_name']+"登入成功");
            break;

        case 'say':

            say(data['from_client_id'], data['from_client_name'], data['content'], data['time']);
            break;

        case 'logout':

            say(data['from_client_id'], data['from_client_name'], data['from_client_name']+'離開聊天室', data['time']);
            delete client_list[data['from_client_id']];
            flush_client_list();
    }
}


function show_prompt(){  
    name = localStorage.getItem("account");
}  

// 發送訊息
function onSubmit() {
    var input = document.getElementById("textarea");
    if(input.value!=""){
        message_temp = input.value.replace(/"/g, '\\"').replace(/\n/g,'\\n').replace(/\r/g, '\\r');
        ws.send('{"type":"say","to_client_id":"all","to_client_name":"all","content":"'+input.value.replace(/"/g, '\\"').replace(/\n/g,'\\n').replace(/\r/g, '\\r')+'"}');
        input.value = "";
        input.focus();
    }
}
var message_temp = "";
// 刷新用户列表框
function flush_client_list(){
    var userlist_window = $("#userlist");
    var client_list_slelect = $("#client_list");
    userlist_window.empty();
    userlist_window.append('<h4>在線的使用者</h4><ul>');
    for(var p in client_list){
        userlist_window.append('<li id="'+p+'">'+client_list[p]+'</li>');
    }
    userlist_window.append('</ul>');
}

//訊息編輯
function say(from_client_id, from_client_name, content, time){
    if(content.indexOf("加入了聊天室")>0||content.indexOf("離開聊天室")>0){
        $("#dialog").append('<div class="speech_item"><div style="clear:both;"></div><p>'+content+'</p> </div>');
    }else{
        if(content==message_temp){
            $("#dialog").append('<div ><div style="clear:both;"></div><p style="text-align:left">:'+content+'</p> </div>');
        }else{
            $("#dialog").append('<div ><div style="clear:both;text-align:right"></div><p style="text-align:right">'+from_client_name+"說:"+content+'</p> </div>');
        }
    }
}

$(function(){
    select_client_id = 'all';
    $("#client_list").change(function(){
        select_client_id = $("#client_list option:selected").attr("value");
    });
});

function pre_box(){
    var d = editor.getDoc().getValue();
    document.getElementById('pre_box_show').innerHTML = d;
}


//關閉聊天室
function talk_room_close(){

    document.getElementById('room_close').style.display="block";
    document.getElementById('room_open').style.display="none";
}


//開啟聊天室
function talk_room_open(){
    document.getElementById('room_close').style.display="none";
    document.getElementById('room_open').style.display="block";
    if(talk_room_get_small!=1){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var word = xmlhttp.responseText;
                document.getElementById('room_side').innerHTML=word;
                if(is_login_talkroom){

                    connect();
                    is_login_talkroom=false;


                    talk_room_get_small=1;
                }
            }
        };
        xmlhttp.open("GET","php/ajaxhtml/talk_room.html",true);
        xmlhttp.send();	
    }

}

$( document ).ready(function(){
    var $on = 'section';
    $($on).css({
        'background':'none',
        'border':'none',
        'box-shadow':'none'
    });
    $(".inline").colorbox({inline:true, width:"50%"});		
}); 


