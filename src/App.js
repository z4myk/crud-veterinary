import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [consulta, setConsulta] = useState({
    nombre: "",
    apellido: "",
    informacion: "",
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
      nombre: "",
      apellido: "",
      informacion: "",
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
      <div className=" row container">
        <div className="col-md-6">
          <h2 className="text-center my-4">Formulario de turnos</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <label className="my-2">Nombre:</label>
            <input
              className="form-control w-75"
              type="text"
              placeholder="nombre"
              name="nombre"
              onChange={handleChange}
            />
            <label className="my-2">Apellido:</label>
            <input
              className="form-control w-75"
              type="text"
              placeholder="apellido"
              name="apellido"
              onChange={handleChange}
            />
            <label className="my-2">Datos del paciente:</label>
            <input
              className="form-control w-75"
              type="text"
              placeholder="informacion"
              name="informacion"
              onChange={handleChange}
            />
            <label className="my-2">Numero:</label>
            <input
              className="form-control w-75"
              type="number"
              placeholder="1"
              name="id"
              onChange={handleChange}
            />
            <button className="btn btn-success w-75 my-2" type="submit">
              Enviar
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2 className="text-center my-4">Turnos</h2>
          <hr />
          {consultas.map((item) => (
            <div key={item.id} className="mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Nombre: {item.nombre}
                  </h5>
                  <hr />
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    Apellido: {item.apellido}
                  </h6>
                  <p className="card-text text-center">
                    Información: {item.informacion}
                  </p>
                  <button className="btn btn-danger" onClick={(id) => eliminarConsulta(item.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
