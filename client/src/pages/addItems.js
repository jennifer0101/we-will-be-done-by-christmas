import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form/form";
import Footer from "../components/Footer";
import "../index.css";

function addItems() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Add Items to the Pantry</h1>
          </Col>
        </Row>
        <Row>
          <Form />
        </Row>
      </Container>
      <React.Fragment>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default addItems;