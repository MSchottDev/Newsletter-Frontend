const params = new URLSearchParams(window.location.search);
const state = params.get("state");

const icon = document.getElementById("icon");
const title = document.getElementById("title");
const message = document.getElementById("message");
const githubIcon = document.getElementById("githubIcon");

switch (state) {

    case "confirmed":
        icon.innerText = "✓";
        icon.className = "status-icon status-success";
        githubIcon.style.filter = "brightness(0) saturate(100%) invert(64%) sepia(62%) saturate(558%) hue-rotate(93deg) brightness(91%) contrast(92%)";
        title.innerText = "Anmeldung erfolgreich";
        message.innerText =
            "Danke für die Anmeldung. Sie erhalten ab sofort Updates zu meinen GitHub-Projekten.";
        break;

    case "already-confirmed":
        icon.innerText = "✓";
        icon.className = "status-icon status-warning";
        githubIcon.style.filter = "brightness(0) saturate(100%) invert(73%) sepia(78%) saturate(773%) hue-rotate(347deg) brightness(99%) contrast(95%)";
        title.innerText = "Bereits bestätigt";
        message.innerText =
            "Diese Email-Adresse wurde bereits bestätigt.";
        break;

    case "unsubscribed":
        icon.innerText = "✓";
        icon.className = "status-icon status-success";
        githubIcon.style.filter = "brightness(0) saturate(100%) invert(64%) sepia(62%) saturate(558%) hue-rotate(93deg) brightness(91%) contrast(92%)";
        title.innerText = "Abmeldung erfolgreich";
        message.innerText =
            "Sie wurden erfolgreich vom Newsletter abgemeldet.";
        break;

    case "error":
        icon.innerText = "✕";
        icon.className = "status-icon status-error";
        githubIcon.style.filter = "brightness(0) saturate(100%) invert(43%) sepia(95%) saturate(1426%) hue-rotate(332deg) brightness(95%) contrast(95%)";
        title.innerText = "Fehler";
        message.innerText =
            "Der Link ist ungültig oder abgelaufen.";
        break;

    default:
        icon.innerText = "?";
        icon.className = "status-icon status-warning";

        title.innerText = "Status";
        message.innerText = "Unbekannter Status.";
        break;
}

// close-Button
document
    .getElementById("closeButton")
    .addEventListener("click", () => {

        window.close();
});