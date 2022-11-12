
// querySelectors
var inputText = document.querySelector('.text-input');
var buttonTranslate = document.querySelector(".btn-translate");
var outputText = document.querySelector('.text-output');

// how to call an API via Javascript
var serverURL = "https://api.funtranslations.com/translate/minion.json";

// error handling
function errorHandling(errorMessage) {
  console.log("error occured", errorMessage);
  alert("API calls not working! Since the server is down")
}

// function
function translationURL(text) {
  return testingURL = serverURL + "? " + "text=" + text
}

function clickEventHandler() {
  var textInput = inputText.value;
  fetch(translationURL(textInput))
    .then(function responseHandler(response) {
      return response.json()
    })
    .then(function logJSON(json) {
      var finalTranslation = json.contents.translated;
      outputText.innerText = finalTranslation;
    })
    .catch(errorHandler)
};


// Eventlistner
buttonTranslate.addEventListener('click', clickEventHandler)


// Conclusion: querySelector select the first element from HTML
// click event what it does is when click happens it triggers a funciton call. call back funciton

