
function prepareEventHandlers() {
	document.getElementById("mainForm").onsubmit = function(e){
		var fieldValue = document.getElementsByClassName("required").value;
		var inputField = document.getElementsByClassName("required");
		if (fieldValue == null || fieldValue == ""){
			inputField.classList.addClass("blank");
			e.preventDefault();
			
		} if (inputField == "checkbox") {
			if(inputField.checked){
				alert ("you have accepted");
			} else {
				alert ("you must accept");
				e.preventDefault();
			}
		}
		else {
			alert("Submission complete");
		}
	
		}
	}
	



window.onload = function() {
	prepareEventHandlers();
}

