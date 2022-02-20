import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Article } from 'src/app/entity/article';
import { ArticlesService } from 'src/app/services/get-articles.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articleList: Article[] = [];

  
  addArticleForm = this.formBuilder.group({
    title: '',
    content: ''
  });

  constructor(private formBuilder: FormBuilder, private fetchData: ArticlesService) { }

  ngOnInit(): void {
    this.fetchData.getArticles().subscribe(resp =>{
      this.articleList = resp;
    });
  }

  onSubmit(): void{
    this.fetchData.addArticle(this.addArticleForm.value.title,this.addArticleForm.value.content, 1).subscribe(resp=>{
      console.log(resp);
      this.fetchData.emitNewArticle(resp);
    })
  }


}
