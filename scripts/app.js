// create the variables for the elements
let myInput = document.getElementById("myInput");
let submitBtn = document.getElementById("submitBtn");
let displayBtn = document.getElementById("displayBtn");

let inputDisplay = document.getElementById("inputDisplay");

let savedInput;

submitBtn.addEventListener("click", function(event){
    savedInput = myInput.value;
    console.log(savedInput);
});

displayBtn.addEventListener("click", function(event){
    inputDisplay.className = "designed";
    inputDisplay.innerHTML = savedInput;
});