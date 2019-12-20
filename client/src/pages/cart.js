import React, {Component} from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";


class cart extends Component {
  state = {
    saved: []
  };

  //Gets all items saved to database 
  // componentDidMount() {
  //   API.getItems()
  //   .then(res => this.setState({ saved: res.data }))
  //   .catch(err => console.log(err))
  // }

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
      <Container>
        <Row>
          <Col size="md-12">
            <h1><i className="material-icons"> add_shopping_cart </i> Cart</h1>
          </Col>
        </Row>
        <Wrapper>
       
        <Card items={this.state.saved} hasCartButton="yes">
        </Card>
        
          
        </Wrapper>
      </Container>
    )};
  }

export default cart;

//call .get