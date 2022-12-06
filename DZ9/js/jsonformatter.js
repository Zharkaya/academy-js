let input = document.getElementById("input");
let output = document.getElementById("output");
let formatted = document.getElementById("formatted");
let minify = document.getElementById("minify");
let err = document.getElementById("err");


formatted.addEventListener("click", ()=> {
    try {             
        output.value = JSON.stringify(JSON.parse(input.value), null, 4);
        err.textContent = "";
    } catch (error) {
        output.value = "Format error";
        err.textContent = error;        
    }
})

minify.addEventListener("click", ()=> {
    try {                
        output.value =  JSON.stringify(JSON.parse(input.value));
        err.textContent = "";
    } catch (error) {
        output.value = "Format error";
        err.textContent = error;
    }
})