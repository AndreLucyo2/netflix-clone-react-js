import React from "react";
import './movieRow.css'

//recebe as prop. titulo e o array de itens
export default ({title, items}) => {

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}