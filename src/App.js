// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      summary:"",
      experience:"",
      skills:"",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    document.getElementsByClassName(e.target.name)[0].innerHTML = this.state[e.target.name];
  }

  render() {
    return (
      <div>
        <section>
          <h1>Basic Info</h1>
          <hr></hr>
          <label htmlFor="firstName">First Name</label>
          <input  onChange={this.handleChange}
                value={this.state.firstName}
                type="text"
                id="firstName"
                />
          <button type="submit"
                onClick={this.handleSubmit}
                name="firstName">+
          </button>
          <p className="firstName"></p>

          <label htmlFor="lastName">Last Name</label>
          <input  onChange={this.handleChange}
                value={this.state.lastName}
                type="text"
                id="lastName"
                />
          <button type="submit"
                onClick={this.handleSubmit}
                name="lastName">+
          </button>
          <p className="lastName"></p>

          <label htmlFor="email">Email</label>
          <input  onChange={this.handleChange}
                value={this.state.email}
                type="text"
                id="email"
                />
          <button type="submit"
                onClick={this.handleSubmit}
                name="email">+
          </button>
          <p className="email"></p>

          <label htmlFor="phone">Phone</label>
          <input  onChange={this.handleChange}
                value={this.state.phone}
                type="text"
                id="phone"
                />
          <button type="submit"
                onClick={this.handleSubmit}
                name="phone">+
          </button>
          <p className="phone"></p>
        </section>

        <section>
        <h1>Summary</h1>
        <hr></hr>
        <label htmlFor="summary">Summary</label>
        <input  onChange={this.handleChange}
              value={this.state.summary}
              type="text"
              id="summary"
              />
        <button type="submit"
              onClick={this.handleSubmit}
              name="sumarry">+
        </button>
        <p className="summary"></p>
        </section>

        <section>
        <h1>Experience</h1>
        <hr></hr>
        <label htmlFor="experience">Experience</label>
        <input  onChange={this.handleChange}
              value={this.state.experience}
              type="text"
              id="experience"
              />
        <button type="submit"
              onClick={this.handleSubmit}
              name="experience">+
        </button>
        <p className="experience"></p>
        </section>

        <section>
        <h1>Skills</h1>
        <hr></hr>
        <label htmlFor="skills">Skills</label>
        <input  onChange={this.handleChange}
              value={this.state.skills}
              type="text"
              id="skills"
              />
        <button type="submit"
              onClick={this.handleSubmit}
              name="skills">+
        </button>
        <p className="skills"></p>
        </section>
      </div>
    );
  }
}

export default App;
