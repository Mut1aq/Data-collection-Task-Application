import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveysService } from 'src/app/services/surveys.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() click = new EventEmitter<{ id: number }>();
  @Input() surveyData: {};
  @Input() selectedId: number;

  multiDate: boolean;

  constructor(private surveysService: SurveysService) {}

  ngOnInit(): void {
    if (!this.surveyData['SurveyPeriods']) {
      this.surveyData['SurveyPeriods'] =
        '[{"ID":21659,"START_DATE":"2021-01-26T00:00:00","END_DATE":"2022-02-28T00:00:00"}]';
    }
    this.surveyData['SurveyPeriods'] = JSON.parse(
      this.surveyData['SurveyPeriods']
    );

    this.multiDate =
      this.surveyData['SurveyPeriods'] &&
      this.surveyData['SurveyPeriods'].length > 1;
  }

  onSelectCard() {
    if (
      this.surveysService.getSurvey()['TEMPLATE_ID'] ===
      this.surveyData['TEMPLATE_ID']
    ) {
      this.selectedId = 0;
      this.surveysService.setSurvey(0);
      console.log(this.surveysService.getSurvey());
    } else {
      this.selectedId = this.surveyData['TEMPLATE_ID'];
      this.click.emit({
        id: this.selectedId,
      });
      this.surveysService.setSurvey(this.selectedId);
      // console.log(this.surveysService.getSurvey());
    }
  }

  setClasses() {
    return this.selectedId == this.surveyData['TEMPLATE_ID'] ? 'selected' : '';
  }
}
