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
  viewGrid: boolean = true;
  viewList: boolean = false;

  viewChange(el: HTMLElement) {
    let choice = el.parentElement.attributes[1].value;
    if (choice === 'list') {
      this.viewGrid = true;
      this.viewList = false;
    } else {
      this.viewGrid = false;
      this.viewList = true;
    }
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
