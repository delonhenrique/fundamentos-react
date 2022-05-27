import React from "react";
import If, { Else } from "./If";

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If teste={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{usuario.nome}!</strong>
            </If>

            <If teste={!usuario || !usuario.nome}>
                Seja bem vindo(a) <strong>Colega!</strong>
            </If> */}

            <If teste={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{usuario.nome}!</strong>
                <Else>
                    Seja bem vindo(a) <strong>Colega!</strong>
                </Else>
            </If>
        </div>
    )
}

export default UsuarioInfo