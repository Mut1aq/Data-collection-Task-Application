import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey.model';
import { ActivatedRoute } from '@angular/router';
import { SurveysService } from '../services/surveys.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  surveys: Survey[] = [];
  selectedType: string;

  viewChange(el: HTMLElement) {
    this.selectedType = el.attributes[1].value;
  }

  constructor(
    private router: ActivatedRoute,
    public surveyService: SurveysService
  ) {}

  ngOnInit(): void {
    this.router.data.subscribe((res: any) => {
      this.surveys = res.surveys;
    });
  }
}
