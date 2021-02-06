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
    localStorage.setItem(`${guessCount} Spejimas`, num);
    console.log(localStorage);
    resultCount.innerHTML = guessCount + " guesses was done";
    
    if(parseInt(num) == parseInt(secretNum)){
        resultText.innerHTML = "Your guess was correct!";
        guessCount = 0;
        localStorage.clear();
    }
    else if(num < secretNum){
        resultText.innerHTML = "The secret number is bigger!";
    }
    else{
        resultText.innerHTML = "The secret number is smaller!";
    }

})


//Exercise 2
var bankForm = document.querySelector('#bank');
var accountinfo = document.querySelector('#account');
var account = 0;
var arr = [];

bankForm.addEventListener("submit", function(e){
    e.preventDefault();
    var amount = bankForm["input"].value;
    var operation = document.querySelector("#bank > div > select");
    if(operation.value == 1){
        account += parseInt(amount);
        arr.push(amount);
    } else  if(operation.value == 2){
        amount *= -1;
        account += amount;
        arr.push(amount);
    } else {
        alert("Pasirinkite operacijos tipa.");
    }
    
    localStorage.setItem("Operacijos", JSON.stringify(arr));
    accountinfo.innerHTML = `Saskaitoje yra: ${account} Eur.`;

})



