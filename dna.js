/*Instrucciones
2. Write a function that takes in a DNA string (for example 'CTAGGGTA')
 and returns a new string with any non-canonical DNA base values removed.
  Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. 
  Make the function case sensitive - meaning 'c' (lower case) should be 
  removed from the string, but 'C' (upper case) is a good value and should remain. 
  If the DNA string is empty, just return an empty string.
*/

function DNAString (dnaPalabra){
    let palabraNueva = "";
    for (let i = 0; i < dnaPalabra.length; i++){
        if (dnaPalabra[i] === "C" || dnaPalabra[i] === "T" || dnaPalabra[i] === "A" || dnaPalabra[i] === "G"){
            palabraNueva += dnaPalabra[i];
        }
    }
    return palabraNueva;
    /*
    opcion 2
    let dna = dnaPalabra.split("");
    let dnaFiltrado = dna.filter(function (letra){
        return letra === "C" || letra === "T" || letra === "A" || letra === "G";
    });
    return dnaFiltrado.join("");
    */
}

module.exports = DNAString;