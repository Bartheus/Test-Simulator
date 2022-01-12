import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionLearnComponent } from './question-learn/question-learn.component';
import { OptionBackgroundDirective } from './option-background.directive';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { PartialTestComponent } from './partial-test/partial-test.component';
import { FullTestComponent } from './full-test/full-test.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionLearnComponent,
    OptionBackgroundDirective,
    NavigationBarComponent,
    TestComponent,
    HomeComponent,
    PartialTestComponent,
    FullTestComponent,
    ResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
