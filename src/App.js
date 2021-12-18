import React, { Component } from "react";
import "./index.scss";
import Dropdown from "./Dropdown";
import axios from "axios";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];

class App extends Component {
  state = { tasks: [], isFetch: true };

  async componentDidMount() {
    let result = await axios.get(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress"
    );
    this.setState({ tasks: result.data, isFetch: false });
  }

  render() {
    if (this.state.isFetch) {
      return "Loading...";
    }
    const name = this.state.tasks[0].name;
    return (
      <div className="container">
        <h1>Lodgify Groupped Tasks</h1>
        <Dropdown />
      </div>
    );
  }
}
export default App;
