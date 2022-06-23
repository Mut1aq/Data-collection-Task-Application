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

  ngOnInit(): void {}

  onSelectCard() {
    if (
      this.surveysService.getSurvey()['TEMPLATE_ID'] ===
      this.surveyData['TEMPLATE_ID']
    ) {
      this.selectedId = 0;
      this.surveysService.setSurvey(0);
    } else {
      this.selectedId = this.surveyData['TEMPLATE_ID'];
      this.click.emit({
        id: this.selectedId,
      });
      this.surveysService.setSurvey(this.selectedId);
    }
  }

  setClasses() {
    return this.surveysService.selectedId == this.surveyData['TEMPLATE_ID']
      ? 'selected'
      : '';
  }
}
