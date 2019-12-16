import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../components/Col";


class Card extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        savedItems: []
    }

    componentDidMount() {
        API.savedItems()
            .then(savedItems => this.setState({ savedItems: savedItems }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <React.Fragment>
                {this.props.items.map(result => (
                    <React.Fragment key={result.id}>
                        <div className="card-deck" id="cardItem">
                            <div className="card border-success">
                                <div className="card-body text-success">
                                    <h5 className="card-title"><strong>{result.itemName}</strong></h5>
                                    <p className="card-text"><strong>Amount of Item: {result.amountItem}</strong></p>
                                    <p className="card-text"><strong>Date of Expiration: {result.expiration}</strong></p>
                                    <p className="card-text"><strong>Note: {result.note}</strong></p>
                                    <p className="card-text"><strong>Amount of Item: {result.amountItem}</strong></p>
                                </div>
                                <div className="card-footer bg-transparent border-success"><strong>Contact: {result.contact}</strong>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
}

//     render() {
//         return (
//             <Container>
//                 {!this.props.items ? (
//                     <h1 className="text-center">No Results to Display</h1>
//                 ) : (
//                         <div id="cardItem">
//                             {this.props.items.map(result => (
//                                 <div className="card-deck">
//                                     <div className="card border-success" key={result._id}>
//                                         <div className="card-body text-success">
//                                             <h5 className="card-title"><strong>{result.itemName}</strong></h5>
//                                             <p className="card-text"><strong>Amount of Item: {result.amountItem}</strong></p>
//                                             <p className="card-text"><strong>Date of Expiration: {result.expiration}</strong></p>
//                                             <p className="card-text"><strong>Note: {result.note}</strong></p>
//                                             <p className="card-text"><strong>Amount of Item: {result.amountItem}</strong></p>
//                                         </div>
//                                         <div className="card-footer bg-transparent border-success"><strong>Contact: {result.contact}</strong>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//             </Container>
//         )
//     }
// }
export default Card;












