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
  @Input() gloId: number;

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
  }
  onSelectCard() {
    if (this.gloId === this.surveyData['TEMPLATE_ID']) {
      this.gloId = 0;
    } else {
      this.gloId = this.surveyData['TEMPLATE_ID'];
      this.click.emit({
        id: this.gloId,
      });
    }

    console.log(this.gloId);

    // let cards = document.getElementsByClassName('selected');
    // cards[0]?.classList.remove('selected');

    // let selected = document.getElementById(this.selectedCard.toString());
    // selected.classList.add('selected');
  }

  setClasses() {
    return this.surveyData['TEMPLATE_ID'] === this.gloId;
  }
}
