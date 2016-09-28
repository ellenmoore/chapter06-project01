
window.onload = function(){
	var mainForm = document.getElementById("mainForm");
	mainForm.onsubmit = function(e){
		
	//change color of field and div if required fields are left blank
	var requiredInputs = document.querySelectorAll(".required");

	
	for (var i=0; i<requiredInputs.length; i++){
		if(isBlank(requiredInputs[i])){
			e.preventDefault();
			requiredInputs[i].style.backgroundColor="#AA0000";
			requiredInputs[i].parentNode.style.backgroundColor="#AA0000";
			requiredInputs[i].parentNode.style.color="FFFFFF";
		}
	}
	}
	
	
	//change field back when user trys to fix error
	var requiredInputs = document.querySelectorAll(".required");
	for (var i=0; i<requiredInputs.length; i++){
		requiredInputs[i].onfocus = function(){
			this.style.backgroundColor = "#ffffff";
			this.parentNode.style.backgroundColor = "#ffffff";
		}
	}
	
}

function isBlank(requiredInputs){
	//check input fields to see if any are empty
	if (requiredInputs.value=="" || requiredInputs.value==null){
		return true;
	} else if (requiredInputs.type=="checkbox"){
		if (!requiredInputs.checked)
			return true;
	} else if (requiredInputs.type=="textarea"){
	if (!requiredInputs.value.match (/\S/)){
			return true;
		}
	}
	return false;
}

