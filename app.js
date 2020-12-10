var buttonTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputDiv = document.querySelector("#translating-div");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occurred",error);
    alert("There's something wrong with the server! Try again later.");
}

function clickHandler() {
    var textEntered = inputText.value;

    fetch(getTranslationURL(textEntered))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })

    .catch(errorHandler)
};

buttonTranslate.addEventListener("click", clickHandler);