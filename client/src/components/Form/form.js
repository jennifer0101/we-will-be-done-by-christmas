import React from "react";
import API from "../../utils/API"
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemName: " ",
        amountItem: " ",
        expiration: " ",
        takeBy: " ",
        note: " ",
        contact: " ",
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log(event.target.name);
        // console.log(event.target.value);
        this.setState({[event.target.name]:event.target.value})
    //   this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      // alert('A name was submitted: ' + this.state);
      console.log(this.state);
      API.savedUsers(this.state).then(res => console.log("working"));
      event.preventDefault();
    }
  
    render() {
        console.log("state", this.state.itemName)
      return (
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Item Name:
            <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Amount of Item:
            <input type="text" name="amountItem" value={this.state.amountItem} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Date of Expiration:
            <input type="text" name="expiration" value={this.state.expiration} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Must Take By:
            <input type="text" name="takeBy" value={this.state.takeBy} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Note:
            <input type="text" name="note" value={this.state.note} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Contact:
            <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Form;