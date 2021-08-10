import React, { useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Bar = () => {
  
  useLayoutEffect(() => {
    let chart = am4core.create("bardiv", am4charts.XYChart3D);
    am4core.useTheme(am4themes_animated);
    
    chart.data = [{
      "name": "Suicidal",
      "Low": 24,
      "Some": 1,
      "Much": 1,
      "High": 1
    }, {
      "name": "Anxiety",
      "Low": 21,
      "Some": 5,
      "Much": 1,
      "High": 0
    }, {
      "name": "Depression",
      "Low": 24,
      "Some": 3,
      "Much": 0,
      "High": 0
    }, {
      "name": "Insomnia",
      "Low": 18,
      "Some": 5,
      "Much": 4,
      "High": 0
    }, {
      "name": "PTSD",
      "Low": 23,
      "Some": 3,
      "Much": 0,
      "High": 1
    }, {
      "name": "Support System",
      "Low": 20,
      "Some": 7,
      "Much": 0,
      "High": 0
    }, {
      "name": "Alcohol Use",
      "Low": 17,
      "Some": 0,
      "Much": 0,
      "High": 10
    }];
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.title.text = "Categories";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    
    var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Number Of Individuals";
    
    chart.colors.list = [
      am4core.color("#019D01"),
      am4core.color("#FDF311"),
      am4core.color("#ee5500"),
      am4core.color("#ee0000")
    ]
    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "Low";
    series.dataFields.categoryX = "name";
    series.name = "Low";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    // This has no effect
    // series.stacked = true;
    
    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "Some";
    series2.dataFields.categoryX = "name";
    series2.name = "Some";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    // Do not try to stack on top of previous series
    // series2.stacked = true;
    
    var series3 = chart.series.push(new am4charts.ColumnSeries3D());
    series3.dataFields.valueY = "Much";
    series3.dataFields.categoryX = "name";
    series3.name = "Much";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.stacked = true;

    var series4 = chart.series.push(new am4charts.ColumnSeries3D());
    series4.dataFields.valueY = "High";
    series4.dataFields.categoryX = "name";
    series4.name = "High";
    series4.tooltipText = "{name}: [bold]{valueY}[/]";
    series4.stacked = true;
  

    chart.legend = new am4charts.Legend();
    
    chart.dataFields.color = "color";

  }, []);

  return (
    <div className="bar-outer">
      <div id="bardiv" style={{ width: "75%", height: "500px" }}>

      </div>
    </div>
  )
}
export default Bar;