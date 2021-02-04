import React from 'react'
import '../View/index.css'
import { Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: 'MEREDITH',
      CreateDate: new Date().toLocaleString(),
      Duration: Math.floor(Math.random() * 10)
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
          <Paper>
            <div style={{padding:"15px"}}>
          <div className="form-group">
            <label className="labelText" >Title:</label><br />
            <label className="labelDesc">{this.state.Title}</label>
            {/* <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" /> */}
          </div>
          <div className="form-group">
            <label className="labelText">Created Date:</label><br />
            <label className="labelDesc">{this.state.CreateDate}</label><br />
            <label className="labelText">Duration:</label><br />
            <label className="labelDesc">{this.state.Duration} minutes</label>
            {/* <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" /> */}
          </div>
          <div>
          <label className="labelText">Article Link:</label><br />
          <a className="linkText" href="https://people.com/royals/prince-harrys-friend-tom-bradby-opens-up-about-harrys-heartbreak-and-royal-family-tensions/">https://people.com/royals/prince-harrys-friend-tom-bradby-opens-up-about-harrys-heartbreak-and-royal-family-tensions/</a>
          </div>
          </div>
          </Paper>
          <div style = {{paddingTop:"4em"}}>
            <Button variant="contained" color="primary" component={Link} to="/view" style={{fontSize:"large", fontFamily:"revert", borderWidth: "medium"}}> Export/Save</Button>
          </div>
          <div style={{paddingTop:"2em"}}>
            <Button variant="contained" color="primary" component={Link} to="/Onecms" style={{fontSize:"large", fontFamily:"revert", borderWidth: "medium"}}> Create New</Button>
          </div>
        </form>
      </div>
    )
  }
}