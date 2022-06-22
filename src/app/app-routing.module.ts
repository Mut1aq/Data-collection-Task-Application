import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SurveyDataResolver } from './resolve/survey-data-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: { SurveyDataResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
