import { useState } from "react";
import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    //arregloTareas.
    //arregloTareas.push() no puedo usarlo en un state. al push
    setArregloTareas([...arregloTareas, tarea]);
    //limpiar el input
    setTarea("");
  };
  const borrarTarea = (nombre)=>{
let arregloModificado = arregloTareas.filter((item)=> item !== nombre);
//actualizar el state
setArregloTareas(arregloModificado);  

}

  return (
    <>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit" className="mx-2">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea propsArregloTareas={arregloTareas} propsBorrarTarea={borrarTarea} ></ListaTarea>
    </>
  );
};

export default FormularioTarea;
