import React from 'react'
import "../components/card.css"
export const Card = (props) => {
    return (
        <div>
          <h2 className="text-center my-4">Turnos designados</h2>
          <hr />
          {props.consultas.map((item) => (
            <div key={item.id} className=" mb-2 d-flex justify-content-center ">
              <div className="carta">
                <div className="circulo bg-primary text-center text-light">
                <span>#{item.id}</span>
                    </div>  
                  <h5 className="card-title text-center">
                    Nombre: {item.mascota}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    Dueño: {item.dueño}
                  </h6>
                  <hr className="text-primary"/>
                  <p className="card-text text-center">
                    Información: {item.informacion}
                  </p>
                  <p className="card-text text-center">
                    Fecha: {item.fecha}
                  </p>
                  <p className="card-text text-center">
                    Hora: {item.hora}
                  </p>
                  <hr className="text-primary" />
                  <button className="btn btn-danger" onClick={(id) => props.eliminarConsulta(item.id)}>
                    Eliminar
                  </button>
              </div>
            </div>
          ))}

        </div>
    )
}
