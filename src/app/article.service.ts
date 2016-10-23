import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Article } from './article';
import {Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';


@Injectable()
export class ArticleService {

  private _articles: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  public articles: Observable<Article[]> = this._articles.asObservable();

  constructor(
    private http: Http
  ) { }

  private _makeHttpRequest(
    path: string,
    sourceKey: string
  ): Observable<any> {
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', sourceKey);

    return this.http
        .get(`${environment.baseUrl}${path}`, {
          search: params
        })
        .map(resp => resp.json());
  }

  public getArticles(): void
  {
    this._makeHttpRequest('/v1/articles', 'reddit-r-all')
    .map(json => json.articles)
    .subscribe(articlesJSON => {
      const articles = articlesJSON
      .map(articlejson => Article.fromJSON(articlejson));
      this._articles.next(articles);
    });
  }
}
