const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        preview.src = e.target.result;
        preview.style.display = "block";

    }

    reader.readAsDataURL(file);

});

document.getElementById("privato").onclick = function(){

    document.getElementById("emailFinale").value =
`Gentile Cliente,

Grazie per aver contattato Minor Hotels.

Qui verrà inserita automaticamente la proposta.

Cordiali Saluti`;

}

document.getElementById("azienda").onclick = function(){

    document.getElementById("emailFinale").value =
`Gentile Azienda,

Grazie per la richiesta.

Qui verrà inserita automaticamente la proposta.

Cordiali Saluti`;

}

document.getElementById("agenzia").onclick = function(){

    document.getElementById("emailFinale").value =
`Gentile Agenzia,

Grazie per la richiesta.

Qui verrà inserita automaticamente la proposta.

Cordiali Saluti`;

}

document.getElementById("copia").onclick=function(){

navigator.clipboard.writeText(document.getElementById("emailFinale").value);

alert("Email copiata!");

}
