var tips_count=1;

function start_page(){
    re_ed();
    pre_view_box();
    check_reload();
    show_page_count();
    pre_view_box_timer();
}
function tips_pass(){
    
    
    $.get("php/ajaxhtml/all_page.html",function(data){
        $('#tips_pic_changer').animate({left:"-1500px"},500,function(){
        document.getElementById('body').innerHTML = data;
        start_page();
        Init() ;
        localStorage.setItem("tips_show", 1);
        });
    });
}

function tips_next_step(){
		
        $('#tips_pic_changer').animate({left:"-1500px"},500,function(){
            $("#tips_pic").html('<img id="tips_pic_changer" width="'+user_width+'" height="'+user_height+'"  style="left:1500px;" src="tips_pic/tips'+tips_count+'.png"/>');
            $('#tips_pic_changer').animate({left:"0px"},500);

        });
   if(tips_count++>5){
            $("#tips_btn_area").html('<p id="next_tips_btn" class="tips_btn" onclick="tips_pass()">開始</p>');

    }
   

   // document.getElementById('tips_pic').innerHTML='<img id="tips_pic_changer" src="tips_pic/tips'+tips_count+'.png"/>';
}