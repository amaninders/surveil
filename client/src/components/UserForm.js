import { Form, Row, Col, Button } from "react-bootstrap";
import "./UserForm.css";

export default function UserForm() {
  return (
    <Form className="add-user">
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Select Team</Form.Label>
          <Form.Select className="me-sm-2">
            <option value="0">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Label>Select</Form.Label>
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Manager" />
          </Col>
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Admin" />
          </Col>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Button type="submit">Add user</Button>
        </Form.Group>
      </Row>
    </Form>
  );
}
