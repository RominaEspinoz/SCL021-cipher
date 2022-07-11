import cipher from './cipher.js';

console.log(cipher);

window.addEventListener("load", ToCreate, true);

function ToCreate() {
    document.getElementById("messagetocode").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("Tocreate").addEventListener("click", function () {
        let texto = document.getElementById("messagetocode").value;
        let desplazamiento = document.getElementById("movement").value;
        document.getElementById("textarea").value = cipher.cifrar(texto, desplazamiento);
    }, true);
}

