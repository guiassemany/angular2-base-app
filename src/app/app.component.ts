import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleService} from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  private articleService: ArticleService;

  constructor(articleService: ArticleService){
    this.articleService = articleService;
    this.articleService.getArticles()
      .then(articles => this.articles = articles);
  }

}
