import { useState, useEffect } from "react";
import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  //buscar las tareas del localstorage si es q existe
  const tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
  //zonadonde agregamos la mayoria de logica
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);

  //ciclo de vida
  useEffect(() => {
    //console.log('prueba del ciclo de vida');
    //guardar el arreglo de las tareas
    localStorage.setItem("listaTareas", JSON.stringify(arregloTareas));
  }, [arregloTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //arregloTareas.
    //arregloTareas.push() no puedo usarlo en un state. al push
    setArregloTareas([...arregloTareas, tarea]);
    //limpiar el input
    setTarea("");
  };
  const borrarTarea = (nombre) => {
    let arregloModificado = arregloTareas.filter((item) => item !== nombre);
    //actualizar el state
    setArregloTareas(arregloModificado);
  };

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
      <ListaTarea
        propsArregloTareas={arregloTareas}
        propsBorrarTarea={borrarTarea}
      ></ListaTarea>
    </>
  );
};

export default FormularioTarea;
