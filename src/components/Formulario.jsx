import { Form, Button } from "react-bootstrap";
const Formulario = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Juan Bautista" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Perez" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number" placeholder="12345678" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="juanperez@gmail.com" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
