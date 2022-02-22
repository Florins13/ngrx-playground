import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Article } from 'src/app/entity/article';
import { ArticlesService } from 'src/app/services/get-articles.service';
import { addArticle } from 'src/app/state/article.actions';
import { selectArticles } from 'src/app/state/article.selector';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  $articles = this.store.select(selectArticles);

  addArticleForm = this.formBuilder.group({
    title: '',
    content: ''
  });

  constructor(private formBuilder: FormBuilder, private fetchData: ArticlesService, private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.fetchData.addArticle(
      this.addArticleForm.value.title,
      this.addArticleForm.value.content, 101).subscribe(article=>{
      this.store.dispatch(addArticle({ article }));
    })
  }


}
