import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';


const ListaTarea = ({propsArregloTareas, propsBorrarTarea}) => {
    
    return (
        <ListGroup>
          {
            propsArregloTareas.map((tarea,posicion)=> <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={propsBorrarTarea} ></ItemTarea> )

          }
    </ListGroup>
    );
};

export default ListaTarea;