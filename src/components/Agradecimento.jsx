import { Container, Form } from "react-bootstrap";

export function Agradecimento() {
  return (
    <Container>
      <h3>Obrigado pelo seu cadastro em nossa plataforma!</h3>
      <Form>
        <Form.Select>
          <option>Selecione</option>
          <option>Pelo LinkedIn</option>
          <option>Pelo Instagram</option>
          <option>Por Indicação</option>
        </Form.Select>
      </Form>
    </Container>
  );
}
