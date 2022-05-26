import React from "react";

const Aleatorio = (props) => { 
    // const min = props.min
    // const max = props.max
    const { min, max } = props //Atribuição via desestruturação (destructuring assignment)
    const aleatorio = parseInt(Math.random() * (props.max - props.min) + props.min)

    return (
    <div>
        <h2>Valor Aleatório</h2>
        <p><strong>Valor mínimo: </strong>{min}</p>
        <p><strong>Valor máximo: </strong>{max}</p>
        <p><strong>Valor escolhido: </strong>{aleatorio}</p>
    </div>
    )
}

export default Aleatorio