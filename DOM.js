//DOM Selectors

// getElementsByTagName
document.getElementsByTagName("h1");


// getElementsByClassName
document.getElementsByClassName("second");

// getElementById
document.getElementById("first")

// querySelector
document.querySelector("hi");

// querySelectorAll
document.querySelectorAll("li","h1");

// getAttribute
document.querySelector("li").getAttribute("random");

// setAttribute
document.querySelector("li").setAttribute("random","1000")

// ##Changing Styles
// style.{property} //ok
document.querySelector("h1").style.background="yellow";

// className //best
  var h1 =  document.querySelector("h1");
  h1.className="cooltitle";  

// classList //best
document.querySelector("li").classList;

// classList.add
document.querySelector("li").classList.add("cooltitle");
// classList.remove
document.querySelector("li").classList.remove("cooltitle");
// classList.toggle
document.querySelector("li").classList.toggle("done"); 

// ##Bonus

// innerHTML //DANGEROUS
document.querySelector("h1").innerHTML="<strong>!!!!!</strong>"

// parentElement
document.querySelectorAll("li")[1].parentElement;
// children

document.querySelectorAll("li")[1].parentELement.children;

// ##It is important to CACHE selectors in variables