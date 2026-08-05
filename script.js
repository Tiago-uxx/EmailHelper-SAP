// ==========================================
// EMAIL HELPER SAP 2.0
// PARTE 1 - INCOLLA SCREENSHOT + ANTEPRIMA
// ==========================================

let screenshotFile = null;

document.addEventListener("DOMContentLoaded", function () {

    const pasteArea = document.getElementById("pasteArea");
    const preview = document.getElementById("preview");
    const risultato = document.getElementById("risultato");

    document.addEventListener("paste", function (event) {

        const items = event.clipboardData.items;

        for (const item of items) {

            if (item.type.startsWith("image/")) {

                const file = item.getAsFile();

                if (!file) {
                    continue;
                }

                screenshotFile = file;

                const reader = new FileReader();

                reader.onload = function (e) {

                    if (preview) {
                        preview.src = e.target.result;
                        preview.style.display = "block";
                    }

                    if (risultato) {
                        risultato.innerHTML =
                            "✅ Screenshot SAP ricevuto correttamente.<br><br>" +
                            "Ora premi <b>Leggi Screenshot SAP</b>.";
                    }

                    if (pasteArea) {
                        pasteArea.innerHTML =
                            "✅ Screenshot caricato";
                    }
                };

                reader.readAsDataURL(file);

                event.preventDefault();

                break;
            }
        }
    });

});
