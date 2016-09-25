
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
	
	function makeRed(){
		this.classList.addClass("blank");
	}
	
	//change field back when user trys to fix error
	var requiredInputs = document.querySelectorAll(".required");
	for (var i=0; i<requiredInputs.length; i++){
		requiredInputs[i].onfocus = function(){
			this.style.backgroundColor = "#EEEE00";
		}
	}
	
}

function isBlank(inputField){
if (inputField.value=="" || inputField.value==null){
		return true;
	}
	return false;
}

