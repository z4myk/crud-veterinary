import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import "animate.css";
import { EditForm } from "./components/EditForm";
import Swal from "sweetalert2";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Auth from "./components/Auth";

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
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El turno a sido creado con exito!",
      showConfirmButton: false,
      timer: 1200,
    });
    e.target.reset();
  };

  const eliminarConsulta = (id) => {
    let consultaFiltrada = consultas.filter((item) => item.id !== id);
    if (consultaFiltrada) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El turno a sido eliminado con exito!",
        showConfirmButton: false,
        timer: 1200,
      });
    }
    setConsultas(consultaFiltrada);
    console.log(id);
  };

  const prepararConsulta = (item) => {
    setEditing(true);
    setCurrentconsulta({
      mascota: item.mascota,
      dueño: item.dueño,
      informacion: item.informacion,
      fecha: item.fecha,
      hora: item.hora,
      id: item.id,
    });
  };

  const updateConsulta = (id, updateConsulta) => {
    const arrayEditado = consultas.map((item) =>
      item.id === id ? updateConsulta : item
    );
    if (updateConsulta) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El turno a sido editado con exito!",
        showConfirmButton: false,
        timer: 1200,
      });
    }
   
    setConsultas(arrayEditado);
    setEditing(false);
  };

  return (
    < >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
          path="/"
          element={<Auth />}
          />
          <Route
            path="/admin"
            element={
              <Form
                consulta={consulta}
                consultas={consultas}
                setConsulta={setConsulta}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                editing={editing}
                setEditing={setEditing}
              />
            }
          />
          <Route
            path="/turnos"
            element={
              <Card
                consultas={consultas}
                eliminarConsulta={eliminarConsulta}
                prepararConsulta={prepararConsulta}
              />
            }
          />
          <Route
            path="/admin/editar"
            element={
              <EditForm
                currentConsulta={currentConsulta}
                updateConsulta={updateConsulta}
                consultas={consultas}
                setConsultas={setConsultas}
              />
            }
          />
        </Routes>
        
        <Footer />
      </BrowserRouter>
      ,
      {/* <div className="row container">
        <div className="col-md-7 col-sm-12">
          {editing ? (
            <EditForm currentConsulta={currentConsulta} updateConsulta={updateConsulta} consultas={consultas} setConsultas={setConsultas} />
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
      </div>
        <div className="bg-dark p-3 mt-5">
        <div className="text-center  my-3 text-light "> Developed by Sebastián Mosquera ❤️</div>

        </div> */}
    </>
  );
}

export default App;
