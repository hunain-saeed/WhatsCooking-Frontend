import React from "react";

import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Divider from "@material-ui/core/Divider";

class Result extends React.Component {
  render() {
    if (this.props.error !== "") {
      return (
        <div>
          <p>About 0 results ({this.props.time} seconds)</p>
          <h2>{this.props.error}</h2>
        </div>
      );
    }
    if (this.props.result !== "") {
      return (
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
          className="resultdialoge"
        >
          <DialogTitle id="form-dialog-title">
            Result : {this.props.result}
          </DialogTitle>
        </Dialog>
      );
    } else {
      return <div>no result</div>;
    }
  }
}

export default Result;
