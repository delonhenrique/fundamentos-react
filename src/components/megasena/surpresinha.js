
function gerarNumertoNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
    return array.includes(aleatorio) ?
        gerarNumertoNaoContido(min, max, array) :
        aleatorio
}

function gerarNumeros(quantidade) {
    const numeros = Array(quantidade)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumertoNaoContido(1, 60, nums)
            console.log([ ...nums, novoNumero ])
            return [ ...nums, novoNumero ]}, [])
        .sort((n1, n2) => (n1 - n2))

    return numeros
}

console.log(gerarNumeros(6))