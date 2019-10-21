import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormPolaczenie from './FormPolaczenie';

class MyDBs extends Component {
  constructor() {
    super();
    this.state = {
      pokazPolacz: false,
    }
  }

  handleDodajPolaczenie = () => {
    this.setState({pokazPolacz: true,})
  }

  handleUkryjPolacz = () => {
    this.setState({pokazPolacz: false,})
  }

  handleZatwierdz = event => {
    event.preventDefault();

    const data = new FormData(event.target);    

console.log(data.get('qwe'));
    fetch("http://localhost:5000/my-dbs/polacz/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },      
      body: data
    });
  };  

  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={this.handleZatwierdz}>
            <Form.Group as={Row} controlId="polaczenie">
              <Form.Label column sm="2">Połączenie</Form.Label>
              <Col sm="9">
                <Form.Control as="select" name="qwe">
                  <option>localhost</option>
                </Form.Control>
              </Col>
              <Col sm="1">
                <Button onClick={this.handleDodajPolaczenie}>+</Button>
              </Col>
            </Form.Group>       
            {this.state.pokazPolacz && <FormPolaczenie ukryjPolacz={this.handleUkryjPolacz} />}
            <Form.Group as={Row} controlId="">
              <Col>
                <Button type="submit">Połącz</Button>  
              </Col>
            </Form.Group>           
          </Form>
        </Col>
      </Row>
    )
  }
}

export default MyDBs;