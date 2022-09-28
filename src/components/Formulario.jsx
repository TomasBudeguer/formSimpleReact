import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Formulario = () => {
  const emailRegExp = new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  );
  const dniRegExp = new RegExp(/^[\d]{7,8}$/);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()=== '' || apellido.trim()=== '' || !dniRegExp.test(dni) || !emailRegExp.test(email)) {
      alert("Corregir los datos");
      return;
    } else {
      setNombre("");
      setApellido("");
      setDni("")
      setEmail("");
      alert("Datos enviados");
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Juan Bautista"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Perez"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          type="number"
          placeholder="12345678"
          onChange={(e) => setDni(e.target.value)}
          value={dni}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="juanperez@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
