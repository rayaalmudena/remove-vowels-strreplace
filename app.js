function removeVowels(frase) {
    // Implementar código aquí
    let pattern = /[aeiou]*/i;
    let noVocals = frase.replaceAll(pattern, "");

    // Obligatorio: utilizar una expresión regular y el método de string "replace": https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    let resultado = "IMPLEMENTAME!!";

    return noVocals;
}
console.log(removeVowels('codewars')); // --> cdwrs
console.log(removeVowels('holaholaaa')); // -->hlhl
