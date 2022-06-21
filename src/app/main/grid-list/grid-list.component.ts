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
  displayedColumns: string[] = ['Survey Name', 'From', 'To', 'Period'];
  dataSource: MatTableDataSource<Survey>;

  async ngOnInit(): Promise<void> {
    await this.surveysService.fetchSurveys();
    this.surveys = this.surveysService.getSurveys();

    for (const survey of this.surveys) {
      if (!survey['SurveyPeriods']) {
        survey['SurveyPeriods'] =
          '[{"ID":21659,"START_DATE":"2021-01-26T00:00:00","END_DATE":"2022-02-28T00:00:00"}]';
      }
      survey['SurveyPeriods'] = JSON.parse(survey['SurveyPeriods']);

      survey['multiDate'] =
        survey['SurveyPeriods'] && survey['SurveyPeriods'].length > 1;
      console.log(survey['SurveyPeriods']);
    }

    this.dataSource = new MatTableDataSource(this.surveys);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public surveysService: SurveysService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
