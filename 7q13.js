var palavra = prompt("Digite uma palavra para verificar se é um palíndromo:")
var palindromo = true
for (var i = 0; i < Math.floor(palavra.length / 2); i++) { 
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        palindromo = false
        break;
    }
}
if (palindromo) { 
    console.log(palavra + " é um palíndromo")
} else {
    console.log(palavra + " não é um palíndromo")
}
