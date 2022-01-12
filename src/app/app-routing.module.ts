import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionLearnComponent } from './question-learn/question-learn.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { PartialTestComponent } from './partial-test/partial-test.component';
import { FullTestComponent } from './full-test/full-test.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'question-learn',
    component: QuestionLearnComponent,

  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'partial-test',
    component: PartialTestComponent
  },
  {
    path: 'full-test',
    component: FullTestComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
