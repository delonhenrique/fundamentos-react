import React from "react";

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/loop/ListaAlunos";
import TabelaProdutos from "./components/loop/TabelaProdutos";

import './App.css'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React!</h1>

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

                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProdutos />
                </Card>
            </div>
        </div>
    )
}