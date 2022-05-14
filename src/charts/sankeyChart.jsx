import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


export default class Sales extends Component {
  componentDidMount() {
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
    paddingRight: 100
  })
);

series.nodes.get("colors").set("step", 2);

// Set data
series.data.setAll([
  { from: "Portfolio", to: "Equities", value: 65 },
  { from: "Portfolio", to: "Crypto", value: 35 },
  { from: "Equities", to: "Tech", value: 40 },
  { from: "Equities", to: "Other", value: 25 },
  { from: "Crypto", to: "BTC", value: 20 },
  { from: "Crypto", to: "ETH", value: 10 },
  { from: "Crypto", to: "Alts", value: 5 }

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

        <div id="SankeyChart" style={{ width: "95%", height: "90%", margin: "5%, 5%, 5%, 0%" }} />

    );
  }
}
