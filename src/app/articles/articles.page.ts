import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})

export class ArticlesPage implements OnInit {
articles:Article;

constructor(
  private activatedRoute: ActivatedRoute,
  private articlesService: ArticlesService,
  private router: Router
  ) {}

ngOnInit() {
  this.activatedRoute.params.subscribe(params=>{
    this.getArticles();
  });
}

getArticles():void {
  this.articlesService.getArticles().subscribe(
    (response:any)=>{
      console.log(response);
      this.articles = response.article;
    }
  );

}

}
