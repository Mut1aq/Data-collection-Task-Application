import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/app/models/survey.model';
import { SurveysService } from 'src/app/services/surveys.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  newSurveyName: string = '';
  surveys: Survey[] = [];
  gloId: number;
  dashboardEnable: boolean = false;

  constructor(
    public http: HttpClient,
    private surveysService: SurveysService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.surveysService.fetchSurveys().subscribe(
      (data) => {
        this.surveys = data[0];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSelectCard(id: number) {
    this.dashboardEnable = true;
    this.gloId = id;
  }

  openDialog() {
    const selectedSurvey = this.surveys.find(
      (survey) => survey['TEMPLATE_ID'] === this.gloId
    );
    console.log(typeof selectedSurvey);

    let dialogRef = this.dialog.open(DialogComponent, {
      data: selectedSurvey,
    });

    dialogRef.afterClosed().subscribe((result) => {
      let english = /^[A-Za-z0-9]*$/;
      if (result.length > 4 && english.test(result)) {
        selectedSurvey['SurveyName'] = result;
        console.log(selectedSurvey['SurveyName']);
      } else {
        console.log(`${result} must be English and more then 4 characters`);
      }
    });
  }
}
