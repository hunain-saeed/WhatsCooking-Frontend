import "./App.css";
import React from "react";
import Paper from "@material-ui/core/Paper";

import vsm from "../api/index";

import Logo from "./Header/Logo";
import SearchBar from "./Header/SearchBar";
import Result from "./Result/Result";

class App extends React.Component {
  state = { result: [], score: [], error: "", time: 0 };

  onSearchSubmit = async (query, alpha) => {
    this.setState({ error: "" });
    // if (query) {
    //   var t0 = performance.now();
    //   const res = await vsm.post("/query", { query, alpha });
    //   var t1 = (performance.now() - t0) / 1000;
    //   this.setState({ time: t1.toFixed(3) });
    //   if (res.data) {
    //     this.setState({ result: res["data"]["result"] });
    //     this.setState({ score: res["data"]["score"] });
    //     this.setState({ error: res["data"]["error"] });
    //   }
    // } else {
    //   this.setState({ result: [] });
    //   this.setState({ score: [] });
    //   this.setState({ error: "" });
    // }
  };

  render() {
    return (
      <div className="App">
        <Logo/>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Result
          result={this.state.result}
          score={this.state.score}
          error={this.state.error}
          time={this.state.time}
        />
        <Paper className="itemList">hello</Paper>
      </div>
    );
  }
}

export default App;
