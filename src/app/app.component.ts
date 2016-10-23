import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [ new Article(
      'The Angular 2 Screencast',
      'Testing angular 1', 10
    ), new Article(
      'The Angular 2 Screencast',
      'Testing angular 2'
    ), new Article(
      'The Angular 2 Screencast',
      'Testing angular 3'
    )];
  }
}
