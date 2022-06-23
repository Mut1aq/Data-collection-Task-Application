import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Survey } from 'src/app/models/survey.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveysService {
  API_URL: string = 'https://mocki.io/v1/fec2e155-8904-4dc8-a97a-2b7015f474ed';

  surveys: any = [];

  selectedId: number;

  constructor(private http: HttpClient) {}

  fetchSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.API_URL);
  }
  getSurveys() {
    return this.surveys;
  }
  setSurvey(id: number) {
    this.selectedId = this.selectedId === id ? undefined : id;
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

  filterSurveys(filter: string) {
    console.log(this.surveys);
    this.surveys[0] = this.surveys[0].filter((e) => {
      console.log(e.SurveyName.toLowerCase(), '***', filter.toLowerCase());
      return e.SurveyName.toLowerCase().includes(filter.toLowerCase());
    });
    console.log(this.surveys);
  }
}
