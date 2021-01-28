// App.js
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      summary: "",
      experience: "",
      skills: "",
      firstNameOutput: "",
      lastNameOutput: "",
      emailOutput: "",
      phoneOutput: "",
      summaryOutput: "",
      experienceOutput: "",
      skillsOutput: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      phoneError: "",
      summaryError: "",
      experienceError: "",
      skillsError: "",
      errorStyle: {
        color: "red",
      },
      removeStyle:{
        display:"none",
      },

      showStyle:{
        display:"block"
      }
    };
  }
  // Everytime we type into an input field this gets called
  handleChange = (e) => {
    // Changing a state
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // When user clicks on + button
  handleSubmit = (e) => {
    let inputValue = this.state[e.target.name].trim();
    if (inputValue != "") {
      // document.getElementsByClassName(e.target.name)[0].innerHTML = inputValue;
      // Clear out the input field
      this.setState({
        [e.target.name]: "",
        [`${e.target.name}Output`]: inputValue,
        [`${e.target.name}Error`]: "",

      });
      if(this.state['${e.target.name}Output'] != ""){
        this.setState({
          removeStyle: this.showStyle,
        });
      }

    }
  };
  handlePreview = (e) => {
    let valid = true;
    if (this.state.firstNameOutput === "") {
      this.setState({ firstNameError: "First Name is Required" });
      valid = false;
    }
    if (this.state.lastNameOutput === "") {
      this.setState({ lastNameError: "Last Name is Required" });
      valid = false;
    }
    if (this.state.emailOutput === "") {
      this.setState({ emailError: "Email is Required" });
      valid = false;
    }
    if (this.state.phoneOutput === "") {
      this.setState({ phoneError: "Phone Number is Required" });
      valid = false;
    }
    if (this.state.summaryOutput === "") {
      this.setState({ summaryError: "Summary is Required" });
      valid = false;
    }
    if (valid) {
      let inputFields = document.querySelectorAll(".inputFields");
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].style.display = "none";
      }
    }
  };
  handleEdit = (e) => {
    let inputFields = document.querySelectorAll(".inputFields");
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].style.display = "block";
    }
  };
  handleDelete = (e) => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      summary: "",
      experience: "",
      skills: "",
      firstNameOutput: "",
      lastNameOutput: "",
      emailOutput: "",
      phoneOutput: "",
      summaryOutput: "",
      experienceOutput: "",
      skillsOutput: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      phoneError: "",
      summaryError: "",
      experienceError: "",
      skillsError: "",
    });
  };
  render() {
    return (
      <div>
        <button type="submit" onClick={this.handlePreview} name="previewMode">
          Preview Mode
        </button>
        <button type="submit" onClick={this.handleEdit} name="editMode">
          Edit Mode
        </button>
        <button type="submit" onClick={this.handleDelete} name="delete">
          Clear
        </button>
        <section>
          <h1>Basic Info</h1>
          <hr></hr>
          <div className="inputFields">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.firstName}
              type="text"
              id="firstName"
            />
            <button type="submit" onClick={this.handleSubmit} name="firstName">
              +
            </button>
            <button className="remove" style={this.state.removeStyle} type="submit" onClick={this.handleSubmit} name="firstName">
              -
            </button>
          </div>
          <p className="outputFields firstName required">
            {this.state.firstNameOutput}
          </p>
          <p className="errorFields" style={this.state.errorStyle}>
            {this.state.firstNameError}
          </p>
          <div className="inputFields">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.lastName}
              type="text"
              id="lastName"
            />
            <button type="submit" onClick={this.handleSubmit} name="lastName">
              +
            </button>
            <button className="remove" style={this.state.removeStyle} type="submit" onClick={this.handleSubmit} name="lastName">
              -
            </button>
          </div>
          <p className="outputFields lastName required">
            {this.state.lastNameOutput}
          </p>
          <p className="errorFields" style={this.state.errorStyle}>
            {this.state.lastNameError}
          </p>
          <div className="inputFields">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              type="text"
              id="email"
            />
            <button type="submit" onClick={this.handleSubmit} name="email">
              +
            </button>
            <button className="remove" style={this.state.removeStyle} type="submit" onClick={this.handleSubmit} name="email">
              -
            </button>
          </div>
          <p className="outputFields email required">
            {this.state.emailOutput}
          </p>
          <p className="errorFields" style={this.state.errorStyle}>
            {this.state.emailError}
          </p>
          <div className="inputFields">
            <label htmlFor="phone">Phone</label>
            <input
              onChange={this.handleChange}
              value={this.state.phone}
              type="text"
              id="phone"
            />
            <button type="submit" onClick={this.handleSubmit} name="phone">
              +
            </button>
            <button className="remove" style={this.state.removeStyle} type="submit" onClick={this.handleSubmit} name="phone">
              -
            </button>
          </div>
          <p className="outputFields phone required">
            {this.state.phoneOutput}
          </p>
          <p className="errorFields" style={this.state.errorStyle}>
            {this.state.phoneError}
          </p>
        </section>
        <section>
          <h1>Summary</h1>
          <hr></hr>
          <div className="inputFields">
            <label htmlFor="summary">Summary</label>
            <input
              onChange={this.handleChange}
              value={this.state.summary}
              type="text"
              id="summary"
            />
            <button type="submit" onClick={this.handleSubmit} name="summary">
              +
            </button>
            <button className="remove" style={this.state.removeStyle} type="submit" onClick={this.handleSubmit} name="summary">
              -
            </button>
          </div>
          <p className="outputFields summary required">
            {this.state.summaryOutput}
          </p>
          <p className="errorFields" style={this.state.errorStyle}>
            {this.state.summaryError}
          </p>
        </section>
        <section>
          <h1>Experience</h1>
          <hr></hr>
          <div className="inputFields">
            <label htmlFor="experience">Experience</label>
            <input
              onChange={this.handleChange}
              value={this.state.experience}
              type="text"
              id="experience"
            />
            <button type="submit" onClick={this.handleSubmit} name="experience">
              +
            </button>
            <button className="remove" style={this.state.removeStyle} type="submit" onClick={this.handleSubmit} name="experience">
              -
            </button>
          </div>
          <p className="outputFields experience">
            {this.state.experienceOutput}
          </p>
          <p className="errorFields" style={this.state.errorStyle}>
            {this.state.experienceError}
          </p>
        </section>
        <section>
          <h1>Skills</h1>
          <hr></hr>
          <div className="inputFields">
            <label htmlFor="skills">Skills</label>
            <input
              onChange={this.handleChange}
              value={this.state.skills}
              type="text"
              id="skills"
            />
            <button type="submit" onClick={this.handleSubmit} name="skills">
              +
            </button>
            <button className="remove" style={this.state.removeStyle} type="submit" onClick={this.handleSubmit} name="skills">
              -
            </button>
          </div>
          <p className="outputFields skills">{this.state.skillsOutput}</p>
          <p className="errorFields" style={this.state.errorStyle}>
            {this.state.skillsError}
          </p>
        </section>
      </div>
    );
  }
}
export default App;
