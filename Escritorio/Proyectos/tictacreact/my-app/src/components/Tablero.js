import React from "react";
import Cuadrado from './Cuadrado';

const style = {
    border: '10px solid 78,70,70',
    borderRadius: '10px',
    width: '500px',
    height: '500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'

};





const Tablero = ({ cuadrados, onClick }) => (
<div style={style} >
    {cuadrados.map((cuadrado, i)=> (
        
        <Cuadrado key={i} value={cuadrado} onClick={()=> onClick (i)}/>
        
    ))}
    
</div>
)
export default Tablero 