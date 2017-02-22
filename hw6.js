function addInputs() {
    var currTotal = document.getElementById("Total").innerHTML
    if (isNaN(currTotal)) {
        currTotal = 0;
    }
    var myInput = document.getElementById("myinput").value;

    var newTotal = +myInput + +currTotal;

    document.getElementById("Total").innerHTML = newTotal;    
}
