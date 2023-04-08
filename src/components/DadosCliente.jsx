import { Form, Container, Row, Col } from "react-bootstrap";

export function DadosPessoaisForm() {
  return (
    <Container>
      <Row className="mt-4 mb-2">
        <Col className="pe-5  pt-5">
          <h3>Dados pessoais</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-8">
          <Form>
            <Form.Group className="mb=3">
              <Form.Label className="mt-2">Nome completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome completo"
              />
              <Form.Label className="mt-2">Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
