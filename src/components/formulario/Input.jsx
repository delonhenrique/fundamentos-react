import React, { useState } from 'react'
import "./Input.css"

const Input = (props) => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

                <input type="text" value={valor} onChange={quandoMudar} />
                <input type="text" value={valor} readOnly /> {/* Componente somente leitura */}
                <input type="text" value={undefined} /> {/* Uncontrolled Component */}
            </div>
        </div>
    )
}

export default Input