import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";
import Wrapper from "../Wrapper";


function testimonial() {
    return (
        <div>
            <Wrapper>
                <div className="row">
                    <div className="col m4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <div className="text-center"><i className="fas fa-utensils fa-5x"></i></div>
                                <div>
                                    <span className="card-title text-center"><h3>Share Food</h3></span>
                                    <div>
                                        <p className="quote">"I have an organic garden and use Neighborhood Pantry to let my neighbors know what extras I have before my vegetables spoil."</p>
                                        <p className="name">- Jean</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col m4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <div className="text-center"><i className="far fa-money-bill-alt fa-5x"></i></div>
                                <div>
                                    <span className="card-title text-center"><h3>Save Money</h3></span>
                                    <p className="quote">"I'm always eating and love taking my friends' freebies!"</p>
                                    <p className="name">- Matt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col m4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <div className="text-center"><i className="fas fa-seedling fa-5x"></i></div>
                                <div>
                                    <span className="card-title text-center"><h3>Reduce Waste</h3></span>
                                    <p className="quote">"I'm passionate about environmental issues and this is a great way to make a difference."</p>
                                    <p className="name">- Jennifer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>

    );
}

export default testimonial;