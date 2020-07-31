import React from 'react';

function Categoria(props) {
    return (
        <div className="categoria">
            <img src={props.img}/>
            <p>{props.nome}</p>
        </div>
    );
};

export default Categoria;