import React, { useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const Tree = (props) => {

  useLayoutEffect(() => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("treediv", am4charts.TreeMap);

  chart.data = [{
    "name": "Suicidal",
    "children": [
      {"name": "Low", "value": 24},
      {"name": "Some", "value": 1},
      {"name": "Much", "value": 1},
      {"name": "High", "value": 1},
    ], 
    "color": "#e00"
  }, {
    "name": "Anxiety",
    "children": [
      {"name": "Low", "value": 21},
      {"name": "Some", "value": 5},
      {"name": "Much", "value": 1},
      {"name": "High", "value": 0},
    ], 
    "color": "#B9B100"
  }, {
    "name": "Depression",
    "children": [
      {"name": "Low", "value": 24},
      {"name": "Some", "value": 3},
      {"name": "Much", "value": 0},
      {"name": "High", "value": 0},
    ], 
    "color": "#FD5A00"
  }, {
    "name": "Insomnia",
    "children": [
      {"name": "Low", "value": 18},
      {"name": "Some", "value": 5},
      {"name": "Much", "value": 4},
      {"name": "High", "value": 0},
    ], 
    "color": "#019D01"
  }, {
    "name": "PTSD",
    "children": [
      {"name": "Low", "value": 23},
      {"name": "Some", "value": 3},
      {"name": "Much", "value": 0},
      {"name": "High", "value": 1},
    ], 
    "color": "#00E"
  }, {
    "name": "Support System",
    "children": [
      {"name": "Low", "value": 20},
      {"name": "Some", "value": 7},
      {"name": "Much", "value": 0},
      {"name": "High", "value": 0},
    ],
    "color": "#60E"
   
  }, {
    "name": "Alcohol Use",
    "children": [
      {"name": "Low", "value": 17},
      {"name": "Some", "value": 0},
      {"name": "Much", "value": 0},
      {"name": "High", "value": 10},
    ], 
    "color": "#B3B"
  }
];



chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";
chart.dataFields.color = "color";

/* Create top-level series */


var level1 = chart.seriesTemplates.create("0");
var level1_column = level1.columns.template;
// level1_column.tooltipText = "{parent} {name}";
level1_column.fillOpacity = 0;
level1_column.strokeOpacity = 0;

/* Create second-level series */
var level2 = chart.seriesTemplates.create("1");
var level2_column = level2.columns.template;
level2_column.column.cornerRadius(5);
level2_column.fillOpacity = 0.8;
level2_column.stroke = am4core.color("#fff");
level2_column.strokeWidth = 5;
level2_column.strokeOpacity = 1;

var level2_bullet = level2.bullets.push(new am4charts.LabelBullet());
level2_bullet.locationY = 0.5;
level2_bullet.locationX = 0.5;
level2_bullet.label.text = "{name}";
level2_bullet.label.fill = am4core.color("#fff");

chart.legend = new am4charts.Legend();

}, []);

  return (
    <div className="tree-outer">
      <h2>Annual Assessment Overview</h2>
        <div id="treediv" style={{ width: "75%", height: "500px" }}> 

        </div>
    </div>
  )
}
export default Tree;