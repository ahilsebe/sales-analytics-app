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
          name: "First",
          children: [
            {
              name: "Deck",
              value: 10
            }
            // ,
            // {
            //   name: "a",
            //   value: 60
            // },
            // {
            //   name: "A3",
            //   value: 30
            // }
          ]
        },
        {
          name: "Second",
          children: [
            {
              name: "Patio",
              value: 35
            }
            // ,
            // {
            //   name: "B2",
            //   value: 98
            // },
            // {
            //   name: "B3",
            //   value: 56
            // }
          ]
        },
        {
          name: "Third",
          children: [
            {
              name: "Fence",
              value: 16
            }
            // ,
            // {
            //   name: "C2",
            //   value: 148
            // },
            // {
            //   name: "C3",
            //   value: 126
            // },
            // {
            //   name: "C4",
            //   value: 26
            // }
          ]
        }
        // {
        //   name: "Fourth",
        //   children: [
        //     {
        //       name: "D1",
        //       value: 415
        //     },
        //     {
        //       name: "D2",
        //       value: 148
        //     },
        //     {
        //       name: "D3",
        //       value: 89
        //     },
        //     {
        //       name: "D4",
        //       value: 64
        //     },
        //     {
        //       name: "D5",
        //       value: 16
        //     }
        //   ]
        // },
        // {
        //   name: "Fifth",
        //   children: [
        //     {
        //       name: "E1",
        //       value: 687
        //     },
        //     {
        //       name: "E2",
        //       value: 148
        //     }
        //   ]
        // }
      ]
    };
    
    series.data.setAll([data]);
    series.set("selectedDataItem", series.dataItems[0]);

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (

        <div id="TreemapChart" style={{ width: "100%", height: "100%" }} />

    );
  }
}
