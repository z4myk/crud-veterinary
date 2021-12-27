import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import "animate.css";
import { EditForm } from "./components/EditForm";
function App() {
  const [consulta, setConsulta] = useState({
    mascota: "",
    dueño: "",
    informacion: "",
    fecha: "",
    hora: "",
    id: "",
  });

  const [consultas, setConsultas] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentConsulta, setCurrentconsulta] = useState({
    mascota: "",
    dueño: "",
    informacion: "",
    fecha: "",
    hora: "",
    id: "",
  });

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
      informacion: "",
      fecha: "",
      hora: "",
      id: "",
    });
    e.target.reset();
  };

  const eliminarConsulta = (id) => {
    let consultaFiltrada = consultas.filter((item) => item.id !== id);
    setConsultas(consultaFiltrada);
    console.log(id);
  };

  const prepararConsulta = (consulta) => {
    setEditing(true);
    setCurrentconsulta({
      mascota: consulta.mascota,
      dueño: consulta.dueño,
      informacion: consulta.informacion,
      fecha: consulta.fecha,
      hora: consulta.hora,
      id: consulta.id
    });
  };

  const updateConsulta = (id, updateConsulta) => {
    setEditing(false)
    setConsultas(consultas.map((item) => (item.id === id ? updateConsulta : item)))
  }

  return (
    <>
      <div className="row container">
        <div className="col-md-7 col-sm-12">
          {editing ? (
            <EditForm currentConsulta={currentConsulta} updateConsulta={updateConsulta} />
          ) : (
            <Form
              consulta={consulta}
              setConsulta={setConsulta}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editing={editing}
              setEditing={setEditing}
            />
          )}
        </div>
        <div className="col-md-5 col-sm-12">
          <Card
            consultas={consultas}
            eliminarConsulta={eliminarConsulta}
            prepararConsulta={prepararConsulta}
          />
        </div>
        <div className="text-center"></div>
      </div>
    </>
  );
}

export default App;
