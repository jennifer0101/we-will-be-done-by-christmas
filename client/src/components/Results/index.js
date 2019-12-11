import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    state = {
        savedUsers: [],
    }

    componentDidMount() {
        API.savedUsers()
            .then(savedUsers => this.setState({ savedUsers: savedUsers }))
            .catch(err => console.error(err));
    }

    handleSave = user => {

        if (this.state.savedUsers.map(user => user._id).includes(user._id)) {
            API.deleteUser(user._id)
                .then(deletedUser => this.setState({ savedUsers: this.state.savedUsers.filter(user => user._id !== deletedUser._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveUser(user)
                .then(savedUser => this.setState({ savedUsers: this.state.savedUsers.concat([savedUser]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.user.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.user.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <Row>
                                        <Col>
                                            <img className="img-fluid" src={result.image} />
                                        </Col>
                                        <Col>
                                            <Card>
                                                <h5 className="card-title">{results.item}</h5>
                                                <p className="card-text">{result.amount}</p>
                                                <p className="card-text">{result.expiration}</p>
                                                <p className="card-text">{result.takeBy}</p>
                                                <p className="card-text">{result.note}</p>
                                                <p className="card-text">{result.owner}</p>
                                                <p className="card-text">{result.notes}</p>
                                                {/* <div>
                                                    <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>

                                                    <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                                        {this.state.savedUsers.map(user => user._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div> */}
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;