import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

dataSource : Object;
data: Object;
dataSource1 : Object;

    constructor() {


    this.dataSource = {
      chart: {
          caption: "3D Pie chart",
          subcaption: "Website usage by age group",
          startingangle: "120",
          showlabels: "0",
          showlegend: "1",
          enablemultislicing: "0",
          slicingdistance: "15",
          showpercentvalues: "1",
          showpercentintooltip: "0",
          plottooltext: "Age group : $label Total visit : $datavalue",
          theme: "ocean"
      },
      data: [
          {
              label: "Teenage",
              value: "1250400"
          },
          {
              label: "Adult",
              value: "1463300"
          },
          {
              label: "Mid-age",
              value: "1050700"
          },
          {
              label: "Senior",
              value: "491000"
          }
      ]
    };

    this.data = {
      chart: {
      caption: "2D column chart",

      },
      data: [
        {label:"Javascript", value: 100},
        { label:"Typescript" ,value: 60},
        { label:"Ecmascript",value: 50}
      ]
    };
    }

    ngOnInit() {
    }



}
