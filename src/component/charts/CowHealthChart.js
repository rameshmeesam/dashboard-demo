import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import ChartHeading from "./ChartHeading";

const data = [
  ["Task", "Hours per Day"],
  ["good", 11],
  ["fever", 2],
  ["Anthrax", 2],
  ["Akabane", 2],
  ["African swine fever", 7] // CSS-style declaration
];
const options = {
  title: "Cow Helath Status",
  pieHole: 0.4,
  is3D: false
};
export default class App extends React.Component {
  render() {
    return (
      <div className="chart-box">
        <ChartHeading />
        <Chart chartType="PieChart" data={data} options={options} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
