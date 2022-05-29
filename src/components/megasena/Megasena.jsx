import React, { useState } from "react";

import "./Megasena.css"

const Megasena = (props) => {
    
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
    
    const [qtde, setQtde] = useState(props.quantidade || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Megasena">
            <h2>Megasena Surpresinha</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de número no jogo:</label>
                <input
                    min="6"
                    max="15" 
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}

export default Megasena