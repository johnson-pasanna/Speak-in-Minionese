// console.log("it is working through script.js file as well ")
// var userName = prompt("Please type your name?");
// // console.log(userName);
// alert(userName);


// querySelectors
var buttonTranslate = document.querySelector(".btn-translate");
var inputText = document.querySelector('.text-input');
var outputText = document.querySelector('.text-output')



// function
function clickEventHandler() {
  outputText.innerHTML = inputText.value
}


// Eventlistner
buttonTranslate.addEventListener('click', clickEventHandler)



// Conclusion: querySelector select the first element from HTML
// click event what it does is when click happens it triggers a funciton call. call back funciton
