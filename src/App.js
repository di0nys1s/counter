import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Best place for Ajax calls and get the data from the server
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    // clone the array
    const counters = [...this.state.counters];
    // get the index of the clicked counter
    const index = counters.indexOf(counter);
    // map it to the new counter objects
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    // clone the array
    const counters = [...this.state.counters];
    // get the index of the clicked counter
    const index = counters.indexOf(counter);
    // map it to the new counter objects
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    console.log("App - Renderer");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
