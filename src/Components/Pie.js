import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Pie = (props) => {
  useLayoutEffect(() => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("piediv", am4charts.PieChart3D);

    chart.data = [
      {
        risk: "High",
        individuals: 7,
      },
      {
        risk: "Much",
        individuals: 4,
      },
      {
        risk: "Some",
        individuals: 7,
      },
      {
        risk: "Low",
        individuals: 82,
      },
    ];

    //creates the circle in the center, creating a donut chart
    chart.innerRadius = am4core.percent(25);

    //creates basically a thicker chart - but will need a series.dataFields.depthValue in pieSeries variable.
    chart.depth = 30;

    //sets a legend shows the values and the color assignments. default is below the graph - you can say top left right or bottom with chart.legend.position = "right"
    chart.legend = new am4charts.Legend();

    //now we've added depthValue the heights of the slices are also representative of their percentages.
    let pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = "individuals";
    pieSeries.dataFields.depthValue = "individuals";
    pieSeries.dataFields.category = "risk";

    pieSeries.colors.list = [
      am4core.color("#ee0000"),
      am4core.color("#ee5500"),
      am4core.color("#FDF311"),
      am4core.color("#019D01"),
    ];
  }, []);

  return (
    <div className="pie-outer">
      <h2>Annual Overall Risk</h2>

      <div id="piediv"></div>
    </div>
  );
};
export default Pie;
