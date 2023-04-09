import { Container, Row, Col, Form } from "react-bootstrap";

export function Endereco() {
  return (
    <Container>
      <Row className="mt-4 mb-2">
        <Col className="pe-5  pt-5">
          <h3>Endereço</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-8">
          <Form>
            <Form.Group className="mb=3">
              <Form.Label className="mt-2">Logradouro</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome da rua" />
              <Form.Label className="mt-2">Número</Form.Label>
              <Form.Control type="number" placeholder="Número da casa" />
              <Form.Label className="mt-2">Bairro</Form.Label>
              <Form.Control type="text" placeholder="Digite o bairro" />
              <Form.Label className="mt-2">Complemento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: n° do apto / cor da casa/ ref. próxima"
              />
              <Form.Label className="mt-2">Cidade</Form.Label>
              <Form.Control type="text" placeholder="Digite a cidade" />
              <Form.Label className="mt-2">CEP</Form.Label>
              <Form.Control type="number" placeholder="Seu CEP" />
              <Form.Label className="mt-2">Estado</Form.Label>
              <Form.Control type="text" placeholder="Digite o estado" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
