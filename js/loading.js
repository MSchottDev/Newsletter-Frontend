const button = document.getElementById("submitButton");

const buttonText = button.querySelector(".button-text");
const buttonLoader = button.querySelector(".button-loader");


function showButtonLoading() {
    console.log("Loader gestartet");

    button.disabled = true;

    buttonText.classList.add("is-hidden");
    buttonLoader.classList.remove("is-hidden");

}


function hideButtonLoading() {

    button.disabled = false;

    buttonText.classList.remove("is-hidden");
    buttonLoader.classList.add("is-hidden");

}