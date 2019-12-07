import React, { Component }from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import userSeed from "../userSeed.json";


class search extends Component {
  state = {
    userSeed
  };

//Add delete path, from activities 20-Stu_FriendRefactor
 
render() {
  return(
  <Wrapper>
    {this.state.userSeed.map(userSeed => (
      <Card
        image={userSeed.image}
        itemName={userSeed.item}
        amount={userSeed.amount}
        expiration={userSeed.expiration}
        takeBy={userSeed.mustTake}
        note={userSeed.note}
        contact={userSeed.owner}
      />
    ))}
  </Wrapper>
  );
}


}

// function home() {
//   return (
//     <div>
//       <Container style={{ marginTop: 30 }}>
//         <Row>
//           <Col size="md-12">
//             <h1>Neighborhood Pantry</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <Card
//             image="../../images/food07.jpg"
//             itemName="oranges"
//             amount="5"
//             expiration="one week"
//             takeBy="tomorrow"
//             note="I bought too many, don't want to see them go to waste."
//             contact="Jane Doe"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

export default search;
