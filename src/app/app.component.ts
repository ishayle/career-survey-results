import { Component, VERSION } from '@angular/core';
import { CareerResult, SurveyDataService } from './survey-data.service';
import RawData = require('./rawData');
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public carrerResultArray: CareerResult[] = [];
  public dynamicResults = [];
  public dynamicResults2 = [];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  view: [700, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };
  //pie
  showLabels = true;
  constructor(private surveyDataService: SurveyDataService) {
    // this.surveyDataService.getData().subscribe(c=>{
    //   console.log(c);
    // });
    // var reasons = {};
    // this.carrerResultArray.forEach((row) => {
    //   row.changeReason.forEach((reason) => {
    //     if (reasons[reason]) {
    //       reasons[reason].count++;
    //     } else {
    //       reasons[reason] = { name: reason, gender: row.gender, count: 1 };
    //     }
    //   });
    // });
    // console.log(reasons);
  }
  public ngOnInit(): void {
    RawData.this.dynamicResults = [
      {
        name: 'reason1',
        series: [
          {
            name: 'male',
            value: 2243772,
          },
          {
            name: 'female',
            value: 1227770,
          },
        ],
      },
      {
        name: 'reason2',
        series: [
          {
            name: 'male',
            value: 23772,
          },
          {
            name: 'female',
            value: 1770,
          },
        ],
      },
    ];
  }
}
