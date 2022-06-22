import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { CardListComponent } from './main/card-list/card-list.component';
import { CardComponent } from './main/card-list/card/card.component';

import { DialogComponent } from './main/dialog/dialog.component';
import { StatusTabComponent } from './main/status-tab/status-tab.component';
import { GridListComponent } from './main/grid-list/grid-list.component';
import { MatSortModule } from '@angular/material/sort';
import { UsernameComponent } from './header/username/username.component';
import { RouterModule, Routes } from '@angular/router';
import { SurveyDataResolver } from './resolve/survey-data-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: { resolvedData: SurveyDataResolver },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardListComponent,
    CardComponent,
    DialogComponent,
    StatusTabComponent,
    GridListComponent,
    UsernameComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
