import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import SalesData from "./SalesData"
import axios from "axios";

export default class Sales extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("SalesChart", am4charts.XYChart);

    //get api data
    axios
      // .get("http://dummy.restapiexample.com/api/v1/employees")
      .get("https://sheet.best/api/sheets/55da239f-582c-401b-8407-ef0e2ea1f550")
      .then(res => {

        const dataObj = res.data;
        // console.log(dataObj);
        chart.data = dataObj;
        console.log(chart.data);

      })
      .catch(err => {
        console.log(err);
      })


    // Add data - official
    // chart.data = SalesData;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "[font-size: 8]Amount";
    valueAxis1.renderer.opposite = true;
    valueAxis1.renderer.grid.template.disabled = true;

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "Amount";
    series3.dataFields.dateX = "Date";
    series3.name = "[font-size: 8]$Amount";
    series3.stroke = am4core.color("dodgerblue");
    series3.strokeWidth = 2;
    series3.tensionX = 0.7;
    series3.yAxis = valueAxis1;
    series3.tooltipText = "[font-size: 8]{name}: [bold font-size: 12]{valueY}[/]";
    series3.fontSize = 4;


    let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.circle.radius = 3;
    bullet3.circle.stroke = am4core.color("dodgerblue");
    bullet3.circle.strokeWidth = 2;
    bullet3.circle.fill = am4core.color("#fff");


    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // Add legend
    // chart.legend = new am4charts.Legend();
    // chart.legend.position = "top";

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (

        <div id="SalesChart" style={{ width: "100%", height: "100%" }} />

    );
  }
}
