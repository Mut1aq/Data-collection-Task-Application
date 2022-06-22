import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Survey } from 'src/app/models/survey.model';
import { SurveysService } from '../../services/surveys.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent {
  surveys: Survey[] = [];
  displayedColumns: string[] = ['SurveyName', 'From', 'To', 'Period'];
  dataSource: MatTableDataSource<any>;
  result: any;

  constructor(public surveysService: SurveysService) {}

  ngOnInit() {
    this.surveys = this.surveysService.getSurveys();
    console.log(this.surveys);

    this.surveys.forEach((survey) => {
      for (const singleSurvey in survey) {
        if (!survey[singleSurvey]['SurveyPeriods']) {
          survey[singleSurvey]['SurveyPeriods'] =
            '[{"ID":21659,"START_DATE":"2021-01-26T00:00:00","END_DATE":"2022-02-28T00:00:00"}]';
          // chosenSurvey = survey[singleSurvey];
        }
        survey[singleSurvey]['SurveyPeriods'] = JSON.parse(
          survey[singleSurvey]['SurveyPeriods']
        );
        survey[singleSurvey]['multiDate'] =
          survey[singleSurvey]['SurveyPeriods'] &&
          survey[singleSurvey]['SurveyPeriods'].length > 1;
      }
    });
  }

  ngAfterViewInit() {
    this.result = this.surveys[0];

    this.dataSource = new MatTableDataSource(this.result);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
