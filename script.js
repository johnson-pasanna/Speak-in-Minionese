// alert and prompt for output and input

// console.log("it is working through script.js file as well ")
// var userName = prompt("Please type your name?");
// // console.log(userName);
// alert(userName);

// ex03: wiring button click

// challenge
// reference Button using querySelector()
// add event listener to button
// console "clicked" on click.
// check with different events

var buttonTranslate = document.querySelector(".btn-translate");

buttonTranslate.addEventListener('dblclick', function clickEventHandler() {console.log('clicked')})

console.log(buttonTranslate);


// Conclusion: querySelector select the first element element
// click event what it does when click happens it triggers a funciton call. call back funciton