import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SurveysService {
  constructor(public http: HttpClient) {}
  fetchSurveys() {
    return this.http.get(
      'https://mocki.io/v1/fec2e155-8904-4dc8-a97a-2b7015f474ed'
    );
  }
}
