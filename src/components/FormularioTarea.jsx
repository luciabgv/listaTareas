import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

const FormularioTarea = () => {
    return (
        <Form className='my-5'>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Ingresa una tarea" />
        <Button variant="primary" type="submit" className='mx-2'>
          Enviar
        </Button>
        </Form.Group>

      </Form>
    );
};

export default FormularioTarea;