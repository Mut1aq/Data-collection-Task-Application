import { Component, OnInit } from '@angular/core';
import { SurveysService } from '../services/surveys.service';
import { Survey } from '../models/survey.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(public surveysService: SurveysService) {}

  async ngOnInit(): Promise<void> {
    await this.surveysService.fetchSurveys();
    // this.surveysService.setSurvey(0);
    // console.log(this.surveysService.getSurvey());
  }
}
