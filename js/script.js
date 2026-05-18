// Submittbutton immer auf Updates erhalten/subscribe schalten bei neuladen des dokuments und eintippen neuer email
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submitButton");

emailInput.addEventListener("input", () => {
    submitButton.innerText = "Updates erhalten";
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

    const email = e.target.email.value;
    

    const formCard = document.getElementById("form-card");
    const statusCard = document.querySelector(".status-card");

    const formIcon = document.getElementById("form-message-icon");
    const formText = document.getElementById("form-message-text");

    const statusIcon = document.getElementById("icon");
    const statusTitle = document.getElementById("title");
    const statusMessage = document.getElementById("status-message");
    const submitButton = document.getElementById("submitButton");

    
    // reset textmessage
    formIcon.innerText = "";
    formText.innerText = "";

    

    try {
        // hier ert den Modus des Submitt-Buttons abfragen für subscribe oder resend
        const mode = submitButton.dataset.mode;
        let url = "https://localhost:7136/api/subscribers";
        
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

            formIcon.innerText = "✕";
            formIcon.className = "message-icon status-error";
            // hier noch ausgabe anpassen: message header + message text
            formText.innerText =
                                "Diese E-Mail ist bereits vorhanden. " +
                                "Klicken Sie auf \"Bestätigen\" in Ihrer Bestätigungsmail, " +
                                "um die Registrierung abzuschließen. " +
                                "Wenn Sie eine neue Bestätigungsmail benötigen, " +
                                "klicken Sie einfach auf \"Neu senden\":";
            
            submitButton.innerText = "Neu senden";
            submitButton.dataset.mode = "resend";

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
                "Sie erhalten eine Email mit dem Beestätigungs-Link.Bitte schauen Sie auch in Ihrem Spam-Ordner nach.";

            return;
        }

        
        // error
        
        formIcon.innerText = "!";
        formIcon.className = "message-icon status-error";

        formText.innerText =
            "Ein Fehler ist aufgetreten.";

    } catch (error) {

        formIcon.innerText = "!";
        formIcon.className = "message-icon status-error";

        formText.innerText =
            "Server nicht erreichbar.";
    }
});



// close button

document
    .getElementById("closeButton")
    .addEventListener("click", () => {

        window.close();
});