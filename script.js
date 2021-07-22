// console.log("it is working through script.js file as well ")
// var userName = prompt("Please type your name?");
// // console.log(userName);
// alert(userName);


// querySelectors
var buttonTranslate = document.querySelector(".btn-translate");
var inputText = document.querySelector('textarea');
console.log(inputText);


// function
function clickEventHandler() {
  console.log('clicked')
  console.log(inputText.value)
}


// Eventlistner
buttonTranslate.addEventListener('click', clickEventHandler)

console.log(buttonTranslate);


// Conclusion: querySelector select the first element from HTML
// click event what it does when click happens it triggers a funciton call. call back funciton