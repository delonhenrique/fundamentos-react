import React from "react";

const IndireataFilho = (props) => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * 20 + 50 )
    const gerarNerd = () => Math.random() > 0.5
    
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick= {_ => cb('João', gerarIdade(), gerarNerd())}>
                Forneccer informações
            </button>
        </div>
    )
}

export default IndireataFilho