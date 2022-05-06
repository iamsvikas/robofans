import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import { Component } from "react";

// state is an object that describes the app
// const state = {
//   robots: robots,
//   searchfield: "",
// };
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>RoboFans👾</h1>
        <button>Subscribe</button>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

// export default App;
