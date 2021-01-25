import React from 'react'
import '../View/index.css'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: 'MEREDITH',
      CreateDate: new Date().toLocaleString()
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label className="labelText" >Title:</label><br />
            <label className="labelDesc">{this.state.Title}</label>
            {/* <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" /> */}
          </div>
          <div className="form-group">
            <label className="labelText">Created Date:</label><br />
            <label className="labelDesc">{this.state.CreateDate}</label>
            {/* <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" /> */}
          </div>
          <div style={{paddingTop:"5em"}}>
            <Button variant="outlined" color="black" component={Link} to="/edit" style={{fontSize:"large", fontFamily:"revert", borderWidth: "medium"}}> Create New</Button>
          </div>
          {/* <input type="submit" value="Submit" className="btn btn-primary" /> */}
        </form>
      </div>
    )
  }
}