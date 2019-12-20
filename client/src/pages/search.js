import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import "../index.css";

class search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedItems: [],
      error: "",
      message: "",
      itemsToCart: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  //Get all items from items collection.
  componentDidMount() {
    API.getItems()
      .then(res => {
        console.log(res);
        this.setState({ displayedItems: res.data });
      })
      .catch(err => console.log(err))
  }

  //Add selected items to User (cart) collection onclick
  addToCart(items) {
    console.log("items", items);
    API.userItemsToCart(items)
      .then(res => {
        console.log(res, "working at addtocart");
        this.setState({ itemsToCart: items });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <h1 id="searchitems">Search for Items in the Pantry</h1>
            </Col>
          </Row>
          <Wrapper>
            <Card items={this.state.displayedItems} addToCart={this.addToCart} hasCartButton="yes">
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

export default search;
