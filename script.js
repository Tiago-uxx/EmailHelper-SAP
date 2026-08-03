// =====================================
// EMAIL HELPER SAP - PARTE 1
// CTRL+V + Anteprima
// =====================================

let screenshotFile = null;

const pasteArea = document.getElementById("pasteArea");
const preview = document.getElementById("preview");
const risultato = document.getElementById("risultato");

document.addEventListener("paste", (e) => {

    const items = e.clipboardData.items;

    for (const item of items) {

        if (item.type.startsWith("image/")) {

            screenshotFile = item.getAsFile();

            const reader = new FileReader();

            reader.onload = (ev) => {

                preview.src = ev.target.result;
                preview.style.display = "block";

                risultato.innerHTML =
                    "✅ Screenshot incollato correttamente.<br><br>Premi <b>📷 Leggi Screenshot SAP</b>";
                
