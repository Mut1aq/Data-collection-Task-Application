import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { map } from 'rxjs/operators';
import { Survey } from '../models/survey.model';
import { SurveysService } from '../services/surveys.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyDataResolver implements Resolve<any> {
  // Great Article: https://www.bacancytechnology.com/blog/angular-resolver
  // it explains why you don't need the subscribe here at the resolver
  constructor(private surveysService: SurveysService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.surveysService.fetchSurveys().pipe(
      map((value) => {
        console.log('HI');
        this.surveysService.surveys = value;
        // console.log(typeof value);
        return value;
      })
    );
  }
}
