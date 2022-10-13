import FormularioTarea from "./components/FormularioTarea";
//importamos la hoja de estilo
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Container className="my-5">
      <h1 className="display-4">Lista tareas</h1>
      <hr />

      {/* invocamos al formulario */}
      <FormularioTarea></FormularioTarea>
      </Container>
    </>
  );
}

export default App;
