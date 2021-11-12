import React from 'react';


const style ={
    backgroundColor: 'rgb(78, 70, 70)',
    border: '2px solid grey',
    fontSize: '80px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    color: 'grey'

};



const Cuadrado = ({ value , onClick }) => (
    <button  style={style} onClick={onClick}>
        {value}
    </button>
)

export default Cuadrado