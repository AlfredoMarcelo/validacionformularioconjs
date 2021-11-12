import React, { useState } from "react";
import { elGanador } from "../Ganador";
import Tablero from "./Tablero";


const styles = {
  width: "500px",
  margin: "20px auto",
};

const Juego = () => {
  const [tablero, setTablero] = useState(Array(9).fill(null));

  const [siguienteX, setSiguienteX] = useState(true);

  const ganador = elGanador(tablero);

  const darClick = (i) => {
    const copiaTablero = [...tablero];

    if (ganador || copiaTablero[i]) return;

    copiaTablero[i] = siguienteX ? "X" : "O";

    setTablero(copiaTablero);
    setSiguienteX(!siguienteX);
  };

  const movimientoR = () => (
    <div className="d-block ">
    <button className="btn btn-light btn-sm" onClick={() => setTablero(Array(9).fill(null))}>
      Comenzar juego
    </button>
    </div>
  );


  return (
    <>
      <div className="d-block justify-content-center text-center" style={styles}>
        <div className={"fs-1" + (ganador ? " text-success": " text-white")}>
          {ganador
            ? 'Ganador: ' + ganador
            : "Siguiente  jugador: " + (siguienteX ? "X" : "O")}
        </div>
        {movimientoR()}
      </div>
            <Tablero  cuadrados={tablero} onClick={darClick} />
    </>
  );
};

export default Juego;
