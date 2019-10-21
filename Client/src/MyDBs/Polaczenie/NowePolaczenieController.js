import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class FormPolaczenie extends Component {
  render() {
    return (
      <Row>
        <Col>
        <Form.Group as={Row}>
            <Form.Label column sm="2">
              Nazwa połączenia
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>        
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Host
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Port
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Uzytkownik
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Hasło
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Nazwa bazy
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="" className="justify-content-end">
            <Col sm="1">
              <Button variant="danger" onClick={this.props.ukryjPolacz}>Anuluj</Button>
            </Col>
            <Col sm="1">
              <Button onClick={this.props.pokazPolacz}>Zapisz</Button>  
            </Col>
          </Form.Group>           
        </Col>
      </Row>
    );
  }
}

export default FormPolaczenie;
