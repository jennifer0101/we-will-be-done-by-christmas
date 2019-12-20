import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";


function testimonial() {
    return (
        <div>
        <div class="row">
            <div class="col m4">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <div class="text-center"><i class="fas fa-utensils fa-5x"></i></div>
                        <div>
                        <span class="card-title text-center"><h3>Share Food</h3></span>
                        <div>
                        <p class="quote">"I have an organic garden and use Neighborhood Pantry to let my neighbors know what extras I have before my vegetables spoil."</p>
                        <p class="name">- Jean</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        

        {/* <div class="row"> */}
        <div class="col m4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <div class="text-center"><i class="far fa-money-bill-alt fa-5x"></i></div>
                <div>
                    <span class="card-title text-center"><h3>Save Money</h3></span>
                    <p class="quote">"I'm always eating and love taking my friends' freebies!"</p>
                    <p class="name">- Matt</p>
                    </div>
                </div>
            </div>
        </div>
        {/* </div> */}

        {/* <div class="row"> */}
        <div class="col m4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <div class="text-center"><i class="fas fa-seedling fa-5x"></i></div>
                <div>
                    <span class="card-title text-center"><h3>Reduce Waste</h3></span>
                    <p class="quote">"I'm passionate about environmental issues and this is a great way to make a difference."</p>
                    <p class="name">- Jennifer</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* </div> */}

        </div>

    );
}

export default testimonial;