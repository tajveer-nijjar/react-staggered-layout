import React from "react";
// import logo from "./logo.svg";
import "typeface-roboto";
import Button from "@material-ui/core/Button";

import "./App.css";
import MaterialUiGrid from "./components/MaterialUiGrid";
import TheOtherGrid from "./components/TheOtherGrid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLayout: 2
    };
  }

  handleButtonClick = tab => {
    this.setState({
      visibleLayout: tab
    });
  };

  render() {
    return (
      <div className="App">
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleButtonClick(1)}
        >
          Material-UI
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={() => this.handleButtonClick(2)}
        >
          React-Other
        </Button>

        {this.state.visibleLayout && this.state.visibleLayout === 1 ? (
          <MaterialUiGrid />
        ) : null}

        {this.state.visibleLayout && this.state.visibleLayout === 2 ? (
          <TheOtherGrid />
        ) : null}

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
