const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", async function () {

    const file = this.files[0];

    if (!file) return;

    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";

    document.getElementById("emailFinale").value =
        "⏳ Sto leggendo lo screenshot SAP...";

    const result = await Tesseract.recognize(
        file,
        "eng+ita"
    );

    const testo = result.data.text;
// Estrazione dati SAP

let hotel = "";
let checkin = "";
let checkout = "";
let adulti = "";
let camere = [];
let prezzi = [];
let cancellazione = "";

const date = testo.match(/\d{2}\.\d{2}\.\d{2}/g);

if (date && date.length >= 2) {
    checkin = date[0];
    checkout = date[1];
}

if (testo.includes("2AD") || testo.includes("2 AD")) {
    adulti = "2 Adulti";
}

const righe = testo.split("\n");

righe.forEach(riga => {

    if (riga.includes("NH")) {
        hotel = riga.trim();
    }

    if (riga.includes("Standard")) {
        camere.push(riga.trim());
    }

    if (riga.includes("Superior")) {
        camere.push(riga.trim());
    }

    if (riga.includes("EUR")) {
        prezzi.push(riga.trim());
    }

    if (riga.includes("24")) {
        cancellazione = riga.trim();
    }

});

document.getElementById("emailFinale").value =
`HOTEL:
${hotel}

CHECK IN:
${checkin}

CHECK OUT:
${checkout}

OSPITI:
${adulti}

CAMERE:
${camere.join("\n")}

PREZZI:
${prezzi.join("\n")}

CANCELLAZIONE:
${cancellazione}`;
    console.log(testo);

    document.getElementById("emailFinale").value = testo;
});
