import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../index.css";

class cart extends Component {
  state = {
    saved: []
  };

  //Gets all items saved to User (Cart) collection 
  componentDidMount() {
    API.getUserItems()
      .then(res => {
        console.log(res);
        this.setState({ saved: res.data });
      })
      .catch(err => console.log(err))
  }

  //function to remove items by id
  // handleDeleteButton = id => {
  //   API.deleteItem(id)
  //     .then(res => this.componentDidMount())
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <h1><i className="material-icons">add_shopping_cart</i>Cart</h1>
            </Col>
          </Row>
          <Wrapper>
            <Card items={this.state.saved} hasContactButton="yes" hasDeleteButton="yes">
            </Card>
          </Wrapper>
        </Container>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </div>
    )
  };
}

export default cart;
