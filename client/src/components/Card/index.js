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
                    <strong>Item Name: {props.itemName}</strong>
                </li>
                <li>
                    <strong>Amount of Item: {props.amount}</strong>
                </li>
                <li>
                    <strong>Date of Expiration: {props.expiration}</strong>
                </li>

                <li>
                    <strong>Must Take By: {props.takeBy}</strong>
                </li>
                <li>
                    <strong>Note: {props.note}</strong>
                </li>
                <li>
                    <strong>Contact: {props.contact}</strong>
                </li>
            </ul>
        </div>
        </div>
    );
  }
  
  export default Card;
  










