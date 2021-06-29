import "./App.css";
import React from "react";
import { Button } from "@material-ui/core";

import vsm from "../api/index";

import Logo from "./Header/Logo";
import SearchBar from "./Header/SearchBar";
import Result from "./Result/Result";
import ListofItems from "./ListofItems/ListofItems";

class App extends React.Component {
  state = { result: "", query: [], error: "", time: 0, open: false };

  onSearchSubmit = (q) => {
    this.setState({ error: "" });
    this.setState({ query: [...this.state.query, q] });
  };

  // Opens dialouge box
  handleClickOpen = async () => {
    this.setState({ open: true });

    this.setState({ error: "" });
    if (this.state.query) {
      var t0 = performance.now();

      const res = await vsm.post("/query", { query: this.state.query });
      
      console.log(res.data);

      var t1 = (performance.now() - t0) / 1000;
      this.setState({ time: t1.toFixed(3) });

      if (res.data) {
        this.setState({ result: res["data"]["result"] });
        this.setState({ error: res["data"]["error"] });
        this.setState({ query: [] });
      }
    } else {
      this.setState({ result: "" });
      this.setState({ error: "" });
    }
    console.log(this.state.result);
  };
  // Close dialouge box
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ListofItems list={this.state.query} />
        <Button
          variant="contained"
          className="result-button"
          onClick={this.handleClickOpen}
        >
          GO!
        </Button>
        <Result
          result={this.state.result}
          error={this.state.error}
          time={this.state.time}
          handleClose={this.handleClose}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default App;
