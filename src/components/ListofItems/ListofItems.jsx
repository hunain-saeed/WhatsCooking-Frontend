import "./ListofItems.css";
import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


class ListofItems extends Component {
  rederRow = (val) => {
    return (
      <List>
        {val.map((n) => {
          return (
            <ListItem key={n}>
              <ListItemText primary={n} />
            </ListItem>
          );
        })}
      </List>
    );
  };

  render() {
    if (this.props.list.length !== 0) {
      return <div className="list">{this.rederRow(this.props.list)}</div>;
    } else {
      return (
        <div className="list">
          <List>
            <ListItem>
              <ListItemText primary="" />
            </ListItem>
          </List>
        </div>
      );
    }
  }
}

export default ListofItems;
