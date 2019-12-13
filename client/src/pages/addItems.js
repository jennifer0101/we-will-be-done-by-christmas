import React from "react";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form/form";
import Container from "../components/Container";

// handleInputChange = event => {
//   const name = event.target.name
//   const value = event.target.value;
//   this.setState({
//     [name]: value
//   });
// }

// handleFormSubmit = event => {
//   event.preventDefault();
//   this.searchUser(this.state.search);
// };

// render() {
//   return (
//     <Wrapper>
//       {/* <Form
//         search={this.state.search}
//         handleInputChange={this.handleInputChange}
//         handleFormSubmit={this.handleFormSubmit}
//       /> */}
//       <Card user={this.state.user} />
//     </Wrapper>
//   )};
// }

function addItems() {
  return (
    <div>
      <Container>
      <Wrapper style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Add Items</h1>
          </Col>
        </Row>
        <Row>
          {/* <Col> */}
            <Form />
          {/* </Col> */}
        </Row>
      </Wrapper>
      </Container>
    </div>
  );
}

export default addItems;