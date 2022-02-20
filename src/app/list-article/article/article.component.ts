import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/get-articles.service';
import { Article } from '../../entity/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article!: Article;

  constructor(private route: ActivatedRoute, private fetchData: ArticlesService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('id'));
    this.fetchData.getArticle(articleIdFromRoute).subscribe(resp =>{
       this.article = resp;
    });

  }

}
