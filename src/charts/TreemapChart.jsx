import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy"


export default class Sales extends Component {
  componentDidMount() {
    let root = am5.Root.new("TreemapChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create wrapper container
    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    let series = container.children.push(
      am5hierarchy.Treemap.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        upDepth: -1,
        initialDepth: 2,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        nodePaddingOuter: 0,
        nodePaddingInner: 0
      })
    );
    
    series.rectangles.template.setAll({
      strokeWidth: 2
    });
    
    // Generate and set data
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
    let maxLevels = 2;
    let maxNodes = 10;
    let maxValue = 100;
    
    let data = {
      name: "Root",
      children: [
        {
          
        
          name: "Equities",
          children: [
            {
              name: "Tech",
              value: 40
            },
            {
              name: "Other",
              value: 25
            }
          ]
        },
        {
          name: "Crypto",
          children: [
            {
              name: "BTC",
              value: 20
            },
            {
              name: "ETH",
              value: 10
            },
            {
              name: "Alts",
              value: 5
            }
          
          ]
        }
      ]
    };
    
    series.data.setAll([data]);
    series.set("selectedDataItem", series.dataItems[0]);

    series.appear(1000, 100);

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (

        <div id="TreemapChart" style={{ width: "95%", height: "90%", margin: "5%, 5%, 5%, 0%" }} />

    );
  }
}
