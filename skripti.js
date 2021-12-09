



var vaara_button = document.getElementById("vaara_button");
vaara_button.disabled = true;
vaara_button.style.background = "grey";
vaara_button.style.border = "grey";




function checkBox(){ 
    
var checkbox_1 = document.getElementById("checkbox_1");
var checkbox_2 = document.getElementById("checkbox_2");
var checkbox_3 = document.getElementById("checkbox_3");
   
    if(checkbox_1.checked == true || checkbox_2.checked == true || checkbox_3.checked == true ){
        vaara_button.disabled = false;
        vaara_button.style.background = "#000C66";
        vaara_button.style.border = "#000C66";
    }
}


function reserve(){
    document.getElementById("alert-box").style.display = "block";
  }



  
