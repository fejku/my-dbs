import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PolaczenieController from "./MyDBs/Polaczenie/PolaczenieControler";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bazy: [],
      wersjePumy: [],
      ostatnioUzytaBaza: "",
      ostatnioUzytaWersjaPumy: 1,
      wersjeSchematow: []
    };
  }

  getData() {
    fetch("http://localhost:5000/my-dbs")
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            bazy: data.bazy,
            wersjePumy: data.wersjePumy,
            ostatnioUzytaBaza: data.ostatnioUzyte.baza
              ? data.ostatnioUzyte.baza
              : data.bazy[0],
            ostatnioUzytaWersjaPumy: data.ostatnioUzyte.fk_wepu
              ? data.ostatnioUzyte.fk_wepu
              : data.wersjePumy[0].id
          },
          () => {
            this.getWersjeSchematow();
          }
        )
      )
      .catch(err => console.log(err));
  }

  getWersjeSchematow() {
    const adres =
      "http://localhost:5000/my-dbs/wersje-schematow/" +
      this.state.ostatnioUzytaWersjaPumy;

    fetch(adres)
      .then(res => res.json())
      .then(data =>
        this.setState({
          wersjeSchematow: data
        })
      )
      .catch(err => console.log(err));
  }

  handleOstatnioUzytaBaza = event => {
    this.setState({ ostatnioUzytaBaza: event.target.value });
  };

  handleZmienOstatnioUzytaWersjaPumy = event => {
    this.setState({ ostatnioUzytaWersjaPumy: event.target.value }, () => {
      this.getWersjeSchematow();
    });
  };

  handleZmienWersjeSchematu = event => {
    const wersjeSchematow = [...this.state.wersjeSchematow];

    wersjeSchematow.find(
      e => e.nazwa_schematu === event.target.name
    ).wersja_schematu = event.target.value;

    this.setState({ wersjeSchematow });
  };

  handleZatwierdz = event => {
    event.preventDefault();

    fetch("http://localhost:5000/my-dbs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        baza: this.state.ostatnioUzytaBaza,
        wersjaPumy: this.state.ostatnioUzytaWersjaPumy,
        schematy: this.state.wersjeSchematow
      })
    });
  };

  componentDidMount() {
    // this.getData();
  }

  render() {
    const dbs = this.state.bazy.map(nazwaBazy => {
      return <option value={nazwaBazy}>{nazwaBazy}</option>;
    });

    const wersjePumy = this.state.wersjePumy.map(wersjaPumy => {
      const { id, wersja } = wersjaPumy;

      return <option value={id}>{wersja}</option>;
    });

    const wersjeSchematu = this.state.wersjeSchematow.map(wersjaSchematu => {
      const { nazwa_schematu, wersja_schematu } = wersjaSchematu;

      return (
        <Form.Group as={Col} sm="2" controlId="test3">
          <Row>
            <Col sm="5">
              <Form.Label>{nazwa_schematu}</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                type="text"
                value={wersja_schematu}
                name={nazwa_schematu}
                onChange={this.handleZmienWersjeSchematu}
              />
            </Col>
          </Row>
        </Form.Group>
      );
    });

    return (
      <Container>
        <Router>
          <Row>
            <Col sm="2">
              <Link to="/">Home</Link>
            </Col>
            <Col sm="2">
              <Link to="/mydbs/polaczenie">MyDBs</Link>
            </Col>
          </Row>

          <Switch>
            <Route path="/mydbs/polaczenie">
              <PolaczenieController />
            </Route>
            <Route path="/">
              <Row>
                <Col>Home</Col>
              </Row>
            </Route>
          </Switch>
        </Router>
      </Container>

      // <Container>
      //   <Form onSubmit={this.handleZatwierdz} encType="multipart/form-data">
      //     <Form.Group as={Row} controlId="test">
      //       <Form.Label column sm="2">Nazwa bazy</Form.Label>
      //       <Col sm="10">
      //         <Form.Control
      //           as="select"
      //           name="qwe"
      //           value={this.state.ostatnioUzytaBaza}
      //           onChange={this.handleOstatnioUzytaBaza}
      //         >
      //           {dbs}
      //         </Form.Control>
      //       </Col>
      //     </Form.Group>
      //     <Form.Group as={Row} controlId="test2">
      //       <Form.Label column sm="2">Wersja pumy</Form.Label>
      //       <Col sm="10">
      //         <Form.Control
      //           as="select"
      //           value={this.state.ostatnioUzytaWersjaPumy}
      //           onChange={this.handleZmienOstatnioUzytaWersjaPumy}
      //         >
      //           {wersjePumy}
      //         </Form.Control>
      //       </Col>
      //     </Form.Group>
      //     <Form.Row>

      //         {wersjeSchematu}

      //     </Form.Row>
      //     <Button variant="primary" type="submit">Zatwierdź</Button>
      //   </Form>
      // </Container>
    );
  }
}

export default App;
