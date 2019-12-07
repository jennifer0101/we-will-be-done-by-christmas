import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Neighborhood Pantry</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card
            image="../../images/food07.jpg"
            itemName="oranges"
            amount="5"
            expiration="one week"
            takeBy="tomorrow"
            note="I bought too many, don't want to see them go to waste."
            contact="Jane Doe"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default home;
