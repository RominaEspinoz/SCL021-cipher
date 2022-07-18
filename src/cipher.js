const cipher = { 
  encode: function (desplazamiento, texto){
    if (!Number.isInteger(desplazamiento) || texto==="" || desplazamiento==="null" || texto.length===0 || desplazamiento===0) {
      throw new TypeError("Wrong arguments type");
    }
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    desplazamiento = (desplazamiento %26 + 26)%26;

    if (texto){
      for(let i = 0; i < texto.length; i++){ //Partimos con i = 0, el bucle se va a ejecutar mientras i sea menor a la longitud de texto(ya que parte de la posicion 0), en cada ciclo del bucle se va a incrementar i en 1
        if(letras.indexOf(texto[i]) != -1){//Si encuentra las letras de texto en el array de letras (que indexOfsea distinto de -1)
          let posicion = ((letras.indexOf(texto[i])+ desplazamiento)%26);//Crea variable posicion la cual será la posición de la letra de texto dentro del array de letras más el desplazamiento
          resultado += letras[posicion];// concatena resultado con la nueva letra segun el desplazamiento indicado en la variable posicion
        }
        else
        resultado += texto[i];
      }
    }
    return resultado;
  },

  decode: function (desplazamiento,texto){
    if (!Number.isInteger(desplazamiento) || texto==="" || desplazamiento==="null" || texto.length===0 || desplazamiento===0) {
      throw new TypeError("Wrong arguments type");
    }

    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    desplazamiento = (desplazamiento %26 - 26)%26;

    if (texto){
      for(let i = 0; i < texto.length; i++){
        if(letras.indexOf(texto[i]) != -1){
          let posicion = ((letras.indexOf(texto[i])- desplazamiento)%26);
          resultado += letras[posicion];
        }
        else
        resultado += texto[i];
      }
    }
    return resultado;
  }
  }
export default cipher;

