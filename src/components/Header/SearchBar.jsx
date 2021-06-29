import "./Header.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

class SearchBar extends React.Component {
  state = { query: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    
    this.props.onSearchSubmit(this.state.query);
    this.setState({query: ""})
  };

  render() {
    return (
      <Paper
        className="paper"
        component="form"
        onSubmit={this.onFormSubmit}
        elevation={3}
      >
        <InputBase
          name="query"
          className="inputbase1"
          onChange={this.handleChange}
          value={this.state.query}
          placeholder="Enter your query here"
        />
      </Paper>
    );
  }
}

export default SearchBar;

