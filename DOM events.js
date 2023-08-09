// var button =  document.getElementsByTagName("button")[0];
// button.addEventListener("mouseenter",function(){
//     console.log("click!!!!!")
// })

var button = document.getElementById("enter");
var input=document.getElementById("usrinp");
var ul = document.querySelector("ul");

function inputlength(){
    return input.value.lenght;
}  


function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 
}

function addlistafterlclick(){
    if(inputlength() > 0){
        createListElement();
    }
}
function addlistafterkeypress(){
    if ( inputlength() > 0 && event.keyCode === 13 ){
        createListElement();
    }
}
button.addEventListener("click",addlistafterlclick);
input.addEventListener("keypress",addlistafterkeypress);   