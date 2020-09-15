import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
articles:Article;

constructor(private articlesService:ArticlesService) {}

ngOnInit() {
  this.getArticles();
}

public getArticles(): void{
  this.articlesService.getArticles().subscribe(
    (response:any) => {
      this.articles = response.articles;
    }
  );
}
  
}
