//Var número inteiro
var num = 1;
console.log(num);
document.getElementById('num').innerHTML = num;

//Var número 'Quebrado'
var float = 1.01;
console.log(float);
document.getElementById('float').innerHTML = float;

//Var Texto
var str = "Hello World";
console.log(str);
document.getElementById('string').innerHTML = str;

//Var Bolleana
var bollean = True;
console.log(bollean);
document.getElementById('Bollean').innerHTML = bollean;

// Get all the <p> tags on the page
var paragraphs = document.getElementsByTagName("p").innerHTML;
paragraphs.style.margin = "1000px";
