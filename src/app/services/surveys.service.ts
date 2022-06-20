import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Survey } from 'src/app/models/survey.model';

@Injectable({
  providedIn: 'root',
})
export class SurveysService {
  surveys: Survey[] = [];
  selectedId: number;

  constructor(public http: HttpClient) {}

  fetchSurveys = async () => {
    let data = await this.http
      .get('https://mocki.io/v1/fec2e155-8904-4dc8-a97a-2b7015f474ed')
      .toPromise();

    this.surveys = data[0];
  };
  getSurveys() {
    // console.log(this.surveys);

    return this.surveys;
  }
  setSurvey(id: number) {
    // console.log(this.selectedId);
    this.selectedId = id;
    console.log(this.selectedId);
  }
  getSurvey() {
    // console.log(this.selectedId);
    if (this.selectedId) {
      return (
        this.surveys.find(
          (survey) => survey['TEMPLATE_ID'] === this.selectedId
        ) ?? 0
      );
    } else {
      return {};
    }
  }
  modifyData(newData: string) {
    this.surveys;
  }
}
