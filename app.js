// Event Listener für das Formular hinzufügen
document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden des Formulars

    // Geburtstagsgruß-Nachricht aus dem Textbereich erhalten
    const greetingMessage = document.getElementById('greetingMessage').value;

    // Geburtstagsgruß anzeigen
    displayGreeting(greetingMessage);
});

// Funktion zum Anzeigen des Geburtstagsgrußes
function displayGreeting(message) {
    const greetingDisplay = document.getElementById('greetingDisplay');
    greetingDisplay.innerHTML = `<p>${message}</p>`;
}
