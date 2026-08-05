// ===============================
// EMAIL HELPER SAP - PARTE 1
// ===============================

let screenshotFile = null;

const preview = document.getElementById("preview");
const risultato = document.getElementById("risultato");
const bottone = document.getElementById("leggiSap");

document.addEventListener("paste", (e) => {

    const items = e.clipboardData.items;

    for (const item of items) {

        if (item.type.startsWith("image/")) {

            screenshotFile = item.getAsFile();

            const reader = new FileReader();

            reader.onload = function(ev){

                preview.src = ev.target.result;
                preview.style.display = "block";

                risultato.innerHTML =
                "✅ Screenshot caricato correttamente.<br><br>Clicca <b>Leggi Screenshot SAP</b> per continuare.";

            };

            reader.readAsDataURL(screenshotFile);

            break;
        }
    }

});

bottone.addEventListener("click", () => {

    if(!screenshotFile){

        risultato.innerHTML =
        "❌ Incolla prima uno screenshot SAP.";

        return;
    }

    risultato.innerHTML =
    "⏳ Analisi screenshot in preparazione...";

});
