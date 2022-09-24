var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercent');

form.addEventListener('submit', function (event) {

    if (!numField1.value || !numField2.value) {
        // alert("please enter values");
        resultField.innerText = "please input values"; //to get the text on the html
        event.preventDefault(); ///to stop form default of refreshing
    }
    else {
        var x = parseFloat(numField1.value); ///parsefloat to convert strings(text) to numbers
        var y = parseFloat(numField2.value);
        
        var results = x/y;
        var percent = results * 100;
       
        resultField.innerText = "Answer:" + percent + "%";
        event.preventDefault();
    }
});



