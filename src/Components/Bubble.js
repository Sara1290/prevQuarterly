import React, {useLayoutEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 


const Bubble = (props) => {

  useLayoutEffect(() => {
    let chart = am4core.create("bubblediv", am4plugins_forceDirected.ForceDirectedTree); 
   
    var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
  
  series.data = [
    {
      "name": "Previdence Assessment Panels Taken",
      "value" : 22,
      "color": "#e00"
    },{
      "name": "Previdence Assessment Panels Remaining",
      "value": 0, 
      "color": "#FDF311"
    }, {
      "name":"Re-Assessment Panels Taken", 
      "value": 5,
      "color": "#019D01"
    }, {
      "name":"Employees Discharged from Treatment with the Previdence Preferred Network", 
      "value": 4,
      "color": "#00E"
    }, {
      "name": "Employees Currently in Treatment with the Previdence Provider Network", 
      "value": 1,
      "color": "#60E"
    }, {
      "name": "Family Members Offered Assessments",
      "value": 2,
      "color": "#B3B"
    }, {
      "name": "Family Member Assessments Taken",
      "value": 1,
      "color": "#08E"
    }, {
      "name" :"Family Members in Treatment in the Previdence Provider Network",
      "value": 0,
      "color": "#063"
    }
  ];
  
  chart.legend = new am4charts.Legend();
  
  series.dataFields.value = "value";
  series.dataFields.name = "name";
  series.dataFields.color = "color";

  
  series.nodes.template.label.text = "{value}";
  series.fontSize = 40;
  series.minRadius = 40;
  series.maxRadius = 100;
  

  chart.colors.list = [
    am4core.color("#ee0000"),
    am4core.color("#ee5500"),
    am4core.color("#FDF311"),
    am4core.color("#019D01")
  ]

}, []);
  return (
    <div>
        <div id="bubblediv" style={{ width: "100%", height: "500px" }}>
        </div>
    </div>
  )
}
export default Bubble;