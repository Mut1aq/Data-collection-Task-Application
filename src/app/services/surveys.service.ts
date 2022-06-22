import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Survey } from 'src/app/models/survey.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveysService {
  API_URL: string = 'https://mocki.io/v1/fec2e155-8904-4dc8-a97a-2b7015f474ed';

  surveys: Survey[] = [];

  selectedId: number;

  constructor(private http: HttpClient) {}

  fetchSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.API_URL);
  }
  getSurveys() {
    return this.surveys;
  }
  setSurvey(id: number) {
    // console.log(this.selectedId);
    if (this.selectedId === id) {
      this.selectedId = undefined;
      // console.log(this.selectedId, 'undefined case', id);
    } else {
      // console.log(this.selectedId, 'defined case', id);

      this.selectedId = id;
    }
  }
  getSurvey() {
    // console.log(this.surveys);

    if (this.selectedId) {
      // console.log('Survey is chosen and ID = ', this.selectedId);
      return (
        this.surveys.find(
          (survey) => survey['TEMPLATE_ID'] === this.selectedId
        ) ?? 0
      );
    } else {
      // console.log('No Survey is chosen');
      return {};
    }
  }
  getSurveyById(id: number) {
    let chosenSurvey;
    this.surveys.forEach((survey) => {
      for (const singleSurvey in survey) {
        if (survey[singleSurvey]['TEMPLATE_ID'] === id) {
          chosenSurvey = survey[singleSurvey];
        }
      }
    });

    return chosenSurvey;
  }

  modifyData(newData: string) {
    this.getSurvey();
  }
}
