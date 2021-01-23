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
var kmiresult = document.getElementById("kmi");

kmiForm.addEventListener("submit", function(e){
    e.preventDefault();
    var height = kmiForm["height"].value;
    var weight = kmiForm["weight"].value;
    var answer = Math.floor(parseInt(weight) / Math.pow(parseInt(height)/100, 2));

    kmiresult.innerHTML = "Jusu KMI yra " + answer;
})


//Exercise 4
var taskForm = document.querySelector("#taskForm");
var result = document.querySelector("#list")

taskForm.addEventListener("submit", function(e){
    e.preventDefault();
    var toAdd = taskForm["task"].value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(toAdd));
    result.appendChild(li);
})


//Exercise 6
var div = document.querySelector("#block");
div.style.backgroundSize = "1000px 400px"
function show(e){
    e.preventDefault();
    var selector = document.querySelector("#id_of_select");
    var value = selector[selector.selectedIndex].text;
    switch(value){
        case "Pavasaris":
            div.style.backgroundImage = "url(./IMG/pavasaris.jpg)";
            break;
        case "Vasara":
            div.style.backgroundImage = "url(./IMG/vasara.jpg)";;
            break;
        case "Ruduo":
            div.style.backgroundImage = "url(./IMG/ruduo.jpg)";;
            break;
        case "Žiema":
            div.style.backgroundImage = "url(./IMG/ziema.jpg)";;
            break;
    }
}

document.getElementById('show').addEventListener("click", show);


//Exercise 7
function change(img){
    var top = document.querySelector('#top');
    var text = document.querySelector('#ctext');
    //console.log(top);
    top.src = document.getElementById(img).src;
    text.innerHTML = document.getElementById(img).alt;
}
