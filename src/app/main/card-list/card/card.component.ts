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
  selectedCard: number;

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

    // console.log(this.surveyData['SurveyPeriods'], this.multiDate);
  }
  onSelectCard() {
    this.click.emit({
      id: this.selectedCard,
    });
    console.log(this.selectedCard, '****');
  }
}
