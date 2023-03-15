/* Declare variables below to save the different sections (divs) of your story*/
let optionOneScreen = document.querySelector(".option-one-screen");
let optionOneButton = document.querySelector(".option-one");
let optionTwoButton = document.querySelector(".option-two");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");







/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
*/
optionOneButton.onclick=function(){
	optionOneScreen.style.display = "block";
    optionOneEnd.style.display = "block";
    optionTwoScreen.style.display= "none";
    optionTwoEnd.style.display= "none";
};

optionTwoButton.onclick=function(){
   optionTwoScreen.style.display= "block";
    optionTwoEnd.style.display= "block";
    optionOneScreen.style.display = "none";
    optionOneEnd.style.display = "none";
};





