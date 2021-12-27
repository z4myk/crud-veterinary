import React from "react";
import "../components/card.css";
export const Card = (props) => {
  return (
    <div>
      <h2 className="text-center my-4 animate__animated animate__fadeInRight">Turnos designados</h2>
      <hr className="text-primary"/>
      {props.consultas.map((item) => (
        <div key={item.id} className=" mb-2 d-flex justify-content-center animate__animated animate__fadeInRight">
          <div className="carta">
            <div className="fondo">
            <div className="circulo bg-dark text-center text-light">
              <span>
                #{item.id} <i class="fas fa-paw"></i>
              </span>
            </div>
            <h5 className="card-title text-center text-dark ">Nombre: <b className="text-danger">{item.mascota}</b></h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Dueño: {item.dueño}
            </h6>
            </div>
            <hr className="text-primary" />
            <p className="card-text text-center">
              <i class="fas fa-info-circle text-danger"></i> Información:{" "}
              {item.informacion}
            </p>
            <p className="card-text text-center">
              <i class="fas fa-calendar-alt text-danger"></i> Fecha:{" "}
              {item.fecha}
            </p>
            <p className="card-text text-center">
              <i class="fas fa-clock text-danger"></i> Hora: {item.hora}
            </p>
            <hr className="text-primary" />
            <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger"
              onClick={() => props.eliminarConsulta(item.id)}
            >
              Eliminar
            </button>
            <button 
            className="btn btn-warning"
            onClick={() => props.prepararConsulta(item)}
            >
            Editar
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
