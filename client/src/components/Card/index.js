import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
// import Row from "../components/Row";
// import Col from "../components/Col";

class Card extends Component {

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
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.items.map(result => (
                                <div className="card-body" key={result._id}>
                                    <ul>
                                        <li>
                                            <strong>Item Name: {result.itemName}</strong>
                                        </li>
                                        <li>
                                            <strong>Amount of Item: {result.amount}</strong>
                                        </li>
                                        <li>
                                            <strong>Date of Expiration: {result.expiration}</strong>
                                        </li>
                                        <li>
                                            <strong>Must Take By: {result.takeBy}</strong>
                                        </li>
                                        <li>
                                            <strong>Note: {result.note}</strong>
                                        </li>
                                        <li>
                                            <strong>Contact: {result.contact}</strong>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}
export default Card;












