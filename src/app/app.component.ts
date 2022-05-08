import { Component, VERSION } from '@angular/core';
import { CarrerResult, SurveyDataService } from './survey-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public carrerResultArray: CarrerResult[] = [];
  public dynamicResults = [];
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
    this.carrerResultArray = this.surveyDataService.carrerResultArray;
    this.dynamicResults = [
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
