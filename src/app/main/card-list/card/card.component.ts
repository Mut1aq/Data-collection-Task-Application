import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() click = new EventEmitter<{ id: number }>();
  multiDate: boolean;
  @Input() surveyData: [{}];
  @Input() selectedId: number;

  constructor() {}

  ngOnInit(): void {
    // console.log(typeof this.surveyData['SurveyPeriods']);
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
    // console.log(this.selectedId);
  }
  setClasses() {
    return this.selectedId == this.surveyData['TEMPLATE_ID'] ? 'selected' : '';
  }
  onSelectCard() {
    if (this.selectedId === this.surveyData['TEMPLATE_ID']) {
      this.selectedId = 0;
    } else {
      this.selectedId = this.surveyData['TEMPLATE_ID'];
      this.click.emit({
        id: this.selectedId,
      });
    }
  }
}
