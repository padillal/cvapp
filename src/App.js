// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat({task: this.state.task, id: uniqid()}),
      task: "",
    });
  };

  onDeleteTask = (e) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== e)
    })
  }

  render() {
    const {tasks} = this.state;
    return (
      <body>

      <div>
      <h1>Basic Info</h1>
      <hr></hr>
      <form onSubmit={this.onSubmitTask}>
          <label htmlFor="firtName">First Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.task}
            type="text"
            id="firstName"
            />
          <button type="submit">
            Add
          </button>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.task}
            type="text"
            id="lastName"
            />
            <button type="submit">
              Add
            </button>
        </form>
        <Overview tasks={tasks} onRemove={this.onDeleteTask}/>
        </div>


        <div>
        <h1>Summary</h1>
        <hr></hr>
        </div>

        <div>
        <h1>Experience</h1>
        <hr></hr>
        </div>

        <div>
        <h1>Skills</h1>
        <hr></hr>
        </div>
      </body>

    );
  }
}

export default App;
