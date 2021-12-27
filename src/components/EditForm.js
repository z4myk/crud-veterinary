import React, {useState} from "react";

export const EditForm = (props) => {

  const [consulta, setConsulta] = useState(props.currentConsulta)
  console.log(props.currentConsulta)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsulta({ ...consulta, [name]: value });
  };


  return (
    <>
      <div className="animate__animated animate__fadeInLeft">
        <h2 className="text-center my-4">Editar paciente</h2>
        <hr className="text-primary" />
        <form onSubmit={props.handleSubmit}>
          <label className="my-2">Nombre de mascota:</label>
          <input
            className="form-control w-100 border-primary"
            type="text"
            placeholder="nombre"
            name="mascota"
            value={consulta.mascota}
            onChange={handleChange}
          />
          <label className="my-2">Nombre de dueño:</label>
          <input
            className="form-control w-100 border-primary"
            type="text"
            placeholder="Nombre de dueño"
            name="dueño"
            value={consulta.dueño}
            onChange={handleChange}
          />
          <label className="my-2">Sintomas:</label>
          <input
            className="form-control w-100 border-primary"
            type="text"
            placeholder="informacion"
            name="informacion"
            value={consulta.informacion}
            onChange={handleChange}
          />
          <label className="my-2">Fecha:</label>
          <input
            className="form-control w-100 border-primary"
            type="date"
            name="fecha"
            placeholder=""
            value={consulta.fecha}
            onChange={handleChange}
          />
          <label className="my-2">Hora:</label>
          <input
            className="form-control w-100 border-primary"
            type="time"
            name="hora"
            placeholder="Hora"
            value={consulta.hora}
            onChange={handleChange}
          />
          <label className="my-2">Numero:</label>
          <input
            className="form-control w-100 border-primary"
            type="number"
            placeholder="1"
            name="id"
            value={consulta.id}
            onChange={handleChange}
          />
          <button className="btn btn-primary w-100 my-2" type="submit" onClick={props.updateConsulta} >
            Editar  
          </button>
        </form>
      </div>
    </>
  );
};
