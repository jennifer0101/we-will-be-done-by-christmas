import React, { Component } from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image}/>
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Item Name:</strong>
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
    );
  }
  
  export default Card;
  










