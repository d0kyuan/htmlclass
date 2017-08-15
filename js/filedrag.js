	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}


	// output information
	function Output(msg) {
        send_to_ed(msg);
	}


	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}


	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
		}

	}

    var tmp_img_count = 0;
	// output file information
	function ParseFile(file) {

	

		// display an image
        
        if (file.type.indexOf("image") == 0) {
			var reader = new FileReader();
			reader.onload = function(e) {
				Output(
					'<img id="img_show'+tmp_img_count+'" src="' + e.target.result + '" />'
				);
                tmp_img_count++;
			}
			reader.readAsDataURL(file);
		}else if (file.type.indexOf("text") == 0) {
			var reader = new FileReader();
			reader.onload = function(event) {
				Output(event.target.result);
			}
			reader.readAsText(file);
		}else if (file.type.indexOf("application/javascript") == 0) {
			var reader = new FileReader();
			reader.onload = function(event) {
				Output(event.target.result);
			}
			reader.readAsText(file);
        }/*else if (file.type.indexOf("application/vnd.openxmlformats-officedocument.wordprocessingml.document") == 0) {
            var reader = new FileReader();
			reader.onload = function(event) {
                alert(event.target.result);
				var xmlhttp=new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            var word = xmlhttp.responseText;
                            alert(word);
                            }
                        };
                xmlhttp.open("GET","test/convet.php?word="+event.target.result,true);
                xmlhttp.send();	
			}
			reader.readAsText(file);
        }*/else{
            Output(
			"檔案資訊\r\n檔案名稱:" + file.name +
			"\r\n檔案類型: " + file.type +
			"\r\n檔案大小: " + file.size +
			"bytes \r\n目前並不支援此類型的檔案"
		      );
        }

	}


	// initialize
	function Init() {

		var fileselect = $id("fileselect"),
			filedrag = $id("filedrag");

		// file select
		fileselect.addEventListener("change", FileSelectHandler, false);

		// is XHR2 available?
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			// file drop
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			filedrag.style.display = "block";


		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}
