import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import SalesData from "./SalesData"
import axios from "axios";


export default class Sales extends Component {


  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("LINKChart", am4charts.XYChart);
    let coinText = 'ADA';
    console.log(coinText);

    //get api data
    axios
      // .get("http://dummy.restapiexample.com/api/v1/employees")
      .get("https://min-api.cryptocompare.com/data/v2/histohour?fsym="+coinText+"&tsym=USD&limit=24&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}")
      .then(res => {

        const dataObj = res.data.Data.Data;
        // console.log(dataObj);
        chart.data = dataObj;
        // console.log(chart.data);

      })
      .catch(err => {
        console.log(err);
      })


    // Add data - official
    // chart.data = SalesData;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis1.title.text = "[font-size: 12]$BTC";
    valueAxis1.renderer.opposite = false;
    valueAxis1.renderer.grid.template.disabled = true;

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "close";
    series3.dataFields.dateX = "time";
    // series3.name = "[font-size: 12]$LINK Price";
    series3.stroke = am4core.color("#007aff");
    series3.strokeWidth = 2;
    series3.tensionX = 0.7;
    series3.yAxis = valueAxis1;
    series3.tooltipText = "[font-size: 12]{name}: [bold font-size: 12]{valueY}[/]";

    let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.circle.radius = 0;
    bullet3.circle.stroke = am4core.color("#007aff");
    bullet3.circle.strokeWidth = 2;
    bullet3.circle.fill = am4core.color("#007aff");


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

        <div id="LINKChart" style={{ width: "95%", height: "90%", margin: "5%, 5%, 5%, 0%" }} />

    );
  }
}
