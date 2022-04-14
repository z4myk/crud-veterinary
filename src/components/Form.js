import React from "react";

export const Form = ({handleSubmit, handleChange}) => {




  return (
    <div className="animate__animated animate__fadeInLeft mb-4 w-50 container">
      <h2 className="text-center my-4">Administrador de pacientes para veterinaria</h2>
      <hr className="text-primary" />
      <form onSubmit={handleSubmit}>
        <label className="my-2">Nombre de mascota:</label>
        <input
          className="form-control w-100 border-primary"
          type="text"
          placeholder="nombre"
          name="mascota"
          onChange={handleChange}
          required
        />
        <label className="my-2">Nombre de dueño:</label>
        <input
          className="form-control w-100 border-primary"
          type="text"
          placeholder="Nombre de dueño"
          name="dueño"
          onChange={handleChange}
          required
        />
        <label className="my-2">Sintomas:</label>
        <input
          className="form-control w-100 border-primary"
          type="text"
          placeholder="informacion"
          name="informacion"
          onChange={handleChange}
          required
        />
        <label className="my-2">Fecha:</label>
        <input
          className="form-control w-100 border-primary"
          type="date"
          name="fecha"
          placeholder=""
          onChange={handleChange}
          required
        />
        <label className="my-2">Hora:</label>
        <input
          className="form-control w-100 border-primary"
          type="time"
          name="hora"
          placeholder="Hora"
          onChange={handleChange}
          required
        />
        <label className="my-2">Numero:</label>
        <input
          className="form-control w-100 border-primary"
          type="number"
          placeholder="1"
          name="id"
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100 my-2" type="submit">
          Enviar
        </button>
        
      </form>
    </div>
  );
};
