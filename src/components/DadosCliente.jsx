import { Form, Container, Row, Col } from "react-bootstrap";

export function DadosPessoaisForm() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 2 }} className="col-md-8">
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
