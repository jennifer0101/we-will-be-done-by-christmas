import React from "react";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";

function inviteFriends() {
  return (
    <div>
      <Wrapper style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Invite Friends</h1>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
}

export default inviteFriends;