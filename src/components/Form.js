import React from 'react'

export const Form = (props) => {
    return (
        <div>
            <h2 className="text-center my-4">Administrador pacientes veterinaria</h2>
          <hr />
          <form onSubmit={props.handleSubmit}>
            <label className="my-2">Nombre de mascota:</label>
            <input
              className="form-control w-100 border-primary"
              type="text"
              placeholder="nombre"
              name="mascota"
              onChange={props.handleChange}
            />
            <label className="my-2">Nombre de dueño:</label>
            <input
              className="form-control w-100 border-primary"
              type="text"
              placeholder="Nombre de dueño"
              name="dueño"
              onChange={props.handleChange}
            />
            <label className="my-2">Sintomas:</label>
            <input
              className="form-control w-100 border-primary"
              type="text"
              placeholder="informacion"
              name="informacion"
              onChange={props.handleChange}
            />
            <label className="my-2">Fecha:</label>
            <input 
            className="form-control w-100 border-primary"
            type="date"
            name="fecha"
            placeholder=""
            onChange={props.handleChange}
            />
            <label className="my-2">Hora:</label>
            <input 
            className="form-control w-100 border-primary"
            type="time"
            name="hora"
            placeholder="Hora"
            onChange={props.handleChange}
            />
            <label className="my-2">Numero:</label>
            <input
              className="form-control w-100 border-primary"
              type="number"
              placeholder="1"
              name="id"
              onChange={props.handleChange}
            />
            <button className="btn btn-primary w-100 my-2" type="submit">
              Enviar
            </button>
          </form>
        </div>
    )
}
