import cipher from './cipher.js';

console.log(cipher);

window.addEventListener("load", ToCreate, true);
window.addEventListener("load", ToDecode, true);

function ToCreate() {
    document.getElementById("messagetocode").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase();
    }, true); // Escucha el momento en que se escribe y transforma lo escrito en mayuscula
    document.getElementById("Tocreate").addEventListener("click", function () {//Cuando escucha que se hace click en el boton CREAR(id=ToCreate)
        let texto = document.getElementById("messagetocode").value;// Crea dos variables texto y desplazamiento, ambas vienen del valor ingresado en  incode.html
        let desplazamiento = parseInt(document.getElementById("movement").value);
        document.getElementById("textarea").value = cipher.encode(desplazamiento,texto);// la funcion indica que el valor de textarea sera lo ingresado en las variables luego de haber pasando por el cifrado 
    }, true);
}

function ToDecode() {
    document.getElementById("Todecode").addEventListener("click", function () {//Cuando escucha que se hace click en el boton DESCIFRAR(Id "Todecode")
        let texto = document.getElementById("textarea").value;// Crea dos variables texto y desplazamiento, ambas vienen del valor ingresado en  decode.html
        let desplazamiento = parseInt(document.getElementById("movement").value);
        document.getElementById("DecodedMessage").value = cipher.decode(desplazamiento,texto);// la funcion indica que el valor de textarea sera lo ingresado en las variables luego de haber pasando por el cifrado 
    }, true);
}
