import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'

const TabelaProdutos = (props) => {
    const produtosJSX = produtos.map( (produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>               
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <th>Id</th>
                <th>Produto</th>
                <th>Valor</th>
                {produtosJSX}
            </table>
        </div>
    )
}

export default TabelaProdutos