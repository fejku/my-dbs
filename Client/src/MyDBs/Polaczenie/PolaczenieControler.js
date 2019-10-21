import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

class PolaczenieController extends React.Component {
  constructor(param) {
    super(param);
    this.state = {
      polaczenia: [],
      aktualnePolaczenie: 1,
    }
  }

  pobierzPolaczenia = () => {
    fetch("http://localhost:5000/my-dbs/polaczenia")
      .then(res => res.json())
      .then(polaczenia => {
        const aktualnePolaczenie = polaczenia.find(polaczenie => polaczenia.aktualne);
        // if (aktualnePolaczenie) {

        // }
        this.setState({
          polaczenia, 
          aktualnePolaczenie: aktualnePolaczenie ? aktualnePolaczenie.id : 1,
        })
      });
  }

  handlePolacz = () => {

  }

  componentDidMount() {
    this.pobierzPolaczenia();
  }

  render() {
    const polaczenia = this.state.polaczenia.map(
      ({id, host, port}) => <option value={id}>{host+":"+port}</option>
    );

    return (
      <Row>
        <Col>
          <Form onSubmit={this.handlePolacz}>
            <Form.Group as={Row} controlId="formPolaczenie">
              <Form.Label column sm="2">Połączenie</Form.Label>
              <Col sm="9">
                <Form.Control as="select">
                  {polaczenia}
                </Form.Control>
              </Col>
              <Col sm="1">
                <Button onClick={this.handleDodajPolaczenie}>+</Button>
              </Col>              
            </Form.Group>
            <Form.Group as={Row} controlId="formPolacz">
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

export default PolaczenieController;