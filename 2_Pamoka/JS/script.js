//Exercise 1
var numberForm = document.querySelector("#guessNumber");
var resultText = document.getElementById("resultText");
var resultCount = document.getElementById("resultCount");
var secretNum = Math.floor(Math.random() * (100 - 1) + 1); 
var guessCount = 0;

//console.log("Secret numer is: " + secretNum);

numberForm.addEventListener("submit", function(e){
    e.preventDefault();
    var num = numberForm["input"].value;
    guessCount++;
    
    if(parseInt(num) == parseInt(secretNum)){
        resultText.innerHTML = "Your guess was correct!";
    }
    else if(num < secretNum){
        resultText.innerHTML = "The secret number is bigger!";
    }
    else{
        resultText.innerHTML = "The secret number is smaller!";
    }
    resultCount.innerHTML = guessCount + " guesses was done";
})


//Exercise 2
var sumForm = document.querySelector("#sumForm");
var sum = document.getElementById("sum");

sumForm.addEventListener("submit", function(e){
    e.preventDefault();
    var num1 = sumForm["firstNumber"].value;
    var num2 = sumForm["secondNumber"].value;
    var answer = parseInt(num1) + parseInt(num2);
    sum.innerHTML = answer;
})


//Exercise 3
var kmiForm = document.querySelector("#kmiForm");
var result = document.getElementById("kmi");

kmiForm.addEventListener("submit", function(e){
    e.preventDefault();
    var height = kmiForm["height"].value;
    var weight = kmiForm["weight"].value;
    var answer = Math.floor(parseInt(weight) / Math.pow(parseInt(height)/100, 2));

    result.innerHTML = "Jusu KMI yra " + answer;
})

