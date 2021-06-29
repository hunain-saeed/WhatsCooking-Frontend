import "./App.css";
import React from "react";

// import vsm from "../api/index";

import Logo from "./Header/Logo";
import SearchBar from "./Header/SearchBar";
// import Result from "./Result/Result";
import ListofItems from "./ListofItems/ListofItems";

class App extends React.Component {
  state = { result: [], query: [], error: "", time: 0 };

  onSearchSubmit = async (q) => {
    // this.setState({ error: "" });

    this.setState({ query: [...this.state.query, q] });
    // console.log(this.state.query);
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ListofItems list={this.state.query} />

        {/* <Result
          result={this.state.result}
          score={this.state.score}
          error={this.state.error}
          time={this.state.time}
        /> */}
      </div>
    );
  }
}

export default App;

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
