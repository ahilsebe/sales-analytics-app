import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


export default class Sales extends Component {
  componentDidMount() {
  //  am4core.useTheme(am4themes_animated);
  let root = am5.Root.new("SankeyChart"); 

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create series
let series = root.container.children.push(
  am5flow.Sankey.new(root, {
    sourceIdField: "from",
    targetIdField: "to",
    valueField: "value",
    paddingRight: 50
  })
);

series.nodes.get("colors").set("step", 2);

// Set data
series.data.setAll([
  { from: "Leads", to: "Estimates", value: 100 },
  { from: "Estimates", to: "Bookings", value: 35 },
  { from: "Estimates", to: "No Sale", value: 65 },
  { from: "Bookings", to: "Accretive", value: 22 },
  { from: "Bookings", to: "Non-Accretive", value: 23 },
  { from: "No Sale", to: "Too Expensive", value: 25 },
  { from: "No Sale", to: "Reason 2", value: 15 },
  { from: "No Sale", to: "Reason 3", value: 10 },
  { from: "No Sale", to: "Reason 4", value: 10 },
  { from: "No Sale", to: "Reason 5", value: 5 }
]);
 

   // this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (

        <div id="SankeyChart" style={{ width: "100%", height: "100%" }} />

    );
  }
}
