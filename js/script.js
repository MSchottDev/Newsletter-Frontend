/* Hier wird HTML-Element newsletterForm gewählt, also Eingabefeld der EMail. Weiter setzt man den Eventlistener und
über gibt das Event auf das reagiert wenrden soll, hier "submit". Dies wird vom Formular ausgelöst, wenn es versendet 
werden soll. JS erstellt daraus ein Event, hier e benannt, in dem der Eventtyp und andere Parameter enthalten sind.
Dieses Event e muss dann an eine funktion übergeben werden, in der definiert wird, was mit diesem Event passieren soll.*/ 
document.getElementById("newsletterForm").addEventListener("submit", async function(e) {

    e.preventDefault(); /* Verhindere Standartverhalten von HTML */

    const email = e.target.email.value;  /* Speicher Inhalt von target Formular-Email-Wert in der Variablen email */

    const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    });

    const result = await response.json();

    document.getElementById("message").innerText = result.message;
});