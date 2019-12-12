import React, { Component } from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
// import Form from "../components/Form/form";
// import userSeed from "../userSeed.json";
import API from "../utils/API";

class search extends Component {
  state = {
    // userSeed
    value: "",
    user: [],
    items: []
  };

  componentDidMount() {
    this.searchUser();
  }

  makeUser = itemsData => {
    return {
      _id: itemsData.id,
      image: itemsData.image,
      item: itemsData.item,
      amount: itemsData.amount,
      expiration: itemsData.expiration,
      takeBy: itemsData.takeBy,
      note: itemsData.note,
      contact: itemsData.contact
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
