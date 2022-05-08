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
            this.carrerResultArray.push({
              id: index,
              gender: row[1],
              age: row[2],
              education: row[3],
              region: row[4],
              nationalitty: row[5],
              faith: row[6],
              relationshipStatus: row[7],
              currentChildren: row[8],
              currentEmpoyment: row[9],
              numberOfPreviousJobs: row[10],
              changed: row[11],
              employmentBeforeChange: row[12],
              previousExperience: row[13],
              previousRelationShip: row[14],
              previousNumberOfChildren: row[15],
              changeReason: row[16],
              changeAge: row[17],
              inside: row[18],
              sameField: row[19],
              training: row[20],
              familySupport: row[21],
              happyWithChange: row[22],
              securityAfterChange: row[23],
              levelAfterChange: row[24],
              incomeAfterChange: row[25],
              likeToChange: row[26],
              reasonNoChange: row[27],
            } as CarrerResult);
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
  gender: string;
  age: string;
  education: string;
  region: string;
  nationalitty: string;
  faith: string;
  relationshipStatus: string;
  currentChildren: string;
  currentEmpoyment: string;
  numberOfPreviousJobs: string;
  changed: string;
  employmentBeforeChange: string;
  previousExperience: string;
  previousRelationShip: string;
  previousNumberOfChildren: string;
  changeReason: string;
  changeAge: string;
  inside: string;
  sameField: string;
  training: string;
  familySupport: string;
  happyWithChange: string;
  securityAfterChange: string;
  levelAfterChange: string;
  incomeAfterChange: string;
  likeToChange: string;
  reasonNoChange: string;
}
