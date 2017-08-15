var password_notsame= 0;

function sighup(){
    if(change_page!=1){save_ed_div_postion();}
    change_page=1;
    $('#center').animate({left:"-"+user_width+"px"},600,function(){
        var xmlhttp1=new XMLHttpRequest();
        xmlhttp1.onreadystatechange = function() {
            if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
                var word = xmlhttp1.responseText;
                $('#center').html(word);
                $('#center').css({left:user_width+"px"});
                $('#body').css({overflow:"hidden"});
                $('#center').animate({left:"0px"},600,function(){$('#body').css({overflow:"visible"});});
                $('#rule').css({height:"200px"});

            }

        };
        xmlhttp1.open("GET","php/ajaxhtml/sighup.html",true);
        xmlhttp1.send();

    });
}


function btn_sighup_click(){
    var username = document.getElementById('memeber_name').value;
    var account = document.getElementById('account').value;
    var password = document.getElementById('password').value;
    var passwordagain = document.getElementById('passwordagain').value;
    var loginq = document.getElementById('qus').value;
    var logina = document.getElementById('ans').value;
    var share_box = document.getElementById('share');
    var share = 0;
    if(share_box.checked){
        share = 0;
    }else{
        share = 1;
    }
    if(account==""){
        alert("帳號不得為空白");
        document.getElementById('account').focus();
        return false;	
    }else if(memeber_name==""){
        alert("帳號不得為空白");
        document.getElementById('account').focus();
        return false;	
    }else if(password==""){
        alert("密碼不得為空白");
        document.getElementById('password').focus();
        return false;
    }else if(document.getElementById('passwordagain').value==""){
        alert("再一次密碼不得為空白");
        document.getElementById('passwordagain').focus();
        return false;
    }else if (password!=document.getElementById('passwordagain').value){
        alert("兩次輸入的密碼不相同");
        document.getElementById('password').focus();
        document.getElementById('password').value="";
        document.getElementById('passwordagain').value="";
        return false;
    }else if(loginq ==""){
        alert("安全提問不得為空白");
        document.getElementById('login_q').focus();
        return false;
    }else if(logina==""){
        alert("安全答案不得為空白");
        document.getElementById('login_a').focus();
        return false;
    }else if(account=="帳號已存在"){
        alert("此帳號已存在");
        return false;
    }else if(passwordagain=="在一次密碼與密碼兩者不相同"){
        alert("在一次密碼與密碼兩者不相同");
        return false;
    }else{
        
        $.post("php/sighup.php",{account:account,password:password,loginq:document.getElementById('qus').value,logina:document.getElementById('ans').value,share:share,username:username},function(data){
               if(data=="|sameaccount|"){
                    alert("此帳號已存在");
                    return false;
                }else if(data == "|accountsighup|"){
                    alert("歡迎加入!請使用者保管好帳號及密碼");
                    goback_btn_click();

                }else{
                    alert("錯誤"+data);

                }
               });

    }
}

function live_account_check(){
    var account = document.getElementById('account');
    if(account.value!=""){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var word = xmlhttp.responseText;
                if(word=="|sameaccount|"){
                    account.value="帳號已存在";
                }
            }
        };
        xmlhttp.open("POST","php/live_account_check.php?",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("account="+account.value);
    }
}
function live_account_check_click(){
    var account = document.getElementById('account');
    if(account.value=="帳號已存在"){
        account.value ="";
    }
}
function live_password_check(){
    var password = document.getElementById('password');
    var passwordagain = document.getElementById('passwordagain');
    if(password.value != passwordagain.value){
        passwordagain.setAttribute("type", "text");
        passwordagain.value = "在一次密碼與密碼兩者不相同";
        password_notsame =1;
    }

}
function live_password_click(){
    var password = document.getElementById('password');
    var passwordagain = document.getElementById('passwordagain');
    if(password_notsame!=0){
        passwordagain.setAttribute("type", "password");
        passwordagain.value = "";
        password.value = "";
        password.focus();
        password_notsame=0;
    }

}