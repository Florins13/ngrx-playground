import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../entity/article';
import { ArticlesService } from '../services/get-articles.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit, OnDestroy {

  articleList: Article[] = [];
  article!: Article;
  
  constructor(private fetchData: ArticlesService) { }

  ngOnInit(): void {
    this.fetchData.getArticles().subscribe(resp =>{
      this.articleList = resp;
      
    });
    this.fetchData.newArticle.subscribe((article: Article) =>{
      console.log("New article in list",this.articleList);
      this.articleList.push(article)
    });
  }

  deleteArticle(articleId: number){
    this.fetchData.removeArticle(articleId).subscribe(resp =>{
      this.articleList.find((item,index) => item.id === articleId ? this.articleList.splice(index,1) : '');
    });
    console.log("Updated list", this.articleList)      
  }

  ngOnDestroy(): void{
    // this.fetchData.newArticle.unsubscribe();
  }
  
}

