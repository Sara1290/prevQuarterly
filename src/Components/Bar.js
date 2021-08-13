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
    valueAxis.tooltip.disabled = true;
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.disabled = true;
    chart.cursor.lineX.disabled = true;

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
    series.tooltipText = "Low: [bold]{valueY}[/]";
    // This has no effect
    // series.stacked = true;
    
    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "Some";
    series2.dataFields.categoryX = "name";
    series2.name = "Some";
    series2.tooltipText = "Some: [bold]{valueY}[/]";
    // Do not try to stack on top of previous series
    // series2.stacked = true;
    
    var series3 = chart.series.push(new am4charts.ColumnSeries3D());
    series3.dataFields.valueY = "Much";
    series3.dataFields.categoryX = "name";
    series3.name = "Much";
    series3.tooltipText = "Much: [bold]{valueY}[/]";
    series3.stacked = true;

    var series4 = chart.series.push(new am4charts.ColumnSeries3D());
    series4.dataFields.valueY = "High";
    series4.dataFields.categoryX = "name";
    series4.name = "High";
    series4.tooltipText = "High: [bold]{valueY}[/]";
    series4.stacked = true;
  

    chart.legend = new am4charts.Legend();
    
    chart.dataFields.color = "color";


    let shadow = series.columns.template.filters.push(new am4core.DropShadowFilter);
      shadow.opacity = 0.1;

    let hoverState = series.columns.template.states.create("hover");
      hoverState.properties.fill = am4core.color("#396478");
      hoverState.properties.dx = -5;
      hoverState.properties.dy = -5;

      /* Slightly shift the shadow and make it more prominent on hover */
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.dx = 6;
        hoverShadow.dy = 6;
        hoverShadow.opacity = 0.3;

      let shadow2 = series2.columns.template.filters.push(new am4core.DropShadowFilter);
      shadow2.opacity = 0.1;
  
      let hoverState2 = series2.columns.template.states.create("hover");
        hoverState2.properties.fill = am4core.color("#396478");
        hoverState2.properties.dx = -5;
        hoverState2.properties.dy = -5;
  
        /* Slightly shift the shadow and make it more prominent on hover */
      let hoverShadow2 = hoverState.filters.push(new am4core.DropShadowFilter);
      hoverShadow2.dx = 6;
      hoverShadow2.dy = 6;
      hoverShadow2.opacity = 0.3;

      let shadow3 = series3.columns.template.filters.push(new am4core.DropShadowFilter);
      shadow3.opacity = 0.1;
  
      let hoverState3 = series3.columns.template.states.create("hover");
        hoverState3.properties.fill = am4core.color("#396478");
        hoverState3.properties.dx = -5;
        hoverState3.properties.dy = -5;
  
        /* Slightly shift the shadow and make it more prominent on hover */
      let hoverShadow3 = hoverState.filters.push(new am4core.DropShadowFilter);
          hoverShadow3.dx = 6;
          hoverShadow3.dy = 6;
          hoverShadow3.opacity = 0.3;

      let shadow4 = series4.columns.template.filters.push(new am4core.DropShadowFilter);
      shadow4.opacity = 0.1;
  
      let hoverState4 = series4.columns.template.states.create("hover");
        hoverState4.properties.fill = am4core.color("#396478");
        hoverState4.properties.dx = -5;
        hoverState4.properties.dy = -5;
  
        /* Slightly shift the shadow and make it more prominent on hover */
      let hoverShadow4 = hoverState.filters.push(new am4core.DropShadowFilter);
          hoverShadow4.dx = 6;
          hoverShadow4.dy = 6;
          hoverShadow4.opacity = 0.3;


  }, []);

  return (
    <div className="bar-outer">
      <div id="bardiv" style={{ width: "75%", height: "500px" }}>

      </div>
    </div>
  )
}
export default Bar;