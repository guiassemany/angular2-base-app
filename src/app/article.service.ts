import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Promise<Article[]>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve ([
          new Article(
            'The Angular 2 Screencast',
            'Testing angular 1', 10
          ), new Article(
            'The Angular 2 Screencast',
            'Testing angular 2'
          ), new Article(
            'The Angular 2 Screencast',
            'Testing angular 5'
          )
        ]);
      }, 2000);
    });
  }
}
