import React, { Component } from 'react';
import showResults from "../showResults";
import MyForm from "../MyForm";
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Container style={{padding: 15}}>
          <Row>
            <Col sm={10}>
              <h3>おかNRI</h3>
              <h4>Login画面</h4>
              <MyForm onSubmit={showResults}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
