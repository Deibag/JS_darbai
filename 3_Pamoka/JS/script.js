//Exercise 1
let friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function(eachName, index){
    console.log(`${index +1}. ${eachName}`);
});

//Exercise 2
// 0 iki 39 bg-danger
// 40 iki 69 bg-info
// 70 iki 100 bg-success
var div = document.querySelector('.container');
var number = document.querySelector('#number');
var progress = document.querySelector('.progress-bar');

div.addEventListener('submit', function(e){
    e.preventDefault();
    var value = number.value;
    progress.style = `width: ${value}%;`;
    addClass(value);
})

function addClass(value){
    if(value < 40){
        progress.className = "progress-bar bg-danger";
    } else if(value < 70){
        progress.className = "progress-bar bg-info";
    } else{
        progress.className = "progress-bar bg-success";
    }
}