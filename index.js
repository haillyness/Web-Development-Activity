document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.getElementById("clearButton");
    const form = document.getElementById("form");

    
    clearButton.addEventListener("click", function () {
       
        const formElements = form.elements;
        for (let i = 0; i < formElements.length; i++) {
        
            if (
                formElements[i].tagName === "INPUT" &&
                (formElements[i].type === "text" ||
                    formElements[i].type === "number" ||
                    formElements[i].type === "email" ||
                    formElements[i].type === "tel")
            ) {
            
                formElements[i].value = "";
            } else if (formElements[i].tagName === "SELECT") {
               
                formElements[i].selectedIndex = 0;
            } else if (formElements[i].tagName === "INPUT" && formElements[i].type === "radio") {
               
                formElements[i].checked = false;
            }
        }
    });
});
