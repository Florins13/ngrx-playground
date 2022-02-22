import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../entity/article';
import { ArticlesService } from '../services/get-articles.service';
import { Store } from '@ngrx/store';
import { selectAllArticles, selectArticles } from '../state/article.selector';
import { fetchArticles, fetchArticlesSuccess, removeArticle } from '../state/article.actions';
import { map } from 'rxjs';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  $articles = this.store.select(selectArticles);
  
  constructor(private store: Store) { }
  
  ngOnInit(): void {
    this.store.select(selectArticles).subscribe(articleList =>{
      if(articleList.length === 0) this.store.dispatch(fetchArticles());
    })
  }

  deleteArticle(articleId: number){
    this.store.dispatch(removeArticle({articleId}))   
  }
  
}

