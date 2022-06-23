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
        this.surveysService.surveys = value;

        // Fix Null values in Survey data
        this.surveysService.surveys.forEach((survey) => {
          for (const singleSurvey in survey) {
            if (!survey[singleSurvey]['SurveyPeriods']) {
              survey[singleSurvey]['SurveyPeriods'] =
                '[{"ID":21659,"START_DATE":"2021-01-26T00:00:00","END_DATE":"2022-02-28T00:00:00"}]';
            }
            // Parse data to access ['START_DATE'] and ['END_DATE']
            survey[singleSurvey]['SurveyPeriods'] = JSON.parse(
              survey[singleSurvey]['SurveyPeriods']
            );

            //  assign new key ['multiDate'] (Periods)
            survey[singleSurvey]['multiDate'] =
              survey[singleSurvey]['SurveyPeriods'] &&
              survey[singleSurvey]['SurveyPeriods'].length > 1;
          }
        });

        this.surveysService.filteredData.push(...this.surveysService.surveys);
        return value;
      })
    );
  }
}
