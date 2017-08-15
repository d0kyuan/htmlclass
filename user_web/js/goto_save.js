function go_save(temp_word,membername,page_id){
    var filename=document.getElementById('filename_input').value;
    alert(filename);
    if(filename != ""){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var word = xmlhttp.responseText;
                alert(word);
                switch(word){
                    case "|samefile|":
                        alert("檔名已被使用!!");
                        document.getElementById('filename_input').value="";
                        break;
                    case "|nonesame|":
                        window.location.href = "../php/membersave.php?name="+filename+"&word="+temp_word+"&account="+membername;
                        break;
                }
            }
        };
        xmlhttp.open("GET","php/check_same_file.php?membername="+membername+"&file_name="+filename,true);
        xmlhttp.send();	 
    }else{
        alert("檔名得不為空白!!");
        return false;
    }


}