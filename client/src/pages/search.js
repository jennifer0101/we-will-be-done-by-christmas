import React, { Component } from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Form from "../components/Form/form";
// import userSeed from "../userSeed.json";
import API from "../utils/API";

class search extends Component {
  state = {
    // userSeed
    value: "",
    user: []
  };

  componentDidMount() {
    this.searchUser();
  }

  makeUser = userData => {
    return {
      _id: userData.id,
      image: userData.image,
      item: userData.item,
      amount: userData.amount,
      expiration: userData.expiration,
      takeBy: userData.takeBy,
      note: userData.note,
      contact: userData.contact
    }
  }

  searchUser = query => {
    API.getUser(query)
      .then(res => this.setState({ user: res.data.items.map(userData => this.makeUser(userData)) }))
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state.user)
    return (
      <Wrapper>
        <Card itemName={"p"} />
      </Wrapper>
    )};
  }

export default search;
