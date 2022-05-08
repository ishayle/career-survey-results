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

  constructor(private surveyDataService: SurveyDataService) {
    
  }
  public ngOnInit(): void {
    this.carrerResultArray = this.surveyDataService.carrerResultArray;
  }

}
