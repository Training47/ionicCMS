import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

article: Article;

constructor(
  private activatedRoute: ActivatedRoute,
  private articlesService: ArticlesService,
  private router: Router
  ) { }

ngOnInit() {
  this.activatedRoute.params.subscribe(params=>{
    this.getArticle(params['articleId']);
  });
}

public getArticle(id:string):void {
  this.articlesService.getArticle(id).subscribe(
    (response:any)=>{
      this.article = response.article;
    }
  );

}

}

