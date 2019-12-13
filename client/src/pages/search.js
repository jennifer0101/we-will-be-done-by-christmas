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
//THIS COULD BE OUR BREAK
  searchUser = query => {
    console.log('i hate plane cheetos');
    API.getUser(query)
      .then(res => console.log('loook at meeeeeee', res))
      .catch(err => console.error('it broke',err));
  }

  render() {
    console.log('more stuff about CHEEETOS', this.state.user)
    return (
      <Wrapper>
        <Card itemName={"p"} />
      </Wrapper>
    )};
  }

export default search;



// this.setState({ user: res.data.items.map(userData => this.makeUser(userData)) })