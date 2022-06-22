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

  constructor(
    private router: ActivatedRoute,
    public surveyService: SurveysService
  ) {}

  ngOnInit(): void {
    this.router.data.subscribe((res: any) => {
      // console.log('hi');
      this.surveys = res.surveys;
    });
    // console.log(this.surveyService.surveys);
  }

  // ngOnInit() {
  //   this.router.data.subscribe(({ hero }) => {
  //     console.log(hero);
  // do something with your resolved data ...
  //   });

  // const resolvedData = this.router.snapshot.data['resolvedData'];
  // this.surveys = resolvedData.surveys;
  // console.log(this.surveyService.getSurveys());
  // console.log(this.router.snapshot.data.resolvedData);
  // }
}
