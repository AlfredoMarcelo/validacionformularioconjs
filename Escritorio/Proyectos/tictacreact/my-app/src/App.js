import React, { useState } from "react";
import Juego from "./components/Juego";
import "./App.css";

const App = (_) => {
  const [condition, setCondition] = useState(true);

  const ton = () => {
    return setCondition(false);
  };

  return (
    <div className="container mt-5" id="contenedor">
      <div className="row text-center my-5">
        <div className="col-8 mx-auto mt-5 mb-1">
          <h1 className="text-white">Tic Tac Toe in React.js</h1>
        </div>
      </div>
      {condition ? (
        <div className="row" id="alfredo">
          <div className="recuadro col-8 mx-auto text-center mt-5">
            <h5 className="text-white mt-2">CHOOSE YOUR WEAPON</h5>
            <form className="mt-3">
              <input
                className="col-4 me-2"
                type="text"
                placeholder="Player 1 username"
              />
              <input
                className="col-4 ms-2"
                type="text"
                placeholder="Player 2 username"
              />
            </form>
          </div>
          <div className="recuadro col-8 mx-auto mb-1 d-flex justify-content-center">
            <form className="d-inline-flex  mt-3">
              <input
                className="boton"
                onClick={() => ton()}
                type="button"
                value="X"
              />
              <input
                className="boton"
                onClick={() => ton()}
                type="button"
                value="O"
              />
            </form>
          </div>
        </div>
      ) : (
        <Juego />
      )}
    </div>
  );
};

export default App;
