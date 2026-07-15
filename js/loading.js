const button = document.getElementById("submitButton");

const buttonText = button.querySelector(".button-text");
const buttonLoader = button.querySelector(".button-loader");

console.log(button);
console.log(buttonText);
console.log(buttonLoader);


function showButtonLoading() {

    console.log("Loader gestartet");

    /*button.disabled = true;

    buttonText.classList.add("is-hidden");
    console.log(buttonText.className);
    buttonLoader.classList.remove("button-loader-hidden");

    console.log(buttonLoader.className);*/
    buttonText.style.display = "none";
    buttonLoader.style.display = "flex";
}


function hideButtonLoading() {

    button.disabled = false;

    /*buttonText.classList.remove("is-hidden");
    buttonLoader.classList.add("button-loader-hidden");*/

    /*buttonText.style.display = "inline";
    buttonLoader.style.display = "none";*/
    buttonText.style.display = "inline";
    buttonLoader.style.display = "none";

}


