import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";

function App() {
  const [consulta, setConsulta] = useState({
    mascota: "",
    dueño: "",
    tipo:"",
    informacion: "",
    fecha: "",
    hora: "",
    id: "",
  });

  const [consultas, setConsultas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsulta({ ...consulta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConsultas([...consultas, consulta]);
    setConsulta({
      mascota: "",
      dueño: "",
      tipo: "",
      informacion: "",
      fecha: "",
      hora: "",
      id: "",
    });
    e.target.reset()
  };

  const eliminarConsulta = (id) => {
    let consultaFiltrada = consultas.filter(item => item.id !== id);
    setConsultas(consultaFiltrada)
    console.log(id)
  };

  return (
    <>
      <div className="row container">
        <div className="col-md-7 col-sm-12">
          <Form 
          consulta={consulta}
          setConsulta={setConsulta}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          />
        </div>
        <div className="col-md-5 col-sm-12">
        <Card
          consultas={consultas}
          eliminarConsulta={eliminarConsulta}
          />
        </div>
        <div className="text-center">
         
        </div>
       
      </div>
    </>
  );
}

export default App;
