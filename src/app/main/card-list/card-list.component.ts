import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/app/models/survey.model';
import { SurveysService } from 'src/app/services/surveys.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  newSurveyName: string = '';
  surveys: Survey[] = [];

  constructor(
    public http: HttpClient,
    private surveysService: SurveysService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.surveysService.fetchSurveys();
    this.surveys = this.surveysService.getSurveys();
  }
  onSelectCard(id: number) {
    this.surveysService.setSurvey(id);
  }
}
