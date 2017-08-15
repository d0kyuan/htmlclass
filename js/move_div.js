
var ed_temp_postion = [0 , 0 , 0 ];
var RL_temp_postion = [0 , 0 , 0 ];
var L_temp_postion = [0 , 0 , 0 ];
var pre_temp_postion = [0 , 0 , 0 ];
var small_box_temp =[0 , 0 , 0 , 0 ,0];
var box_ps = 20;
var box_count = 0;
var temp_box_list =[0,0,0,0];





/*      RR欄位控制         */
function ed_open_move(){	
	width_for_centerRR= document.getElementById("centerRR").offsetWidth;
	height_for_centerRR= document.getElementById("centerRR").offsetHeight;
	var d = document.getElementById("centerRR");
	var offsets = document.getElementById('centerRR').getBoundingClientRect();
	var divleft = offsets.left;    
	document.getElementById("centerRR").style.width=width_for_centerRR-10+"px";
	document.getElementById("centerRR").style.height=height_for_centerRR-10+"px";
	document.getElementById("centerRR").style.right="0px";
	document.getElementById("centerRR").style.left=divleft+"px";
    $('#ed_move_bar').replaceWith('<div id="ed_move_bar" class="jqHandle jqDrag L_bar_top">');
	$('#centerRR').jqDrag('.jqDrag').jqResize('.jqResize');

    $.get( "php/move_div/ed_move_bar.html", function( data ) {
        
        $('#ed_move_bar').append(data);
        
    });
    document.getElementById("ed_lk_btn").style.left="38px";		
	document.getElementById("ed_lk_btn").style.left="0px";
	ed_temp_postion[2] = 1;
}
function ed_remove_move(){

	document.getElementById("centerRR").className = "";
	document.getElementById("centerRR").className ="resetcenterRR";
	document.getElementById("centerRR").style.top="0px";
	document.getElementById("centerRR").style.left="";
	document.getElementById("centerRR").style.width=(width_for_centerRR-10)+"px";
	document.getElementById("centerRR").style.height=(height_for_centerRR-10)+"px";
	ed_temp_postion[2] = 0;
}
function ed_lock_move(){    
    $.get( "php/move_div/ed_move_bar_back.html", function( data ) {
        
           $('#ed_move_bar').replaceWith(data);
        
    });
 
    document.getElementById("centerRR").style.opacity = "1.0";
	ed_temp_postion[2] = 2;

}



/*      RL欄位控制         */

function RL_open_move(){	
	width_for_centerRL= document.getElementById("centerRL").offsetWidth;
	height_for_centerRL= document.getElementById("centerRL").offsetHeight;
	var d = document.getElementById("centerRL");
	var offsets = document.getElementById('centerRL').getBoundingClientRect();
	var divleft = offsets.left;
	document.getElementById("centerRL").style.width=width_for_centerRL-10+"px";
	document.getElementById("centerRL").style.height=height_for_centerRL-10+"px";
	document.getElementById("centerRL").style.top="0px";
	document.getElementById("centerRL").style.left=divleft+"px";
    
    $('#RL_move_bar').replaceWith('<div id="RL_move_bar" class="jqHandle jqDrag ed_bar_top">');
	$('#centerRL').jqDrag('.jqDrag').jqResize('.jqResize');

    $.get( "php/move_div/RL_move_bar.html", function( data ) {
        
        $('#RL_move_bar').append(data);
        
    });
    
    
	document.getElementById("RL_lk_btn").style.left="38px";		
	document.getElementById("RL_co_btn").style.left="0px";
	RL_temp_postion[2] = 1;
}
function RL_remove_move(){
	document.getElementById("centerRL").className = "";
	document.getElementById("centerRL").className +="resetcenterRL";
	document.getElementById("centerRL").style.top="0px";
	document.getElementById("centerRL").style.left="";
	document.getElementById("centerRL").style.width=width_for_centerRL-10+"px";
	document.getElementById("centerRL").style.height=height_for_centerRL-10+"px";
	document.getElementById("RL_co_btn").style.left="0px";
	RL_temp_postion[2] = 0;
}
function RL_lock_move(){
    $.get( "php/move_div/RL_move_bar_back.html", function( data ) {
        
           $('#RL_move_bar').replaceWith(data);
        
    });
	RL_temp_postion[2] = 2;
    document.getElementById("centerRL").style.opacity = "1.0";
}


/*      L欄位控制         */

function L_open_move(){	
		width_for_centerL= document.getElementById("centerL").offsetWidth;
	height_for_centerL= document.getElementById("centerL").offsetHeight;
	var d = document.getElementById("centerL");
	var offsets = document.getElementById('centerL').getBoundingClientRect();
	var divleft = offsets.left;    
	document.getElementById("centerL").style.width=width_for_centerL-10+"px";
	document.getElementById("centerL").style.height=height_for_centerL-10+"px";
	document.getElementById("centerL").style.right="0px";
	document.getElementById("centerL").style.left=divleft+"px";
    $('#L_move_bar').replaceWith('<div id="L_move_bar" class="jqHandle jqDrag L_bar_top">');
	$('#centerL').jqDrag('.jqDrag').jqResize('.jqResize');

    $.get( "php/move_div/L_move_bar.html", function( data ) {
        
        $('#L_move_bar').append(data);
        
    });
	L_temp_postion[2] = 1;
}
function L_remove_move(){

	document.getElementById("centerL").className = "";
	document.getElementById("centerL").className +="resetcenterL";
	document.getElementById("centerL").style.top="0px";
	document.getElementById("centerL").style.left="0px";
	document.getElementById("centerL").style.width=width_for_centerL-10+"px";
	document.getElementById("centerL").style.height=height_for_centerL-10+"px";
	
	L_temp_postion[2] = 0;

}
function L_lock_move(){
      $.get( "php/move_div/L_move_bar_back.html", function( data ) {
        
           $('#L_move_bar').replaceWith(data);
        
    });
 
    document.getElementById("centerL").style.opacity = "1.0";
	L_temp_postion[2] = 2;
}















function pre_open_move(){	
	$('#pre_box').jqDrag('.jqDrag').jqResize('.jqResize');
	height_for_pre_box= document.getElementById("pre_box").offsetWidth;
	height_for_pre_box= document.getElementById("pre_box").offsetHeight;
	var d = document.getElementById("pre_box");
	var offsets = document.getElementById('pre_box').getBoundingClientRect();
	var divleft = offsets.left;
	document.getElementById("pre_op_btn").style.display="none";
	document.getElementById("pre_move_bar1").style.display="none";
	document.getElementById("pre_co_btn").style.display="block";
	document.getElementById("pre_move_bar").style.display="block";
	document.getElementById("pre_lk_btn").style.display="block";
	d.className = "";
	d.className += " jqDnR";
	document.getElementById("pre_box").style.width=height_for_pre_box-10+"px";
	document.getElementById("pre_box").style.height=height_for_pre_box-10+"px";
	document.getElementById("pre_box").style.right="0px";
	document.getElementById("pre_box").style.left=divleft+"px";
	document.getElementById("pre_lk_btn").style.left="38px";		
	document.getElementById("pre_co_btn").style.left="0px";
	pre_temp_postion[2] = 1;
}
function pre_remove_move(){
	document.getElementById("pre_move_bar").style.display="none";
	document.getElementById("pre_op_btn").style.display="block";
	document.getElementById("pre_move_bar1").style.display="block";
	document.getElementById("pre_co_btn").style.display="none";
	document.getElementById("pre_lk_btn").style.display="none";
	document.getElementById("pre_box").className = "";
	document.getElementById("pre_box").className ="resetcenterRR";
	document.getElementById("pre_box").style.top="0px";
	document.getElementById("pre_box").style.left="";
	document.getElementById("pre_box").style.width=(height_for_pre_box-10)+"px";
	document.getElementById("pre_box").style.height=(height_for_pre_box-10)+"px";
	document.getElementById("pre_co_btn").style.left="0px";
	pre_temp_postion[2] = 0;
}
function pre_lock_move(){

	document.getElementById("pre_move_bar1").style.display="block";
	document.getElementById("pre_move_bar").style.display="none";
	document.getElementById("pre_lk_btn").style.display="none";
	document.getElementById("pre_op_btn").style.left="0px";		
	document.getElementById("pre_co_btn").style.left="74px";
	document.getElementById("pre_op_btn").style.display="block";
	document.getElementById("pre_box").className = "";
	pre_temp_postion[2] = 2;
    document.getElementById("pre_box").style.opacity = "1.0";

}



/*			  所有DIV控制項				 */
function move_dive_backtopostion(){
	/*  ed DIV   */
	for_ed_div_back();
	/*  RL DIV   */
	for_RL_div_back();
	for_L_div_back();
    for_pre_div_back();
    Init();
	for_small_box_back();
}

function for_pre_div_back(){
	if(pre_temp_postion[2]!=0){
		switch(pre_temp_postion[2]){
			case 1:
				$('#pre_box').jqDrag('.jqDrag').jqResize('.jqResize');
				width_for_pre_box= document.getElementById("pre_box").offsetWidth;
				height_for_centerRR= document.getElementById("pre_box").offsetHeight;
				var d = document.getElementById("pre_box");
				var offsets = document.getElementById('pre_box').getBoundingClientRect();
				var divleft = offsets.left;
				document.getElementById("pre_op_btn").style.display="none";
				document.getElementById("pre_move_bar1").style.display="none";
				document.getElementById("pre_co_btn").style.display="block";
				document.getElementById("pre_move_bar").style.display="block";
				document.getElementById("pre_lk_btn").style.display="block";
				d.className = "";
				d.className += " jqDnR";
				document.getElementById("pre_box").style.width=width_for_pre_box-10+"px";
				document.getElementById("pre_box").style.height=height_for_pre_box-10+"px";
				document.getElementById("pre_box").style.right="0px";
				document.getElementById("pre_box").style.left=divleft+"px";
				document.getElementById("pre_lk_btn").style.left="38px";		
				document.getElementById("pre_co_btn").style.left="0px";			
				break;
			case 2:
				document.getElementById("pre_box").style.width=width_for_pre_box+"px";
				document.getElementById("pre_box").style.height=height_for_pre_box+"px";
				document.getElementById("pre_move_bar1").style.display="block";
				document.getElementById("pre_move_bar").style.display="none";
				document.getElementById("pre_lk_btn").style.display="none";
				document.getElementById("pre_op_btn").style.left="0px";		
				document.getElementById("pre_co_btn").style.left="74px";
				document.getElementById("pre_op_btn").style.display="block";
				document.getElementById("pre_box").className = "";
				break;
		}
		var offsets = document.getElementById('center').getBoundingClientRect();
		var divleft = offsets.top;
		document.getElementById("pre_box").style.top=(pre_temp_postion[0] - divleft)+"px";
		document.getElementById("pre_box").style.left=pre_temp_postion[1]+"px";
	}
}
function for_ed_div_back(){
	if(ed_temp_postion[2]!=0){
		switch(ed_temp_postion[2]){
			case 1:
				$('#centerRR').jqDrag('.jqDrag').jqResize('.jqResize');
				width_for_centerRR= document.getElementById("centerRR").offsetWidth;
				height_for_centerRR= document.getElementById("centerRR").offsetHeight;
				var d = document.getElementById("centerRR");
				var offsets = document.getElementById('centerRR').getBoundingClientRect();
				var divleft = offsets.left;
				document.getElementById("ed_op_btn").style.display="none";
				document.getElementById("ed_move_bar1").style.display="none";
				document.getElementById("ed_co_btn").style.display="block";
				document.getElementById("ed_move_bar").style.display="block";
				document.getElementById("ed_lk_btn").style.display="block";
				d.className = "";
				d.className += " jqDnR";
				document.getElementById("centerRR").style.width=width_for_centerRR-10+"px";
				document.getElementById("centerRR").style.height=height_for_centerRR-10+"px";
				document.getElementById("centerRR").style.right="0px";
				document.getElementById("centerRR").style.left=divleft+"px";
				document.getElementById("ed_lk_btn").style.left="38px";		
				document.getElementById("ed_co_btn").style.left="0px";			
				break;
			case 2:
				document.getElementById("centerRR").style.width=width_for_centerRR+"px";
				document.getElementById("centerRR").style.height=height_for_centerRR+"px";
				document.getElementById("ed_move_bar1").style.display="block";
				document.getElementById("ed_move_bar").style.display="none";
				document.getElementById("ed_lk_btn").style.display="none";
				document.getElementById("ed_op_btn").style.left="0px";		
				document.getElementById("ed_co_btn").style.left="74px";
				document.getElementById("ed_op_btn").style.display="block";
				document.getElementById("centerRR").className = "";
				break;
		}
		var offsets = document.getElementById('center').getBoundingClientRect();
		var divleft = offsets.top;
		document.getElementById("centerRR").style.top=(ed_temp_postion[0] - divleft)+"px";
		document.getElementById("centerRR").style.left=ed_temp_postion[1]+"px";
	}
}
function for_RL_div_back(){
		if(RL_temp_postion[2]!=0){
		switch(RL_temp_postion[2]){
			case 1:
				$('#centerRL').jqDrag('.jqDrag').jqResize('.jqResize');
				width_for_centerRL= document.getElementById("centerRL").offsetWidth;
				height_for_centerRL= document.getElementById("centerRL").offsetHeight;
				var d = document.getElementById("centerRL");
				var offsets = document.getElementById('centerRL').getBoundingClientRect();
				var divleft = offsets.left;
				document.getElementById("RL_op_btn").style.display="none";
				document.getElementById("RL_move_bar1").style.display="none";
				document.getElementById("RL_co_btn").style.display="block";
				document.getElementById("RL_move_bar").style.display="block";
				document.getElementById("RL_lk_btn").style.display="block";
				d.className = "";
				d.className += " jqDnR";
				document.getElementById("centerRL").style.width=width_for_centerRL-10+"px";
				document.getElementById("centerRL").style.height=height_for_centerRL-10+"px";
				document.getElementById("centerRL").style.right="0px";
				document.getElementById("centerRL").style.left=divleft+"px";
				document.getElementById("RL_lk_btn").style.left="38px";		
				document.getElementById("RL_co_btn").style.left="0px";			
				break;
			case 2:
				document.getElementById("centerRL").style.width=width_for_centerRL+"px";
				document.getElementById("centerRL").style.height=height_for_centerRL+"px";
				document.getElementById("RL_move_bar1").style.display="block";
				document.getElementById("RL_move_bar").style.display="none";
				document.getElementById("RL_lk_btn").style.display="none";
				document.getElementById("RL_op_btn").style.left="0px";		
				document.getElementById("RL_co_btn").style.left="74px";
				document.getElementById("RL_op_btn").style.display="block";
				document.getElementById("centerRL").className = "";
				break;
		}
		var offsets = document.getElementById('center').getBoundingClientRect();
		var divleft = offsets.top;
		document.getElementById("centerRL").style.top=(RL_temp_postion[0] - divleft)+"px";
		document.getElementById("centerRL").style.left=RL_temp_postion[1]+"px";
	}
}
function for_L_div_back(){
		if(L_temp_postion[2]!=0){
		switch(L_temp_postion[2]){
			case 1:
				$('#centerL').jqDrag('.jqDrag').jqResize('.jqResize');
				width_for_centerL= document.getElementById("centerL").offsetWidth;
				height_for_centerL= document.getElementById("centerL").offsetHeight;
				var d = document.getElementById("centerL");
				var offsets = document.getElementById('centerL').getBoundingClientRect();
				var divleft = offsets.left;
				document.getElementById("L_op_btn").style.display="none";
				document.getElementById("L_move_bar1").style.display="none";
				document.getElementById("L_co_btn").style.display="block";
				document.getElementById("L_move_bar").style.display="block";
				document.getElementById("L_lk_btn").style.display="block";
				d.className = "";
				d.className += " jqDnR";
				document.getElementById("centerL").style.width=width_for_centerL+"px";
				document.getElementById("centerL").style.height=height_for_centerL+"px";
				document.getElementById("centerL").style.right="0px";
				document.getElementById("centerL").style.left=divleft+"px";
				document.getElementById("L_lk_btn").style.left="38px";		
				document.getElementById("L_co_btn").style.left="0px";
				break;
			case 2:
				document.getElementById("centerL").style.width=width_for_centerL+"px";
				document.getElementById("centerL").style.height=height_for_centerL+"px";
				document.getElementById("L_move_bar1").style.display="block";
				document.getElementById("L_move_bar").style.display="none";
				document.getElementById("L_lk_btn").style.display="none";
				document.getElementById("L_op_btn").style.left="0px";		
				document.getElementById("L_co_btn").style.left="74px";
				document.getElementById("L_op_btn").style.display="block";
				document.getElementById("centerL").className = "";
				break;
		}
		var offsets = document.getElementById('center').getBoundingClientRect();
		var divleft = offsets.top;
		document.getElementById("centerL").style.top=(L_temp_postion[0] - divleft)+"px";
		document.getElementById("centerL").style.left=L_temp_postion[1]+"px";
	}
}



/*   及時預覽箱      */

function pre_view_box(){
    getsmall(4);
}




function getsmall(box_number){	
	var temp_array_ps = box_count;	
	var control = 1;
	while(control==1){
		if(temp_box_list[temp_array_ps]!=0){
			temp_array_ps = temp_array_ps>=3 ? temp_array_ps = 0:temp_array_ps+=1;
		}else{
			temp_box_list[temp_array_ps] = box_number;
			control=0;
		}
	}
	
	switch(box_number){
		case 1:
			document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_1' class='small_box'  onclick='getbig(1)' >課程選單</a>";
			document.getElementById("centerL").style.display="none";
			document.getElementById("box_1").style.left=box_ps+"px";
			box_ps += 200;
			small_box_temp[0]=1;
			break;
			
		case 2:
	
			document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_2' class='small_box'  onclick='getbig(2)' >教學內容</a>";
			document.getElementById("centerRL").style.display="none";
			document.getElementById("box_2").style.left=box_ps+"px";	
			box_ps += 200;
			small_box_temp[1]=1;
			break;
			
		case 3:
		
			document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_3' class='small_box'  onclick='getbig(3)'>練習器</a>";
			document.getElementById("centerRR").style.display="none";
			document.getElementById("box_3").style.left=box_ps+"px";	
			box_ps += 200;
			small_box_temp[2]=1;
			break;
        case 4:
            document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_4' class='small_box'  onclick='getbig(4)' >及時預覽箱</a>";
            
			document.getElementById("pre_box").style.display="none";
            document.getElementById("box_4").style.left=box_ps+"px";
            box_ps += 200;
		    small_box_temp[3]=1;
            break;
	}
	box_count+=1;

}
function getbig(box_number1){	
	switch(box_number1){
		case 1:
			box_count-=1;
			box_ps -= 200;
			document.getElementById("box_1").style.display="none";
			document.getElementById("centerL").style.display="block";
            small_box_temp[0]=0;
			break;
			
		case 2:
			box_count-=1;
			box_ps -= 200;
			document.getElementById("box_2").style.display="none";
			document.getElementById("centerRL").style.display="block";
            small_box_temp[1]=0;
			break;
			
		case 3:
			box_count-=1;
			box_ps -= 200;
			document.getElementById("box_3").style.display="none";
			document.getElementById("centerRR").style.display="block";
		    small_box_temp[2]=0;
			break;
        case 4:
            box_count-=1;
			box_ps -= 200;
			document.getElementById("box_4").style.display="none";
			document.getElementById("pre_box").style.display="block";
		    small_box_temp[3]=0;
            var d = editor.getDoc().getValue();
			document.getElementById('pre_box_show').innerHTML = d;
            break;
	}
	var temp_box_postion=20;
	document.getElementById("small_box_area").innerHTML ="";
	for(var i=0;i<=temp_box_list.length;i++){
		if(temp_box_list[i]!=box_number1){
			switch(temp_box_list[i]){
				case 1:
					document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_1' class='small_box'  onclick='getbig(1)' >課程選單</a>";
					document.getElementById("box_1").style.left=temp_box_postion+"px";	
					temp_box_postion+=200;
					break;
					
				case 2:
					document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_2' class='small_box'  onclick='getbig(2)' >教學內容</a>";
					document.getElementById("box_2").style.left=temp_box_postion+"px";	
					temp_box_postion+=200;
					break;
					
				case 3:
					document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_3' class='small_box'  onclick='getbig(3)'>練習器</a>";
					document.getElementById("box_3").style.left=temp_box_postion+"px";	
					temp_box_postion+=200;
					break;
                case 4:
                     document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_4' class='small_box'  onclick='getbig(4)' >及時預覽箱</a>";
					document.getElementById("box_4").style.left=temp_box_postion+"px";	
					temp_box_postion+=200;
                    break;
			}
		}else{
			temp_box_list[i]=0;
		}

	}
    
}

function for_small_box_back(){
    box_ps=20;
    for(var i =0 ; i <small_box_temp.length;i++){
        if(small_box_temp[i]==1){
            switch(i){
                case 0:  
                    document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_1' class='small_box' onclick='getbig(1)' >課程選單</a>";
                    document.getElementById("centerL").style.display="none";
                    document.getElementById("box_1").style.left=box_ps+"px";
                    box_ps += 200;
                    small_box_temp[0]=1;
                    
                    break;

                case 1:

                    document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_2' class='small_box'  onclick='getbig(2)' >教學內容</a>";
                    document.getElementById("centerRL").style.display="none";
                    document.getElementById("box_2").style.left=box_ps+"px";	
                    box_ps += 200;
                    small_box_temp[1]=1;
                    break;

                case 2:

                    document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_3' class='small_box'  onclick='getbig(3)'>練習器</a>";
                    document.getElementById("centerRR").style.display="none";
                    document.getElementById("box_3").style.left=box_ps+"px";	
                    box_ps += 200;
                    small_box_temp[2]=1;
                    break;
 
                case 3:
                     document.getElementById("small_box_area").innerHTML+="<a href='#center' id='box_4' class='small_box'  onclick='getbig(4)' >及時預覽箱</a>";
                    document.getElementById("pre_box").style.display="none";
					document.getElementById("box_4").style.left=box_ps+"px";	
					box_ps+=200;
                    small_box_temp[3]=1;
                    break;
            }
        }
    }
}

function save_ed_div_postion(){
	/* ed DIV*/
	var ed_offsets = document.getElementById('centerRR').getBoundingClientRect();
	ed_temp_postion[0] = ed_offsets.top;
	ed_temp_postion[1] = ed_offsets.left;
	/* RL DIV*/
	var RL_offsets = document.getElementById('centerRL').getBoundingClientRect();
	RL_temp_postion[0] = RL_offsets.top;
	RL_temp_postion[1] = RL_offsets.left;
	/* L DIV*/
	var L_offsets = document.getElementById('centerL').getBoundingClientRect();
	L_temp_postion[0] = L_offsets.top;
	L_temp_postion[1] = L_offsets.left;
    
    var pre_offsets = document.getElementById('pre_box').getBoundingClientRect();
	pre_temp_postion[0] = pre_offsets.top;
	pre_temp_postion[1] = pre_offsets.left;
}