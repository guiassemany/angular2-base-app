import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Article } from './article';
import 'rxjs/add/operator/toPromise';

const baseUrl =  'https://newsapi.org';
const newsApiKey = 'f9be73600ea84fe185f0175ca5548ed2';

@Injectable()
export class ArticleService {

  constructor(
    private http: Http
  ) { }

  public getArticles(): Promise<Article[]>
  {
    let params = new URLSearchParams();
    params.set('apiKey', newsApiKey);
    params.set('source', 'reddit-r-all');

    return this.http
        .get(`${baseUrl}/v1/articles`, {
          search: params
        })
        .toPromise()
        .then(resp => resp.json())
        .then(json => json.articles)
        .then(articles => {
          return articles
            .map(article => Article.fromJSON(article));
        })
        .catch(err => {
          console.error('We got an error', err);
        });
  }
}
