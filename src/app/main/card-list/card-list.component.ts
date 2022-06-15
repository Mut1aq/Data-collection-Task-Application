import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/app/models/survey.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  constructor(public http: HttpClient) {}
  surveys: Survey[] = [];
  gloId: number;

  ngOnInit(): void {
    this.http
      .get('https://mocki.io/v1/fec2e155-8904-4dc8-a97a-2b7015f474ed')
      .subscribe(
        (data) => {
          this.surveys = data[0];
          for (const survey of this.surveys) {
            console.log(JSON.parse(survey['SurveyPeriods']), '*');
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
  onSelectCard(id: number) {
    this.gloId = id;
  }
}
