import { Container, Form, Col, Row } from "react-bootstrap";

export function Agradecimento() {
  return (
    <Container fluid="md" className="d-flex flex-column justify-content-center">
      <h3 className="text-center">
        Obrigado pelo seu cadastro em nossa plataforma!
      </h3>
      <Form>
        <Row>
          <Col md={{ span: 9, offset: 2 }} className="mt-4 mb-4">
            <p>Conte-nos: onde nos conheceu?</p>
            <Form.Select>
              <option defaultValue>Selecione</option>
              <option>Pelo LinkedIn</option>
              <option>Pelo Instagram</option>
              <option>Pelo Site</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
