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
  surveys: any = [];
  displayedColumns: string[] = ['SurveyName', 'From', 'To', 'Period'];
  dataSource: MatTableDataSource<any>;

  constructor(public surveysService: SurveysService) {}

  ngOnInit() {}
  onSelectCard(id: number) {
    this.surveysService.setSurvey(id);
  }

  ngAfterViewInit() {
    this.surveys = this.surveysService.filteredData;
    console.log(this.surveys);
    this.dataSource = new MatTableDataSource(this.surveys[0]);
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
