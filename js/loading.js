const button = document.getElementById("submitButton");

const buttonText = button.querySelector(".button-text");
const buttonLoader = button.querySelector(".button-loader");


function showButtonLoading() {
    console.log("Loader gestartet");

    button.disabled = true;

    buttonText.classList.add("button-loader-hidden");
    buttonLoader.classList.remove("button-loader-hidden");

}


function hideButtonLoading() {

    button.disabled = false;

    buttonText.classList.remove("button-loader-hidden");
    buttonLoader.classList.add("button-loader-hidden");

}