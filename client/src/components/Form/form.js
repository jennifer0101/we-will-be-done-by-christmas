import React from "react";
import API from "../../utils/API"
import "./formstyle.css";

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

    this.setState({ [event.target.name]: event.target.value })

  }

  handleSubmit(event) {
    alert(this.state.itemName + " has been added to the Neighborhood Pantry.");
    console.log(this.state);
    API.savedItems(this.state).then(res => console.log("working!!!!", res));
    event.preventDefault();
  }

  render() {
    console.log("state", this.state.itemName)
    return (

      <form onSubmit={this.handleSubmit}>
        <label>Item Name</label>
        <br></br>
        <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} />
        <br></br>
        <br></br>
        <label>Amount of Item</label>
        <br></br>
        <input type="text" name="amountItem" value={this.state.amountItem} onChange={this.handleChange} />
        <br></br>
        <br></br>
        <label>Date of Expiration</label>
        <br></br>
        <input type="text" name="expiration" value={this.state.expiration} onChange={this.handleChange} />
        <br></br>
        <br></br>
        <label>Must Take By</label>
        <br></br>
        <input type="text" name="takeBy" value={this.state.takeBy} onChange={this.handleChange} />
        <br></br>
        <br></br>
        <label>Note</label>
        <br></br>
        <input type="text" name="note" value={this.state.note} onChange={this.handleChange} />
        <br></br>
        <br></br>
        <label>Contact</label>
        <br></br>
        <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange} />
        <br></br>
        <br></br>
        <button type="submit" className="submitBtn btn btn-outline-secondary btn-sm " onClick={this.handleSubmit}>
          Submit
          </button>
      </form>
    );
  }
}

export default Form;