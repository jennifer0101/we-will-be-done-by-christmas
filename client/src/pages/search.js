import React, { Component } from "react";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Card from "../components/Card";

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
    // console.log('more stuff about CHEEETOS', this.state.user)
    return (
      <Container>
        <Card items={this.state.displayedItems} />
      </Container>
    )};
  }

export default search;



// this.setState({ user: res.data.items.map(userData => this.makeUser(userData)) })