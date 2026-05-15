/* Hier wird HTML-Element newsletterForm gewählt, also Eingabefeld der EMail. Weiter setzt man den Eventlistener und
über gibt das Event auf das reagiert wenrden soll, hier "submit". Dies wird vom Formular ausgelöst, wenn es versendet 
werden soll. JS erstellt daraus ein Event, hier e benannt, in dem der Eventtyp und andere Parameter enthalten sind.
Dieses Event e muss dann an eine funktion übergeben werden, in der definiert wird, was mit diesem Event passieren soll.*/ 

document.getElementById("newsletterForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = e.target.email.value;
    const messageElement = document.getElementById("message");

    const response = await fetch("https://localhost:7136/api/subscribers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    });

    const result = await response.json();

    if (response.status === 409) {
        
        document.getElementById("messageIcon").innerText = "✕";
        document.getElementById("messageText").innerText = "Diese Email ist bereits registriert.";
    }
    else if (response.ok) {
        
        

        document.getElementById("newsletterForm").reset();

        
        
        // Wechsel Seitenstatus EINGABE auf ERFOLG
        document.getElementById("form-state").style.display = "none";
        document.getElementById("success-state-index").style.display = "block";
    }
    else {
        
        messageElement.innerText = "Ein Fehler ist aufgetreten.";
        messageElement.style.color = "red";
    }
});

// close-Button
document
    .getElementById("closeButton")
    .addEventListener("click", () => {

        window.close();
});