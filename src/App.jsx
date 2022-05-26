import React from "react";

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'

import './App.css'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React! (Arrow!)</h1>

            <div className="Cards">
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="#02 - Componente com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do aluno:"
                        aluno="Delon"
                        nota={9.5} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#04 - Número aleatório" color="#FA6900">
                    <Aleatorio
                        max={60}
                        min={1} />
                </Card>
            </div>
        </div>
    )
}