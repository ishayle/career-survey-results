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
  constructor(private surveyDataService: SurveyDataService) {}
  public ngOnInit(): void {
    var reasons = {};
    this.surveyDataService.getData().forEach((row) => {
      row.changeReason.forEach((reason) => {
        if (reason) {
          if (reasons[reason]) {
            if (reasons[reason][row.gender]) {
              reasons[reason][row.gender].value++;
            } else {
              reasons[reason][row.gender] = {
                value: 1,
              };
            }
          } else {
            reasons[reason] = {};
            reasons[reason][row.gender] = {
              value: 1,
            };
          }
        }
      });
    });
    console.log(reasons);

    Object.keys(reasons).forEach((key) => {
      var a = [];
      Object.keys(reasons[key]).forEach((f) => {
        a.push({ name: f, value: reasons[key][f].value });
      });
      this.dynamicResults.push({
        name: key,
        series: a,
      });
    });
    console.log(this.dynamicResults);
    // this.dynamicResults = [
    //   {
    //     name: 'reason1',
    //     series: [
    //       {
    //         name: 'male',
    //         value: 2243772,
    //       },
    //       {
    //         name: 'female',
    //         value: 1227770,
    //       },
    //     ],
    //   },
    //   {
    //     name: 'reason2',
    //     series: [
    //       {
    //         name: 'male',
    //         value: 23772,
    //       },
    //       {
    //         name: 'female',
    //         value: 1770,
    //       },
    //     ],
    //   },
    // ];
  }
}
