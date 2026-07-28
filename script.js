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

    console.log(testo);

    document.getElementById("emailFinale").value = testo;
});
