import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class SurveyDataService {
  public carrerResultArray: CarrerResult[] = [];
  constructor(private http: HttpClient) {
    this.http
      .get('/assets/survey_data.csv', { responseType: 'text' })
      .subscribe(
        (data) => {
          let csvToRowArray = data.split('\n');
          for (let index = 1; index < csvToRowArray.length; index++) {
            let row = csvToRowArray[index].split(',');
            this.carrerResultArray.push(
              new CarrerResult(index, row[1], row[2])
            );
          }
          console.log(this.carrerResultArray);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

export class CarrerResult {
  id: number;
  name: String;
  lastName: String;

  constructor(id: number, name: String, lastName: String) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
  }
}
