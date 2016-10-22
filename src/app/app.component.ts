import { Component, Input } from '@angular/core';

class Article {
  public title: string;
  public description: string;

  constructor(title: string, description:string){
    this.title = title;
    this.description = description;
  }

}

@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">
        Sidebar will go here
    </div>
  `
})
export class SidebarComponent{}

@Component({
  selector: 'app-article',
  template: `
    <div class="image">
        <img src="https://placekitten.com/g/400/300" alt="">
    </div>
    <div class="content">
        <div class="header">
            <h2>{{article.title}}</h2>
        </div>
        <div class="meta">
            Voting and Votes will go here
        </div>
        <div class="meta date">
            Today
        </div>
        <div class="meta description">
            <p>{{article.description}}</p>
        </div>
        <div class="extra">
            <a 
                href="#"
                target="_blank"
                class="ui right floated button primary ">
                Read More
                <i class="right chevron icon "></i>
            </a>
        </div>
    </div>
    `
})
export class ArticleComponent {
  @Input() article: Article;
}

@Component({
  selector: 'app-root',
  templateUrl: `
    <div class="ui container">
      <app-sidebar></app-sidebar>
      <div class="ui divided items">
        <app-article 
            *ngFor="let article of articles" 
            [article]="article" 
            class="item" >
        </app-article>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [ new Article(
      'The Angular 2 Screencast',
      'Testing angular 1'
    ), new Article(
      'The Angular 2 Screencast',
      'Testing angular 2'
    ), new Article(
      'The Angular 2 Screencast',
      'Testing angular 3'
    )];
  }
}
