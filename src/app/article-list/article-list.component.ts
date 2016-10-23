import { Component, Input,  OnInit } from '@angular/core';
import { ArticleService} from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  private articleService: ArticleService;

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  ngOnInit() {
    this.articleService
      .getArticles()
      .then(articles => this.articles = articles);
  }

}
