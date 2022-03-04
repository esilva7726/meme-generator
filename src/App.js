import { useState } from 'react';
import html2canvas from 'html2canvas';

import './App.css';

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("fire");

  const onChangeLinea1 = evento => {
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = evento => {
    setLinea2(evento.target.value);
  }

  const onChangeImagen = evento => {
    setImagen(evento.target.value);
  }

  const onClickExportar = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />
      
      <input onChange={onChangeLinea1} type="text" placeholder="Línea 1"></input> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Línea 2"></input> <br />

      <button onClick={onClickExportar}>Exportar</button>

      <div id="meme" className="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
