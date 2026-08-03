[12:34, 3/8/2026] G C: // ===============================
// EMAIL HELPER SAP - MODULO 1
// CTRL+V + Anteprima Screenshot
// ===============================

let immagineSAP = null;

const pasteArea = document.getElementById("pasteArea");
const preview = document.getElementById("preview");
const risultato = document.getElementById("risultato");

// Intercetta CTRL+V
document.addEventListener("paste", async (event) => {

    const items = event.clipboardData.items;

    for (const item of items) {

        if (item.type.indexOf("image") !== -1) {

            const file = item.getAsFile();

            immagineSAP = file;

            const reader = new FileReader();

            reader.onload = function(e){

                preview.src = e.target.result;
                preview.style.display = "block";

                risultato.innerHTML =
                "✅ Screenshot incollato correttamente.<br><br>Premi <b>📷 Leggi Screenshot SAP</b>";

            };

            reader.readAsDataURL(file);

            return;

        }

    }

    risultato.innerHTML =
    "❌ Negli appunti non è stata trovata nessuna immagine.";

});

// Pulsante Leggi Screenshot
document.getElementById("leggiSap").addEventListener("click", () => {

    if(!immagineSAP){

        alert("Prima incolla uno screenshot con CTRL + V");

        return;

    }

    risultato.innerHTML =
    "⏳ Screenshot ricevuto. Il modulo OCR verrà aggiunto nel prossimo passaggio.";

});

// Pulsante Copia
document.getElementById("copiaEmail").addEventListener("click",()=>{

    const testo=document.getElementById("emailFinale");

    testo.select();

    document.execCommand("copy");

    alert("Email copiata!");

});
[12:42, 3/8/2026] G C: // ===============================
// EMAIL HELPER SAP
// ===============================

let immagineSAP = null;

const pasteArea = document.getElementById("pasteArea");
const preview = document.getElementById("preview");
const risultato = document.getElementById("risultato");
const emailFinale = document.getElementById("emailFinale");

// Incolla screenshot con CTRL+V
document.addEventListener("paste", function (e) {

    const items = e.clipboardData.items;

    for (let item of items) {

        if (item.type.indexOf("image") !== -1) {

            immagineSAP = item.getAsFile();

            const reader = new FileReader();

            reader.onload = function (event) {

                preview.src = event.target.result;
                preview.style.display = "block";

                risultato.innerHTML =
                    "✅ Screenshot ricevuto.<br>Premi <b>Leggi Screenshot SAP</b>";

            };

            reader.readAsDataURL(immagineSAP);

        }

    }

});

async function leggiSAP(file) {

    risultato.innerHTML = "⏳ Lettura screenshot...";

    const datiOCR = await Tesseract.recognize(
        file,
        "ita+eng"
    );

    const testo = datiOCR.data.text;

    analizzaSAP(testo);

}
