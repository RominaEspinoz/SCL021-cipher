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
        let desplazamiento = document.getElementById("movement").value;
        document.getElementById("textarea").value = cipher.cifrar(texto, desplazamiento);// la funcion indica que el valor de textarea sera lo ingresado en las variables luego de haber pasando por el cifrado 
    }, true);
}
//En la misma html(incode.html)
function ToDecode() {
    document.getElementById("Todecode").addEventListener("click", function () {//Cuando escucha que se hace click en el boton DESCIFRAR(Id "Todecode")
        let texto = document.getElementById("textarea").value;// Crea dos variables texto y desplazamiento, ambas vienen del valor ingresado en  decode.html
        let desplazamiento = document.getElementById("movement").value;
        document.getElementById("DecodedMessage").value = cipher.descifrar(texto, desplazamiento);// la funcion indica que el valor de textarea sera lo ingresado en las variables luego de haber pasando por el cifrado 
    }, true);
}

/* Para poner en otra html(decode.html)
 function Todecode(){
    document.getElementById("Todecode").addEventListener("click", function(){
        document.getElementById("mensagetodecode").value = document.getElementById("messagetocode");
        let texto = document.getElementById("mensagetodecode").value;
        let desplazamiento = document.getElementById("movement").value;
        document.getElementById("DecodedMessage").value = cipher.descifrar(texto, desplazamiento);
    }, true);
 } */