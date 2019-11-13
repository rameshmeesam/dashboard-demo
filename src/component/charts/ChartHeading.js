import React from "react";
import ReactDOM from "react-dom";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import RateReviewIcon from "@material-ui/icons/RateReview";

export default class ChartHeading extends React.Component {
  render() {
    return (
      <div className="chart-heading">
        <IconButton className="chart-heading-icon">
          <RefreshIcon />
        </IconButton>
        <IconButton className="chart-heading-icon">
          <RateReviewIcon />
        </IconButton>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ChartHeading />, rootElement);
