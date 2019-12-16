import React, { Component } from "react";
import Container from "../components/Container";
import API from "../utils/API";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
// import Row from "../components/Row";
// import Col from "../components/Col";

class search extends Component {
  state = {
    // userSeed
    displayedItems: [],
    // error: "",
    // message: ""
  };

  componentDidMount() {
    API.getItems()
      .then(res => {
        console.log(res);
        this.setState({ displayedItems: res.data });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Wrapper>
        <Card items={this.state.displayedItems} />
        </Wrapper>
      </Container>
    )};
  }

export default search;
