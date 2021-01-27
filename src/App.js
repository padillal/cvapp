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
      document.getElementsByClassName(e.target.name)[0].innerHTML = inputValue;
      // Clear out the input field
      this.setState({
        [e.target.name]: "",
      });
    }
  };
  handleHide = (e) => {
    let inputFields = document.querySelectorAll(".inputFields");
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].style.display = "none";
    }
  };
  handleShow = (e) => {
    let inputFields = document.querySelectorAll(".inputFields");
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].style.display = "block";
    }
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleHide} name="previewMode">
          Preview Mode
        </button>
        <button type="submit" onClick={this.handleShow} name="editMode">
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
          </div>
          <p className="firstName"></p>
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
          </div>
          <p className="lastName"></p>
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
          </div>
          <p className="email"></p>
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
          </div>
          <p className="phone"></p>
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
          </div>
          <p className="summary"></p>
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
          </div>
          <p className="experience"></p>
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
          </div>
          <p className="skills"></p>
        </section>
      </div>
    );
  }
}
export default App;
