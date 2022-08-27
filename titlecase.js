function clear_everything(){
		document.getElementById("myForm").reset();
		document.getElementById("word_count").innerHTML = '0';
		document.getElementById("char_count").innerHTML = '0';
		document.getElementById("line_count").innerHTML = '0';
    }
     function CopyToMyClipboard(id1) {
		document.getElementById(id1).select();
		document.execCommand('copy');
        edpdGlobalShowCopiedAlert();
	}
	function activupload()
{
    document.getElementById('uplFile').click();
}
function readTextForTool()
    {
        var input = document.getElementById('uplFile').files[0];
        
        if (input==undefined) {
            return;
        }
        var formData = new FormData();
        formData.append('myFile', input);
        formData.append('getFileContent',true);
        // formData.append('captcha', captcharesponse);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == "captchaError"){
                    alert("Wrong Captcha");
                }else {
                    var resp = this.responseText;
                    if (resp == 'error5@@##01') {
                        alert('.txt, .docx, .pdf files are supported only. Try Again!');
                        document.getElementById('uplFile').value = '';
                        document.getElementById('uplFile').innerHTML = '';
                    } else {
                        document.getElementById('content').value += resp;
                        document.getElementById("content").focus();

                    }
                }
                // grecaptcha.reset(0);
            }
        };
        
        xhttp.open("POST",base_url+"frontend/getTxtFrmFile");   
        xhttp.send(formData);

    }
   function load_an_example()
{
  document.getElementById('content').value = "Convert the Following Line Into the Title Case After Pressing the 'Title Case' Button. \n\nThe quick brown fox jumps over the lazy dog.";
   document.getElementById('content').focus();
}