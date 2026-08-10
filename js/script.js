// Submittbutton immer auf Updates erhalten/subscribe schalten bei neuladen des dokuments und eintippen neuer email
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submitButton");
/*const buttonText = submitButton.querySelector(".button-text");*/

emailInput.addEventListener("input", () => {
    /*submitButton.innerText = "Updates erhalten";*/
    /*buttonText.textContent = "Updates erhalten";*/
    submitButton.querySelector(".button-text").textContent = "Updates erhalten";
    submitButton.dataset.mode = "subscribe";
});

/* Hier wird HTML-Element newsletterForm gewählt, also Eingabefeld der EMail. Weiter setzt man den Eventlistener und
über gibt das Event auf das reagiert wenrden soll, hier "submit". Dies wird vom Formular ausgelöst, wenn es versendet 
werden soll. JS erstellt daraus ein Event, hier e benannt, in dem der Eventtyp und andere Parameter enthalten sind.
Dieses Event e muss dann an eine funktion übergeben werden, in der definiert wird, was mit diesem Event passieren soll.*/ 
document
    .getElementById("newsletterForm")
    .addEventListener("submit", async function (e) {

    e.preventDefault();
    showButtonLoading();
    console.log("Submit-Handler läuft");
    // TEST: Ladeanimation sichtbar machen
    await new Promise(resolve => setTimeout(resolve, 3000));
    

    const email = e.target.email.value;
    

    const formCard = document.getElementById("form-card");
    const statusCard = document.querySelector(".status-card");

    const formIcon = document.getElementById("form-message-icon");
    const formText = document.getElementById("form-message-text");

    const statusIcon = document.getElementById("icon");
    const statusTitle = document.getElementById("title");
    const statusMessage = document.getElementById("status-message");
    

    
    // reset textmessage
    formIcon.innerText = "";
    formText.innerText = "";

    

    try {
        // hier erst den Modus des Submitt-Buttons abfragen für subscribe oder resend
        const mode = submitButton.dataset.mode;

        // Produktion: "https://app.newsletter.mschott.dev/api/subscribers"
        // Deploy: "https://localhost:7136/api/subscribers"

        let url = "https://app.newsletter.mschott.dev/api/subscribers";
        
        if (mode === "resend") {
            url += "/resend-confirmation";
            }
        const response = await fetch(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            }
        );

        
        // email vorhanden (hier später einheitliche statuscodes)
        
        if (response.status === 409) {

    const data = await response.json();


    // Noch nicht bestätigt
    if (data.message.includes("Bestätigungsmail")) {

        formIcon.innerText = "✕";
        formIcon.className = "message-icon status-error";

        formText.innerText =
            "Diese E-Mail-Adresse wurde bereits registriert. " +
            "Bestätigungsmail erneut senden ?";

        submitButton.querySelector(".button-text").textContent = "Neu senden";
        submitButton.dataset.mode = "resend";

        hideButtonLoading();

        return;
    }


    // Bereits vollständig registriert
    formIcon.innerText = "✓";
    formIcon.className = "message-icon status-success";

    formText.innerText =
        "Diese E-Mail-Adresse ist bereits für den Newsletter registriert.";

    submitButton.querySelector(".button-text").textContent = "Updates erhalten";
    submitButton.dataset.mode = "subscribe";

    hideButtonLoading();

    return;
}

        
        // erfolg (einheitliche statuscodes !)
        
        if (response.ok) {

            e.target.reset();

            formCard.style.display = "none";
            //statusCard.style.display = "flex";
            statusCard.classList.remove("is-hidden");
            formCard.classList.add("is-hidden");

            statusIcon.innerText = "";
            statusIcon.className =
                "status-icon status-neutral";

            statusTitle.innerText = "E-Mail gespeichert";

            statusMessage.innerText =
                "Sie erhalten eine Email mit dem Beestätigungs-Link. Bitte schauen Sie auch in Ihrem Spam-Ordner nach.";
            
            hideButtonLoading();
            return;
        }

        
        // error
        hideButtonLoading();
        formIcon.innerText = "!";
        formIcon.className = "message-icon status-error";

        formText.innerText =
            "Ein Fehler ist aufgetreten.";

    } catch (error) {
        hideButtonLoading();
        formIcon.innerText = "!";
        formIcon.className = "message-icon status-error";

        formText.innerText =
            "Server nicht erreichbar.";
    }
});



