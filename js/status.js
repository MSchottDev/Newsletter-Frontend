const params = new URLSearchParams(window.location.search);
const state = params.get("state");

const icon = document.getElementById("icon");
const title = document.getElementById("title");
const message = document.getElementById("status-message");
const githubIcon = document.getElementById("githubIcon");


// icons anpassen

const successFilter =
    "brightness(0) saturate(100%) invert(64%) sepia(62%) saturate(558%) hue-rotate(93deg) brightness(91%) contrast(92%)";

const warningFilter =
    "brightness(0) saturate(100%) invert(73%) sepia(78%) saturate(773%) hue-rotate(347deg) brightness(99%) contrast(95%)";

const errorFilter =
    "brightness(0) saturate(100%) invert(43%) sepia(95%) saturate(1426%) hue-rotate(332deg) brightness(95%) contrast(95%)";



// status handling

if (icon && title && message && githubIcon) {

    switch (state) {

        
        // angemeldet
        
        case "confirmed":

            icon.innerText = "✓";
            icon.className = "status-icon status-success";

            githubIcon.style.filter = successFilter;

            title.innerText = "Anmeldung erfolgreich";

            message.innerText =
                "Danke für die Anmeldung. Sie erhalten ab sofort Updates zu meinen GitHub-Projekten.";

            break;


        
        // bereits angemeldt
        
        case "already-confirmed":

            icon.innerText = "✓";
            icon.className = "status-icon status-warning";

            githubIcon.style.filter = warningFilter;

            title.innerText = "Bereits bestätigt";

            message.innerText =
                "Diese E-Mail-Adresse wurde bereits bestätigt.";

            break;


        
        // erfolg abgemeldet
        
        case "unsubscribed":

            icon.innerText = "✓";
            icon.className = "status-icon status-success";

            githubIcon.style.filter = successFilter;

            title.innerText = "Abmeldung erfolgreich";

            message.innerText =
                "Sie wurden erfolgreich vom Newsletter abgemeldet.";

            break;


        
        // error
        
        case "error":

            icon.innerText = "✕";
            icon.className = "status-icon status-error";

            githubIcon.style.filter = errorFilter;

            title.innerText = "Fehler";

            message.innerText =
                "Der Link ist ungültig oder abgelaufen.";

            break;


        
        // sonstiges
        
        default:

            icon.innerText = "?";
            icon.className = "status-icon status-warning";

            githubIcon.style.filter = warningFilter;

            title.innerText = "Status";

            message.innerText =
                "Unbekannter Status.";

            break;
    }
}



// close

document
    .getElementById("closeButton")
    ?.addEventListener("click", () => {

        window.close();
});