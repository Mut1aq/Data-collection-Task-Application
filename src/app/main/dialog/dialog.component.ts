import { Component, OnInit, Inject } from '@angular/core';
import { Survey } from 'src/app/models/survey.model';
import { SurveysService } from 'src/app/services/surveys.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  survey: {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private surveysService: SurveysService
  ) {}

  ngOnInit(): void {
    this.survey = this.surveysService.getSurvey();
    console.log(this.survey['SurveyName']);
  }
}
