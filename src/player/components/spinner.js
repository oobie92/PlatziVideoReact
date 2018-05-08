import React from 'react';
import './spinner.css';

function Spinner(props){
    if(!props.active) return null
    return (
        <div className="Spinner">
            <span>Cargando...</span>
        </div>

    )
}

// const Spinner = (props) => {
//     // if(!props.active) null
// (
//     <div className="Spinner">    ------ revisar!!!!!
//         <span>
//             Cargando...
//         </span>
//     </div>
// )}

export default Spinner;