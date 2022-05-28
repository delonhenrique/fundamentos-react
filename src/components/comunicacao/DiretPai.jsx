import React from "react";
import DiretaFilho from "./DiretFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho nome="Luiz" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={17} nerd={false}></DiretaFilho>
        </div>
    )
}

export default DiretaPai