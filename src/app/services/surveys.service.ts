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
  filteredData: any = [];

  selectedId: number;

  constructor(private http: HttpClient) {}

  fetchSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.API_URL);
  }
  getSurveys() {
    return [...this.surveys];
  }
  setSurvey(id: number) {
    this.selectedId = this.selectedId === id ? undefined : id;
  }
  getSurvey() {
    // console.log(this.surveys);

    if (this.selectedId) {
      // console.log('Survey is chosen and ID = ', this.selectedId);
      return (
        this.filteredData.find(
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
    this.filteredData.forEach((survey) => {
      for (const singleSurvey in survey) {
        if (survey[singleSurvey]['TEMPLATE_ID'] === id) {
          chosenSurvey = survey[singleSurvey];
        }
      }
    });

    return chosenSurvey;
  }

  filterSurveysByName(filter: string) {
    if (!filter) {
      return;
    } else {
      this.filteredData[0] = [...this.getSurveys()[0]].filter((e) => {
        return e.SurveyName.toLowerCase().includes(filter.toLowerCase());
      });
    }
    console.log(this.surveys[0], this.filteredData[0]);
  }

  filterSurveysByType(filter: string) {
    if (!filter || filter === 'All Surveys') {
      console.log(filter);
      this.filteredData[0] = [...this.getSurveys()[0]];

      return;
    } else {
      this.filteredData[0] = [...this.getSurveys()[0]].filter((e) => {
        console.log(e);
        return e['SURVEY_STATUS_EN']
          .toLowerCase()
          .includes(filter.toLowerCase());
      });
    }
    console.log(this.surveys[0], this.filteredData[0]);
  }
}
